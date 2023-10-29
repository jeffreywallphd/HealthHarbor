/*

Contains Bureau details.

Testing steps:
1. To avoid hardcoding these parameters, set your environment variables before launching.
2. You also need to register your application at https://login.inrupt.com/registration.html

export CLIENTID="XXXX"
export CLIENTSECRET="XXXX"
export CLIENTNAME="Postman"  --- Change this  you are using a different application..
export REDIRECTURL="http://localhost:8080/callback" -- Change your port if necessary
export OIDCISSUER="https://login.inrupt.com"
export WEBID="XXX" --- Your webId
export LISTENPORT=8080 -- Change your port if necessary

Then invoke your file:

    node bureauServer.mjs

*/

import {
    getSolidDataset,
    createSolidDataset,
    setThing,
    saveSolidDatasetAt,
    createThing,
    getPodUrlAll,
    setStringNoLocale,
    getThingAll,
    removeThing
} from '@inrupt/solid-client';

import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

// const session = getSessionFromStorage("mainSession");
import { Session } from "@inrupt/solid-client-authn-node";
import { fetch } from "@inrupt/solid-client-authn-browser";

const session = new Session();

async function ensureLoggedIn(req, res, next) {
    try {


        if (session && !session.info.isLoggedIn) {
            const authHeader = req.headers.authorization;
            if (authHeader && authHeader.startsWith('Bearer ')) {
                const token = authHeader.split(' ')[1];
                //console.log("Token -----------" + token)
                try {
                    await session.login({
                        clientName: process.env.CLIENTNAME,
                        oidcIssuer: process.env.OIDCISSUER,
                        redirectUrl: process.env.REDIRECTURL,
                        clientId: process.env.CLIENTID,
                        clientSecret: process.env.CLIENTSECRET,
                        token: token
                    });
                    //console.log("Successfully logged in -----------")
                    next();
                } catch (error) {
                    res.status(401).send("Authentication failed.");
                    console.log("Authentication failed. === " + error)
                }
            } else {
                res.status(401).send("Bearer token missing.");
                console.log("Bearer token missing. ")
            }
        } else {
            next();
        }

    } catch (error2) {
        console.log("error === " + error2)
    }
}

//console.log("Server.js is starting..." + session);

async function getDefaultPod() {
    console.log("starting getDefaultPod execution...");
    const mypods = await getPodUrlAll(process.env.WEBID, { fetch: fetch });
    return mypods[0];
};

// Using ontology classes and properties
const bureau_IRI = "https://example.com/credit#Bureau";
const BUREAU_ID_IRI = "https://example.com/credit#bureauID";
const BUREAU_NAME_IRI = "https://example.com/credit#bureauName";
const BUREAU_ADDRESS_IRI = "https://example.com/credit#bureauAddress";
const CONTACT_NUMBER_IRI = "https://example.com/credit#contactNumber";

