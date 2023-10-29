/*

Contains details of transactions in user accounts.

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

    node transactionsServer.mjs

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
const TRANSACTION_ID_IRI = "https://example.com/budget#transactionID";
const ACCOUNT_ID_IRI = "https://example.com/budget#accountID";
const CATEGORY_ID_IRI = "https://example.com/budget#categoryID";
const TRANSACTION_AMOUNT_IRI = "https://example.com/budget#transactionAmount";
const TRANSACTION_DATE_IRI = "https://example.com/budget#transactionDate";
const TRANSACTION_TYPE_IRI = "https://example.com/budget#transactionType";

async function saveTransactionData(transactionID, accountID, categoryID, transactionAmount, transactionDate, transactionType) {
    console.log("starting saveTransactionData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/transactions`;

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
    let recordName = "transaction" + transactionID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, TRANSACTION_ID_IRI, transactionID);
    record = setStringNoLocale(record, ACCOUNT_ID_IRI, accountID);
    record = setStringNoLocale(record, CATEGORY_ID_IRI, categoryID);
    record = setStringNoLocale(record, TRANSACTION_AMOUNT_IRI, transactionAmount);
    record = setStringNoLocale(record, TRANSACTION_DATE_IRI, transactionDate);
    record = setStringNoLocale(record, TRANSACTION_TYPE_IRI, transactionType);
    

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveTransactionDataAll() {
    try {

        console.log("starting retrieveTransactionDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/transactions`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                transactionID: thing.predicates['https://example.com/budget#transactionID'],
                accountID: thing.predicates['https://example.com/budget#accountID'],
                categoryID: thing.predicates['https://example.com/budget#categoryID'],
                transactionAmount: thing.predicates['https://example.com/budget#transactionAmount'],
                transactionDate: thing.predicates['https://example.com/budget#transactionDate'],
                transactionType: thing.predicates['https://example.com/budget#transactionType']
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveTransactionDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveTransactionDataAll()...", error);

    }
}


async function searchTransactionData(accountID) {
    try {
        console.log("starting searchTransactionData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/transactions`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const accountIDValue = thing.predicates['https://example.com/budget#accountID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            if (accountID && accountIDValue) {
                isValid = isValid && accountIDValue === accountID.toString();
            }

            return isValid;
        });

        //console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                transactionID: thing.predicates['https://example.com/budget#transactionID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                accountID: thing.predicates['https://example.com/budget#accountID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                categoryID: thing.predicates['https://example.com/budget#categoryID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                transactionAmount: thing.predicates['https://example.com/budget#transactionAmount']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                transactionDate: thing.predicates['https://example.com/budget#transactionDate']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                transactionType: thing.predicates['https://example.com/budget#transactionType']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]

            };
        });

        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchTransactionData(). Details: ' + error.message);
        console.log("Error executing searchTransactionData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateTransactionData(accountID, newcategoryID, newtransactionAmount, newtransactionDate, newtransactionType) {
    try {
        console.log("starting updateTransactionData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/transactions`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recordaccountID = thing.predicates['https://example.com/budget#accountID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recordaccountID === accountID.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateTransactionData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;
        
        if (newtransactionAmount) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#transactionAmount', newtransactionAmount);
        }
        if (newcategoryID) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#categoryID', newcategoryID);
        }
        if (newtransactionDate) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#transactionDate', newtransactionDate);
        }
        if (newtransactionType) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#categoryID', newtransactionType);
        }

        try {

            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateTransactionData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateTransactionData(). Details: ' + error.message);
        console.log("Error executing updateTransactionData()...", error);
    }
}


async function deleteTransactionData(accountID) {
    try {
        console.log("starting deleteTransactionData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/transactions`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recordaccountID = thing.predicates['https://example.com/budget#accountID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            //console.log(`recordaccountID: ${recordaccountID}, accountID: ${accountID}`);

            return recordaccountID === accountID.toString();
        });


        if (!recordToDelete) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        dataset = removeThing(dataset, recordToDelete);
        await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing deleteTransactionData()...", error);
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

 
app.post('/savetransaction', async (req, res) => {
    console.log("Received a request to /savetransaction");
    const { transactionID, accountID, categoryID, transactionAmount, transactionDate, transactionType } = req.query;
    try {
        await saveTransactionData(transactionID, accountID, categoryID, transactionAmount, transactionDate, transactionType);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

app.get('/retrievetransactionall', async (req, res) => {
    try {
        console.log("Received a request to /retrievetransactionall");
        const searchData = await retrieveTransactionDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrievetransactionall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

app.get('/searchtransaction', async (req, res) => {
    try {
        console.log("Received a request to /searchtransaction");
        const { accountID } = req.query;
        const searchData = await searchTransactionData(accountID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchtransaction endpoint....');

    } catch (error) {
        console.log("Error executing searchtransaction endpoint...", error);
        res.status(500).send('Internal Server Error executing searchtransaction endpoint', error);
    }
});

app.put('/updatetransactionrecord', async (req, res) => {
    try {
        console.log("Received a request to /updatetransactionrecord");
        const { accountID, newcategoryID, transactionAmount, transactionDate, transactionType } = req.query;
        //console.log("accountID:", accountID);
        if (!accountID) {
            console.log('accountID is required to update a record.....');
            return res.status(400).send('accountID is required to update a record.');

        }
        await updateTransactionData(accountID, newcategoryID, transactionAmount, transactionDate, transactionType);
        res.status(200).send('Transaction Record updated successfully...');
        console.log('Record updated successfully - updatetransactionrecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updatetransactionrecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updatetransactionrecord endpoint...", error);
    }
});

app.delete('/deletetransactionrecord', async (req, res) => {
    try {
        console.log("Received a request to /deletegoalrecord");
        const { accountID } = req.query;

        if (!accountID) {
            return res.status(400).send('accountID is required to identify a record.');
        }

        await deleteTransactionData(accountID);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});

