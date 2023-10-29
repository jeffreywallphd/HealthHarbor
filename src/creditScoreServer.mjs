/*

Contains users credit scores.

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

    node creditScoreServer.mjs

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
const bureau_IRI = "https://example.com/credit#CreditScore";
const CREDITSCORE_ID_IRI = "https://example.com/credit#scoreID";
const USER_ID_IRI = "https://example.com/credit#userID";
const SCORE_IRI = "https://example.com/credit#score";
const REPORT_DATE_IRI = "https://example.com/credit#reportDate";
const BUREAU_ID_IRI = "https://example.com/credit#bureauID";

async function saveCreditScoreData(scoreID, userID, score, reportDate,bureauID) {
    console.log("starting saveCreditScoreData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/credit/CreditScore`;

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
    let recordName = "score" + scoreID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, CREDITSCORE_ID_IRI, scoreID);
    record = setStringNoLocale(record, USER_ID_IRI, userID);
    record = setStringNoLocale(record, SCORE_IRI, score);
    record = setStringNoLocale(record, REPORT_DATE_IRI, reportDate);
    record = setStringNoLocale(record, BUREAU_ID_IRI, bureauID);

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveCreditScoreDataAll() {
    try {

        console.log("starting retrieveCreditScoreDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/CreditScore`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                scoreID: thing.predicates['https://example.com/credit#scoreID'],
                userID: thing.predicates['https://example.com/credit#userID'],
                score: thing.predicates['https://example.com/credit#score'],
                reportDate: thing.predicates['https://example.com/credit#reportDate'],
                bureauID: thing.predicates['https://example.com/credit#bureauID']
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveCreditScoreDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveCreditScoreDataAll()...", error);

    }
}


async function searchCreditScoreData(userID) {
    try {
        console.log("starting searchCreditScoreData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/CreditScore`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const userIDValue = thing.predicates['https://example.com/credit#userID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            if (userID && userIDValue) {
                isValid = isValid && userIDValue === userID.toString();
            }

            return isValid;
        });

        console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                scoreID: thing.predicates['https://example.com/credit#scoreID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                userID: thing.predicates['https://example.com/credit#userID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                score: thing.predicates['https://example.com/credit#score']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                reportDate: thing.predicates['https://example.com/credit#reportDate']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                bureauID: thing.predicates['https://example.com/credit#bureauID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
                
            };
        });
        
        console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchCreditScoreData(). Details: ' + error.message);
        console.log("Error executing searchCreditScoreData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateCreditScoreData(userID, newscore, newreportDate, newbureauID) {
    try {
        console.log("starting updateCreditScoreData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/CreditScore`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recorduserID = thing.predicates['https://example.com/credit#userID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recorduserID === userID.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateCreditScoreData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newbureauID) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#bureauID', newbureauID);
        }
        if (newscore) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#score', newscore);
        }
        if (newreportDate) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/credit#reportDate', newreportDate);
        }

        try {
            
            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateCreditScoreData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateCreditScoreData(). Details: ' + error.message);
        console.log("Error executing updateCreditScoreData()...", error);
    }
}


async function deleteCreditScoreData(userID) {
    try {
        console.log("starting deleteCreditScoreData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/credit/CreditScore`;

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
        console.log("Error executing deleteCreditScoreData()...", error);
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


app.post('/savecreditscore', async (req, res) => {
    console.log("Received a request to /savecreditscore");
    const { scoreID, userID, score, reportDate, bureauID } = req.query;
    try {
        await saveCreditScoreData(scoreID, userID, score, reportDate, bureauID);
        res.status(200).send('Credit Score data saved successfully.');
        console.log('Credit Score Data saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Credit Score Data .');
        console.log(error + 'Error saving Credit Score Data .');
    }
});

app.get('/retrievecreditscoreall', async (req, res) => {
    try {
        console.log("Received a request to /retrievecreditscoreall");
        const searchData = await retrieveCreditScoreDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrievecreditscoreall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Credit Score Data .');
    }
});

app.get('/searchcreditscore', async (req, res) => {
    try {
        console.log("Received a request to /searchcreditscore");
        const { userID } = req.query;
        const searchData = await searchCreditScoreData(userID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchcreditscore endpoint....');

    } catch (error) {
        console.log("Error executing searchcreditscore endpoint...", error);
        res.status(500).send('Internal Server Error', error);
    }
});

app.put('/updatecreditscorerecord', async (req, res) => {
    try {
        console.log("Received a request to /updatecreditscorerecord");
        const { userID, newscore, newreportDate, bureauID } = req.query;
        //console.log("userID:", userID);
        if (!userID) {
            console.log('Both userID is required to update a record.....');
            return res.status(400).send('Both userID is required to update a record.');

        }
        await updateCreditScoreData(userID, newscore, newreportDate, bureauID);
        res.status(200).send('CreditScore Record updated successfully...');
        console.log('CreditScore Record updated successfully - updatecreditscorerecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record: ' + error.message);
        console.log("Error executing updatecreditscorerecord endpoint...", error);
    }
});

app.delete('/deletecreditscorerecord', async (req, res) => {
    try {
        console.log("Received a request to /deletecreditscorerecord");
        const { userID } = req.query;

        if (!userID) {
            return res.status(400).send('Both userID is required to identify a record.');
        }

        await deleteCreditScoreData(userID);
        res.status(200).send('CreditScore Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});
