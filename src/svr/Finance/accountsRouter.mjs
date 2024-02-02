/*

Budgeting module user's accounts like bank accounts.

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

// const session = getSessionFromStorage("mainSession");
import { Session } from "@inrupt/solid-client-authn-node";
import { fetch } from "@inrupt/solid-client-authn-browser";

const router = express.Router();
import express from 'express';

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
                    // console.log("Successfully logged in -----------")
                    // console.log("clientName  ==== ", process.env.CLIENTNAME);

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
const ACCOUNT_ID_IRI = "https://example.com/budget#accountID";
const USER_ID_IRI = "https://example.com/budget#userID";
const ACCOUNT_TYPE_URI = "https://example.com/budget#accountType";
const ACCOUNT_BALANCE_IRI = "https://example.com/budget#accountBalance";

async function saveFeedbackData(accountID, userID, accountType, accountBalance) {
    console.log("starting saveFeedbackData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/accounts`;

    // Fetch existing dataset or create new if not exists
    let dataset;
    try {
        console.log("Fetching container accountType ...");
        dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
    } catch (error1) {
        try {


            if (typeof error1.statusCode === "number" && error1.statusCode === 404) {
                console.log("Rename not found. Creating a new container...");
                //dataset = await createContainerAt(datasetUrl, { fetch: session.fetch });
                dataset = createSolidDataset();
                console.log("Container created successfully at:", datasetUrl);
            } else {
                console.log("Error occured while attempting to fetch container accountType :", error1);
            }
        } catch (error2) {
            console.log("Error encountered while creating a new container...", error2);
        }

    }

    // Generate a unique identifier
    let recordName = "account" + accountID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, ACCOUNT_ID_IRI, accountID);
    record = setStringNoLocale(record, USER_ID_IRI, userID);
    record = setStringNoLocale(record, ACCOUNT_TYPE_URI, accountType);
    record = setStringNoLocale(record, ACCOUNT_BALANCE_IRI, accountBalance);

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving accountType to the container...", error3);
    }


}


async function retrieveFeedbackDataAll() {
    try {

        console.log("starting retrieveFeedbackDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/accounts`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                accountID: thing.predicates[ACCOUNT_ID_IRI],
                userID: thing.predicates[USER_ID_IRI],
                accountType: thing.predicates[ACCOUNT_TYPE_URI],
                accountBalance: thing.predicates[ACCOUNT_BALANCE_IRI]
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveFeedbackDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveFeedbackDataAll()...", error);

    }
}


async function searchFeedbackData(userID) {
    try {
        console.log("starting searchFeedbackData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/accounts`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const userIDValue = thing.predicates[USER_ID_IRI] ? .literals["http://www.w3.org/2001/XMLSchema#string"] ? .[0];
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
                accountID: thing.predicates[ACCOUNT_ID_IRI] ? .literals["http://www.w3.org/2001/XMLSchema#string"] ? .[0],
                userID: thing.predicates[USER_ID_IRI] ? .literals["http://www.w3.org/2001/XMLSchema#string"] ? .[0],
                accountType: thing.predicates[ACCOUNT_TYPE_URI] ? .literals["http://www.w3.org/2001/XMLSchema#string"] ? .[0],
                accountBalance: thing.predicates[ACCOUNT_BALANCE_IRI] ? .literals["http://www.w3.org/2001/XMLSchema#string"] ? .[0]

            };
        });

        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchFeedbackData(). Details: ' + error.message);
        console.log("Error executing searchFeedbackData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateFeedbackData(userID, newaccountType, newaccountBalance) {
    try {
        console.log("starting updateFeedbackData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/accounts`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recorduserID = thing.predicates[USER_ID_IRI] ? .literals["http://www.w3.org/2001/XMLSchema#string"] ? .[0];
            return recorduserID === userID.toString();
        });


        if (!recordToUpdate) {
            console.log("Record not found for update at updateFeedbackData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newaccountBalance) {
            updatedRecord = setStringNoLocale(updatedRecord, ACCOUNT_BALANCE_IRI, newaccountBalance);
        }
        if (newaccountType) {
            updatedRecord = setStringNoLocale(updatedRecord, ACCOUNT_TYPE_URI, newaccountType);
        }


        try {

            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateFeedbackData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateFeedbackData(). Details: ' + error.message);
        console.log("Error executing updateFeedbackData()...", error);
    }
}


async function deleteFeedbackData(userID) {
    try {
        console.log("starting deleteFeedbackData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/accounts`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recorduserID = thing.predicates[USER_ID_IRI] ? .literals["http://www.w3.org/2001/XMLSchema#string"] ? .[0];

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
        console.log("Error executing deleteFeedbackData()...", error);
    }
}

// Ensure user is logged in first
router.use(ensureLoggedIn);

router.get('/callback', async(req, res) => {
    try {
        await session.handleIncomingRedirect(req.url);
        res.send("Authentication successful.");
    } catch (error) {
        res.status(500).send("Error handling authentication callback.");
    }
});


router.post('/saveaccount', async(req, res) => {
    console.log("Received a request to /saveaccount");
    const { accountID, userID, accountType, accountBalance } = req.query;
    try {
        await saveFeedbackData(accountID, userID, accountType, accountBalance);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

router.get('/retrieveaccountall', async(req, res) => {
    try {
        console.log("Received a request to /retrieveaccountall");
        const searchData = await retrieveFeedbackDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrieveaccountall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

router.get('/searchaccount', async(req, res) => {
    try {
        console.log("Received a request to /searchaccount");
        const { userID } = req.query;
        const searchData = await searchFeedbackData(userID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchaccount endpoint....');

    } catch (error) {
        console.log("Error executing searchaccount endpoint...", error);
        res.status(500).send('Internal Server Error executing searchaccount endpoint', error);
    }
});

router.put('/updateaccountrecord', async(req, res) => {
    try {
        console.log("Received a request to /updateaccountrecord");
        const { userID, newaccountType, accountBalance } = req.query;
        //console.log("userID:", userID);
        if (!userID) {
            console.log('userID is required to update a record.....');
            return res.status(400).send('userID is required to update a record.');

        }
        await updateFeedbackData(userID, newaccountType, accountBalance);
        res.status(200).send('Feedback Record updated successfully...');
        console.log('Record updated successfully - updateaccountrecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updateaccountrecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updateaccountrecord endpoint...", error);
    }
});

router.delete('/deleteaccountrecord', async(req, res) => {
    try {
        console.log("Received a request to /deletegoalrecord");
        const { userID } = req.query;

        if (!userID) {
            return res.status(400).send('userID is required to identify a record.');
        }

        await deleteFeedbackData(userID);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

export default router;