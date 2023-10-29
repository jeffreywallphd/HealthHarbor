
/*

Tracks progress towards achieving savings goals.

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

    node savingsTrackerServer.mjs

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
const TRACKER_ID_IRI = "https://example.com/budget#trackerID";
const GOAL_ID_IRI = "https://example.com/budget#goalID";
const AMOUNT_SAVED_IRI = "https://example.com/budget#amountSaved";
const TRACKER_DATE_IRI = "https://example.com/budget#trackerDate";

async function saveSavingsTrackerData(trackerID, goalID, amountSaved, trackerDate) {
    console.log("starting saveSavingsTrackerData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/savingsTracker`;

    // Fetch existing dataset or create new if not exists
    let dataset;
    try {
        console.log("Fetching container details ...");
        dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
    } catch (error1) {
        try {


            if (typeof error1.statusCode === "number" && error1.statusCode === 404) {
                console.log("Rename not found. Creating a new container...");
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
    let recordName = "savingsTracker" + trackerID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, TRACKER_ID_IRI, trackerID);
    record = setStringNoLocale(record, GOAL_ID_IRI, goalID);
    record = setStringNoLocale(record, AMOUNT_SAVED_IRI, amountSaved);
    record = setStringNoLocale(record, TRACKER_DATE_IRI, trackerDate);

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveSavingsTrackerDataAll() {
    try {

        console.log("starting retrieveSavingsTrackerDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/savingsTracker`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                trackerID: thing.predicates['https://example.com/budget#trackerID'],
                goalID: thing.predicates['https://example.com/budget#goalID'],
                amountSaved: thing.predicates['https://example.com/budget#amountSaved'],
                trackerDate: thing.predicates['https://example.com/budget#trackerDate']
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveSavingsTrackerDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveSavingsTrackerDataAll()...", error);

    }
}


async function searchSavingsTrackerData(goalID) {
    try {
        console.log("starting searchSavingsTrackerData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/savingsTracker`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const goalIDValue = thing.predicates['https://example.com/budget#goalID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            if (goalID && goalIDValue) {
                isValid = isValid && goalIDValue === goalID.toString();
            }

            return isValid;
        });

        //console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                trackerID: thing.predicates['https://example.com/budget#trackerID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                goalID: thing.predicates['https://example.com/budget#goalID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                amountSaved: thing.predicates['https://example.com/budget#amountSaved']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                trackerDate: thing.predicates['https://example.com/budget#trackerDate']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]

            };
        });

        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchSavingsTrackerData(). Details: ' + error.message);
        console.log("Error executing searchSavingsTrackerData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateSavingsTrackerData(goalID, newamountSaved, newtrackerDate) {
    try {
        console.log("starting updateSavingsTrackerData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/savingsTracker`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recordgoalID = thing.predicates['https://example.com/budget#goalID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recordgoalID === goalID.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateSavingsTrackerData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newtrackerDate) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#trackerDate', newtrackerDate);
        }
        if (newamountSaved) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#amountSaved', newamountSaved);
        }

        try {

            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateSavingsTrackerData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateSavingsTrackerData(). Details: ' + error.message);
        console.log("Error executing updateSavingsTrackerData()...", error);
    }
}


async function deleteSavingsTrackerData(goalID) {
    try {
        console.log("starting deleteSavingsTrackerData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/savingsTracker`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recordgoalID = thing.predicates['https://example.com/budget#goalID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            //console.log(`recordgoalID: ${recordgoalID}, goalID: ${goalID}`);

            return recordgoalID === goalID.toString();
        });


        if (!recordToDelete) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        dataset = removeThing(dataset, recordToDelete);
        await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing deleteSavingsTrackerData()...", error);
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


app.post('/savesavingstracker', async (req, res) => {
    console.log("Received a request to /savesavingstracker");
    const { trackerID, goalID, amountSaved, trackerDate } = req.query;
    try {
        await saveSavingsTrackerData(trackerID, goalID, amountSaved, trackerDate);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

app.get('/retrievesavingstrackerall', async (req, res) => {
    try {
        console.log("Received a request to /retrievesavingstrackerall");
        const searchData = await retrieveSavingsTrackerDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrievesavingstrackerall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

app.get('/searchsavingstracker', async (req, res) => {
    try {
        console.log("Received a request to /searchsavingstracker");
        const { goalID } = req.query;
        const searchData = await searchSavingsTrackerData(goalID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchsavingstracker endpoint....');

    } catch (error) {
        console.log("Error executing searchsavingstracker endpoint...", error);
        res.status(500).send('Internal Server Error executing searchsavingstracker endpoint', error);
    }
});

app.put('/updatesavingstrackerrecord', async (req, res) => {
    try {
        console.log("Received a request to /updatesavingstrackerrecord");
        const { goalID, newamountSaved, trackerDate } = req.query;
        //console.log("goalID:", goalID);
        if (!goalID) {
            console.log('goalID is required to update a record.....');
            return res.status(400).send('goalID is required to update a record.');

        }
        await updateSavingsTrackerData(goalID, newamountSaved, trackerDate);
        res.status(200).send('SavingsTracker Record updated successfully...');
        console.log('Record updated successfully - updatesavingstrackerrecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updatesavingstrackerrecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updatesavingstrackerrecord endpoint...", error);
    }
});

app.delete('/deletesavingstrackerrecord', async (req, res) => {
    try {
        console.log("Received a request to /deletegoalrecord");
        const { goalID } = req.query;

        if (!goalID) {
            return res.status(400).send('goalID is required to identify a record.');
        }

        await deleteSavingsTrackerData(goalID);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});

