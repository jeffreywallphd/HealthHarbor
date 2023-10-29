/*

Stores users credit score insights.

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

    node creditInsightsServer.mjs

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
const bureau_IRI = "https://example.com/credit#CreditInsight";
const INSIGHT_ID_IRI = "https://example.com/credit#insightID";
const USER_ID_IRI = "https://example.com/credit#userID";
const scoreID_IRI = "https://example.com/credit#scoreID";
const INSIGHT_TEXT_IRI = "https://example.com/credit#insightText";
const INSIGHT_DATE_IRI = "https://example.com/credit#insightDate";

async function saveCreditInsightData(insightID, userID, scoreID, insightText,insightDate) {
    console.log("starting saveCreditInsightData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/credit/CreditInsight`;

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
    let recordName = "insightID" + insightID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, INSIGHT_ID_IRI, insightID);
    record = setStringNoLocale(record, USER_ID_IRI, userID);
    record = setStringNoLocale(record, scoreID_IRI, scoreID);
    record = setStringNoLocale(record, INSIGHT_TEXT_IRI, insightText);
    record = setStringNoLocale(record, INSIGHT_DATE_IRI, insightDate);

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveCreditInsightDataAll() {
    try {

        console.log("starting retrieveCreditInsightDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/CreditInsight`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                insightID: thing.predicates['https://example.com/credit#insightID'],
                userID: thing.predicates['https://example.com/credit#userID'],
                scoreID: thing.predicates['https://example.com/credit#scoreID'],
                insightText: thing.predicates['https://example.com/credit#insightText'],
                insightDate: thing.predicates['https://example.com/credit#insightDate']
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveCreditInsightDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveCreditInsightDataAll()...", error);

    }
}


async function searchCreditInsightData(userID) {
    try {
        console.log("starting searchCreditInsightData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/CreditInsight`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const userIDValue = thing.predicates['https://example.com/credit#userID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            if (userID && userIDValue) {
                isValid = isValid && userIDValue === userID.toString();
            }

            return isValid;
        });

        //console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                insightID: thing.predicates['https://example.com/credit#insightID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                userID: thing.predicates['https://example.com/credit#userID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                scoreID: thing.predicates['https://example.com/credit#scoreID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                insightText: thing.predicates['https://example.com/credit#insightText']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                insightDate: thing.predicates['https://example.com/credit#insightDate']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
                
            };
        });
        
        console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchCreditInsightData(). Details: ' + error.message);
        console.log("Error executing searchCreditInsightData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateCreditInsightData(userID, newscoreID, newinsightText, newinsightDate) {
    try {
        console.log("starting updateCreditInsightData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/CreditInsight`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recorduserID = thing.predicates['https://example.com/credit#userID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recorduserID === userID.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateCreditInsightData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newinsightDate) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#insightDate', newinsightDate);
        }
        if (newscoreID) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#scoreID', newscoreID);
        }
        if (newinsightText) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#insightText', newinsightText);
        }

        try {
            
            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateCreditInsightData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateCreditInsightData(). Details: ' + error.message);
        console.log("Error executing updateCreditInsightData()...", error);
    }
}


async function deleteCreditInsightData(userID) {
    try {
        console.log("starting deleteCreditInsightData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/CreditInsight`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recorduserID = thing.predicates['https://example.com/credit#userID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            //console.log(`recorduserID: ${recorduserID}, userID: ${userID}`);

            return recorduserID === userID.toString();
        });


        if (!recordToDelete) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        dataset = removeThing(dataset, recordToDelete);
        await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing deleteCreditInsightData()...", error);
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


app.post('/savecreditinsight', async (req, res) => {
    console.log("Received a request to /savecreditinsight");
    const { insightID, userID, scoreID, insightText, insightDate } = req.query;
    try {
        await saveCreditInsightData(insightID, userID, scoreID, insightText, insightDate);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

app.get('/retrievecreditinsightall', async (req, res) => {
    try {
        console.log("Received a request to /retrievecreditinsightall");
        const searchData = await retrieveCreditInsightDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrievecreditinsightall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

app.get('/searchcreditinsight', async (req, res) => {
    try {
        console.log("Received a request to /searchcreditinsight");
        const { userID } = req.query;
        const searchData = await searchCreditInsightData(userID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchcreditinsight endpoint....');

    } catch (error) {
        console.log("Error executing searchcreditinsight endpoint...", error);
        res.status(500).send('Internal Server Error executing searchcreditinsight endpoint', error);
    }
});

app.put('/updatecreditinsightrecord', async (req, res) => {
    try {
        console.log("Received a request to /updatecreditinsightrecord");
        const { userID, newscoreID, newinsightText, insightDate } = req.query;
        //console.log("userID:", userID);
        if (!userID) {
            console.log('userID is required to update a record.....');
            return res.status(400).send('userID is required to update a record.');

        }
        await updateCreditInsightData(userID, newscoreID, newinsightText, insightDate);
        res.status(200).send('CreditInsight Record updated successfully...');
        console.log('Record updated successfully - updatecreditinsightrecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updateCreditInsightrecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updateCreditInsightrecord endpoint...", error);
    }
});

app.delete('/deletecreditinsightrecord', async (req, res) => {
    try {
        console.log("Received a request to /deletecreditinsightrecord");
        const { userID } = req.query;

        if (!userID) {
            return res.status(400).send('userID is required to identify a record.');
        }

        await deleteCreditInsightData(userID);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});

