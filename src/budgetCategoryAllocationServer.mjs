/*

Details the amount allocated to specific goals.

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

    node budgetCategoryAllocationServer.mjs

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
const ALLOCATION_ID_IRI = "https://example.com/budget#allocationID";
const BUDGET_ID_IRI = "https://example.com/budget#budgetID";
const CATEGORY_ID_IRI = "https://example.com/budget#categoryID";
const ALLOCATION_AMOUNT_IRI = "https://example.com/budget#allocatedAmount";
const INSIGHT_DATE_IRI = "https://example.com/budget#allocationDate";

async function saveBudgetCategoryAllocationData(allocationID, budgetID, categoryID, allocatedAmount,allocationDate) {
    console.log("starting saveBudgetCategoryAllocationData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/budgetCategoryAllocation`;

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
                //console.log("Container created successfully at:", datasetUrl);
            }
            else {
                console.log("Error occured while attempting to fetch container details :", error1);
            }
        } catch (error2) {
            console.log("Error encountered while creating a new container...", error2);
        }

    }

    // Generate a unique identifier
    let recordName = "allocationID" + allocationID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, ALLOCATION_ID_IRI, allocationID);
    record = setStringNoLocale(record, BUDGET_ID_IRI, budgetID);
    record = setStringNoLocale(record, CATEGORY_ID_IRI, categoryID);
    record = setStringNoLocale(record, ALLOCATION_AMOUNT_IRI, allocatedAmount);
    record = setStringNoLocale(record, INSIGHT_DATE_IRI, allocationDate);

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveBudgetCategoryAllocationDataAll() {
    try {

        console.log("starting retrieveBudgetCategoryAllocationDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/budgetCategoryAllocation`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                allocationID: thing.predicates['https://example.com/budget#allocationID'],
                budgetID: thing.predicates['https://example.com/budget#budgetID'],
                categoryID: thing.predicates['https://example.com/budget#categoryID'],
                allocatedAmount: thing.predicates['https://example.com/budget#allocatedAmount'],
                allocationDate: thing.predicates['https://example.com/budget#allocationDate']
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveBudgetCategoryAllocationDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveBudgetCategoryAllocationDataAll()...", error);

    }
}


async function searchBudgetCategoryAllocationData(budgetID) {
    try {
        console.log("starting searchBudgetCategoryAllocationData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/budgetCategoryAllocation`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const budgetIDValue = thing.predicates['https://example.com/budget#budgetID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
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
                allocationID: thing.predicates['https://example.com/budget#allocationID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                budgetID: thing.predicates['https://example.com/budget#budgetID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                categoryID: thing.predicates['https://example.com/budget#categoryID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                allocatedAmount: thing.predicates['https://example.com/budget#allocatedAmount']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                allocationDate: thing.predicates['https://example.com/budget#allocationDate']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
                
            };
        });
        
        console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchBudgetCategoryAllocationData(). Details: ' + error.message);
        console.log("Error executing searchBudgetCategoryAllocationData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateBudgetCategoryAllocationData(budgetID, newcategoryID, newallocatedAmount, newallocationDate) {
    try {
        console.log("starting updateBudgetCategoryAllocationData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/budgetCategoryAllocation`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recordbudgetID = thing.predicates['https://example.com/budget#budgetID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recordbudgetID === budgetID.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateBudgetCategoryAllocationData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newallocationDate) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#allocationDate', newallocationDate);
        }
        if (newcategoryID) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#categoryID', newcategoryID);
        }
        if (newallocatedAmount) {
            updatedRecord = setStringNoLocale(updatedRecord, 'https://example.com/budget#allocatedAmount', newallocatedAmount);
        }

        try {
            
            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateBudgetCategoryAllocationData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateBudgetCategoryAllocationData(). Details: ' + error.message);
        console.log("Error executing updateBudgetCategoryAllocationData()...", error);
    }
}


async function deleteBudgetCategoryAllocationData(budgetID) {
    try {
        console.log("starting deleteBudgetCategoryAllocationData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/budgetCategoryAllocation`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recordbudgetID = thing.predicates['https://example.com/budget#budgetID']?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

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
        console.log("Error executing deleteBudgetCategoryAllocationData()...", error);
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


app.post('/savebudgetcategoryallocation', async (req, res) => {
    console.log("Received a request to /savebudgetcategoryallocation");
    const { allocationID, budgetID, categoryID, allocatedAmount, allocationDate } = req.query;
    try {
        await saveBudgetCategoryAllocationData(allocationID, budgetID, categoryID, allocatedAmount, allocationDate);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

app.get('/retrievebudgetcategoryallocationall', async (req, res) => {
    try {
        console.log("Received a request to /retrievebudgetcategoryallocationall");
        const searchData = await retrieveBudgetCategoryAllocationDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrievebudgetcategoryallocationall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

app.get('/searchbudgetcategoryallocation', async (req, res) => {
    try {
        console.log("Received a request to /searchbudgetcategoryallocation");
        const { budgetID } = req.query;
        const searchData = await searchBudgetCategoryAllocationData(budgetID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchbudgetcategoryallocation endpoint....');

    } catch (error) {
        console.log("Error executing searchbudgetcategoryallocation endpoint...", error);
        res.status(500).send('Internal Server Error executing searchbudgetcategoryallocation endpoint', error);
    }
});

app.put('/updatebudgetcategoryallocationrecord', async (req, res) => {
    try {
        console.log("Received a request to /updatebudgetcategoryallocationrecord");
        const { budgetID, newcategoryID, newallocatedAmount, allocationDate } = req.query;
        //console.log("budgetID:", budgetID);
        if (!budgetID) {
            console.log('budgetID is required to update a record.....');
            return res.status(400).send('budgetID is required to update a record.');

        }
        await updateBudgetCategoryAllocationData(budgetID, newcategoryID, newallocatedAmount, allocationDate);
        res.status(200).send('BudgetCategoryAllocation Record updated successfully...');
        console.log('Record updated successfully - updatebudgetcategoryallocationrecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updatebudgetcategoryallocationrecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updatebudgetcategoryallocationrecord endpoint...", error);
    }
});

app.delete('/deletebudgetcategoryallocationrecord', async (req, res) => {
    try {
        console.log("Received a request to /deletebudgetcategoryallocationrecord");
        const { budgetID } = req.query;

        if (!budgetID) {
            return res.status(400).send('budgetID is required to identify a record.');
        }

        await deleteBudgetCategoryAllocationData(budgetID);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});