async function saveBureauData(bureauID, bureauName, bureauAddress, contactNumber) {
    console.log("starting saveBureauData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/credit/Bureau`;

    // Fetch existing dataset or create new if not exists
    let dataset;
    try {
        console.log("Fetching container details ...");
        dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
    } catch (error1) {
        try {


            if (typeof error1.statusCode === "number" && error1.statusCode === 404) {
                console.log("Resource not found. Creating a new container...");
                //dataset = await createContainerAt(datasetUrl, { fetch: session.fetch });
                dataset = createSolidDataset();
                console.log("Container created successfully at:", datasetUrl);
            }
            else {
                console.log("Error occured while attempting to fetch container details :", error1);
            }
        } catch (error2) {
            console.log("Error encountered while creating a new container...", error2);
        }

    }

    // Generate a unique identifier
    let recordName = "bureau" + bureauID;
    let bureau = createThing({ name: recordName });


    bureau = setStringNoLocale(bureau, BUREAU_ID_IRI, bureauID);
    bureau = setStringNoLocale(bureau, BUREAU_NAME_IRI, bureauName);
    bureau = setStringNoLocale(bureau, BUREAU_ADDRESS_IRI, bureauAddress);
    bureau = setStringNoLocale(bureau, CONTACT_NUMBER_IRI, contactNumber);

    console.log("bureau === ", bureau);
    const updatedDataset = setThing(dataset, bureau);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveBureauDataAll() {
    try {

        console.log("starting retrieveBureauDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/Bureau`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const bureauThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = bureauThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                bureauID: thing.predicates['https://example.com/credit#bureauID'],
                bureauName: thing.predicates['https://example.com/credit#bureauName'],
                bureauAddress: thing.predicates['https://example.com/credit#bureauAddress'],
                contactNumber: thing.predicates['https://example.com/credit#contactNumber']
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveBureauDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveBureauDataAll()...", error);

    }
}


async function searchBureauData(bureauName) {
    try {
        console.log("starting searchBureauData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/Bureau`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const bureauThings = getThingAll(dataset);

        console.log("bureauThings....", bureauThings);

        const filteredData = bureauThings.filter(thing => {
            let isValid = true;
            const bureauNameValue = thing.predicates['https://example.com/credit#bureauName']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            if (bureauName && bureauNameValue) {
                isValid = isValid && bureauNameValue === bureauName.toString();
            }

            return isValid;
        });

        console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                bureauID: thing.predicates['https://example.com/credit#bureauID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                bureauName: thing.predicates['https://example.com/credit#bureauName']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                bureauAddress: thing.predicates['https://example.com/credit#bureauAddress']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                contactNumber: thing.predicates['https://example.com/credit#contactNumber']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
            };
        });

        console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchBureauData(). Details: ' + error.message);
        console.log("Error executing searchBureauData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateBureauData(bureauName, newbureauName, newbureauAddress, newcontactNumber) {
    try {
        console.log("starting updateBureauData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/Bureau`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const bureauThings = getThingAll(dataset);


        const recordToUpdate = bureauThings.find(thing => {
            const recordbureauName = thing.predicates['https://example.com/credit#bureauName']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recordbureauName === bureauName.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateBureauData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newbureauName) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#bureauName', newbureauName);
        }
        if (newbureauAddress) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#bureauAddress', newbureauAddress);
        }
        if (newcontactNumber) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#contactNumber', newcontactNumber);
        }

        try {

            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateBureauData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateBureauData(). Details: ' + error.message);
        console.log("Error executing updateBureauData()...", error);
    }
}


async function deleteBureauData(bureauName) {
    try {
        console.log("starting deleteBureauData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/Bureau`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recordbureauName = thing.predicates['https://example.com/credit#bureauName']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            //console.log(`recordbureauName: ${recordbureauName}, bureauName: ${bureauName}`);

            return recordbureauName === bureauName.toString();
        });


        if (!recordToDelete) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        dataset = removeThing(dataset, recordToDelete);
        await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing deleteBureauData()...", error);
    }
}

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(ensureLoggedIn);

app.get('/callback', async (req, res) => {
    try {
        await session.handleIncomingRedirect(req.url);
        res.send("Authentication successful.");
    } catch (error) {
        res.status(500).send("Error handling authentication callback.");
    }
});

app.post('/savebureau', async (req, res) => {
    console.log("Received a request to /saveBureau");
    const { bureauID, bureauName, bureauAddress, contactNumber } = req.query;
    try {
        await saveBureauData(bureauID, bureauName, bureauAddress, contactNumber);
        res.status(200).send('bureau data saved successfully.');
        console.log('bureau data saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving bureau data.');
        console.log(error + 'Error saving bureau data.');
    }
});

app.get('/retrievebureauall', async (req, res) => {
    try {
        const bureauData = await retrieveBureauDataAll();
        res.status(200).json(bureauData);
        console.log('Successfully executed retrievebureauall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Bureau data.');
    }
});

app.get('/searchbureau', async (req, res) => {
    try {

        const { bureauName } = req.query;
        const bureauData = await searchBureauData(bureauName);
        res.status(200).json(bureauData);
        console.log('Successfully executed searchBureau endpoint....');

    } catch (error) {
        console.log("Error executing searchBureau endpoint...", error);
        res.status(500).send('Internal Server Error', error);
    }
});

app.put('/updatebureaurecord', async (req, res) => {
    try {
        const { bureauName, newbureauName, newbureauAddress, newcontactNumber } = req.query;
        //console.log("bureauName:", bureauName);
        if (!bureauName) {
            console.log('Both bureauName is required to update a record.....');
            return res.status(400).send('Both bureauName is required to update a record.');

        }
        await updateBureauData(bureauName, newbureauName, newbureauAddress, newcontactNumber);
        res.status(200).send('bureau Record updated successfully...');
        console.log('bureau Record updated successfully - updatebureauRecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record: ' + error.message);
        console.log("Error executing updatebureauRecord endpoint...", error);
    }
});

app.delete('/deletebureaurecord', async (req, res) => {
    try {
        const { bureauName } = req.query;

        if (!bureauName) {
            return res.status(400).send('Both bureauName and bureauID are required to identify a record.');
        }

        await deleteBureauData(bureauName);
        res.status(200).send('bureau Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});

