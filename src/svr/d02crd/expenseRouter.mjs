/*

Contains users expenses.

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
const EXPENSE_ID_IRI = "https://example.com/credit#expenseID";
const BUDGET_ID_IRI = "https://example.com/credit#budgetID";
const CATEGORY_ID_IRI = "https://example.com/credit#categoryID";
const AMOUNT_IRI = "https://example.com/credit#amount";
const EXPENSE_DATE_IRI = "https://example.com/credit#expenseDate";

async function saveExpenseData(expenseID, budgetID, categoryID, amount, expenseDate) {
    console.log("starting saveExpenseData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/expense`;

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
    let recordName = "expenseID" + expenseID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, EXPENSE_ID_IRI, expenseID);
    record = setStringNoLocale(record, BUDGET_ID_IRI, budgetID);
    record = setStringNoLocale(record, CATEGORY_ID_IRI, categoryID);
    record = setStringNoLocale(record, AMOUNT_IRI, amount);
    record = setStringNoLocale(record, EXPENSE_DATE_IRI, expenseDate);

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveExpenseDataAll() {
    try {

        console.log("starting retrieveExpenseDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/expense`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                expenseID: thing.predicates[EXPENSE_ID_IRI],
                budgetID: thing.predicates[BUDGET_ID_IRI],
                categoryID: thing.predicates[CATEGORY_ID_IRI],
                amount: thing.predicates[AMOUNT_IRI],
                expenseDate: thing.predicates[EXPENSE_DATE_IRI]
            };
        });


        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveExpenseDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveExpenseDataAll()...", error);

    }
}


async function searchExpenseData(budgetID) {
    try {
        console.log("starting searchExpenseData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/expense`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const budgetIDValue = thing.predicates[BUDGET_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            if (budgetID && budgetIDValue) {
                isValid = isValid && budgetIDValue === budgetID.toString();
            }

            return isValid;
        });

        //console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                expenseID: thing.predicates[EXPENSE_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                budgetID: thing.predicates[BUDGET_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                categoryID: thing.predicates[CATEGORY_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                amount: thing.predicates[AMOUNT_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                expenseDate: thing.predicates[EXPENSE_DATE_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]

            };
        });


        console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchExpenseData(). Details: ' + error.message);
        console.log("Error executing searchExpenseData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateExpenseData(budgetID, newcategoryID, newamount, newexpenseDate) {
    try {
        console.log("starting updateExpenseData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/expense`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recordbudgetID = thing.predicates[BUDGET_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recordbudgetID === budgetID.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateExpenseData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newexpenseDate) {
            updatedRecord = setStringNoLocale(updatedRecord, EXPENSE_DATE_IRI, newexpenseDate);
        }
        if (newcategoryID) {
            updatedRecord = setStringNoLocale(updatedRecord, CATEGORY_ID_IRI, newcategoryID);
        }
        if (newamount) {
            updatedRecord = setStringNoLocale(updatedRecord, AMOUNT_IRI, newamount);
        }


        try {

            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateExpenseData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateExpenseData(). Details: ' + error.message);
        console.log("Error executing updateExpenseData()...", error);
    }
}


async function deleteExpenseData(budgetID) {
    try {
        console.log("starting deleteExpenseData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/expense`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recordbudgetID = thing.predicates[BUDGET_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            //console.log(`recordbudgetID: ${recordbudgetID}, budgetID: ${budgetID}`);

            return recordbudgetID === budgetID.toString();
        });


        if (!recordToDelete) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        dataset = removeThing(dataset, recordToDelete);
        await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing deleteExpenseData()...", error);
    }
}

// Ensure user is logged in first
router.use(ensureLoggedIn);

router.get('/callback', async (req, res) => {
    try {
        await session.handleIncomingRedirect(req.url);
        res.send("Authentication successful.");
    } catch (error) {
        res.status(500).send("Error handling authentication callback.");
    }
});


router.post('/saveexpense', async (req, res) => {
    console.log("Received a request to /saveexpense");
    const { expenseID, budgetID, categoryID, amount, expenseDate } = req.query;
    try {
        await saveExpenseData(expenseID, budgetID, categoryID, amount, expenseDate);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

router.get('/retrieveexpenseall', async (req, res) => {
    try {
        console.log("Received a request to /retrieveexpenseall");
        const searchData = await retrieveExpenseDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrieveexpenseall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

router.get('/searchexpense', async (req, res) => {
    try {
        console.log("Received a request to /searchexpense");
        const { budgetID } = req.query;
        const searchData = await searchExpenseData(budgetID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchexpense endpoint....');

    } catch (error) {
        console.log("Error executing searchexpense endpoint...", error);
        res.status(500).send('Internal Server Error executing searchexpense endpoint', error);
    }
});

router.put('/updateexpenserecord', async (req, res) => {
    try {
        console.log("Received a request to /updateexpenserecord");
        const { budgetID, newcategoryID, newamount, expenseDate } = req.query;
        //console.log("budgetID:", budgetID);
        if (!budgetID) {
            console.log('budgetID is required to update a record.....');
            return res.status(400).send('budgetID is required to update a record.');

        }
        await updateExpenseData(budgetID, newcategoryID, newamount, expenseDate);
        res.status(200).send('Expense Record updated successfully...');
        console.log('Record updated successfully - updateexpenserecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updateexpenserecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updateexpenserecord endpoint...", error);
    }
});

router.delete('/deleteexpenserecord', async (req, res) => {
    try {
        console.log("Received a request to /deleteexpenserecord");
        const { budgetID } = req.query;

        if (!budgetID) {
            return res.status(400).send('budgetID is required to identify a record.');
        }

        await deleteExpenseData(budgetID);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

export default router;

