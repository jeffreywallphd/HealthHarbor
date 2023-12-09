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
const GOAL_ID_IRI = "https://example.com/budget#goalID";
const AMMOUNT_ALLOCATED_IRI = "https://example.com/budget#amountAllocated";
const ALLOCATION_DATE_IRI = "https://example.com/budget#allocationDate";

async function saveAllocationData(allocationID, goalID, amountAllocated, allocationDate) {
    console.log("starting saveAllocationData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/allocation`;

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
    let recordName = "allocation" + allocationID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, ALLOCATION_ID_IRI, allocationID);
    record = setStringNoLocale(record, GOAL_ID_IRI, goalID);
    record = setStringNoLocale(record, AMMOUNT_ALLOCATED_IRI, amountAllocated);
    record = setStringNoLocale(record, ALLOCATION_DATE_IRI, allocationDate);

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveAllocationDataAll() {
    try {

        console.log("starting retrieveAllocationDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/allocation`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                allocationID: thing.predicates[ALLOCATION_ID_IRI],
                goalID: thing.predicates[GOAL_ID_IRI],
                amountAllocated: thing.predicates[AMMOUNT_ALLOCATED_IRI],
                allocationDate: thing.predicates[ALLOCATION_DATE_IRI]
            };
        });
         
        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveAllocationDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveAllocationDataAll()...", error);

    }
}


async function searchAllocationData(goalID) {
    try {
        console.log("starting searchAllocationData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/allocation`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const goalIDValue = thing.predicates[GOAL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
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
                allocationID: thing.predicates[ALLOCATION_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                goalID: thing.predicates[GOAL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                amountAllocated: thing.predicates[AMMOUNT_ALLOCATED_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                allocationDate: thing.predicates[ALLOCATION_DATE_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]

            };
        });

        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchAllocationData(). Details: ' + error.message);
        console.log("Error executing searchAllocationData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateAllocationData(goalID, newamountAllocated, newallocationDate) {
    try {
        console.log("starting updateAllocationData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/allocation`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recordgoalID = thing.predicates[GOAL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recordgoalID === goalID.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateAllocationData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newallocationDate) {
            updatedRecord = setStringNoLocale(updatedRecord, ALLOCATION_DATE_IRI, newallocationDate);
        }
        if (newamountAllocated) {
            updatedRecord = setStringNoLocale(updatedRecord, AMMOUNT_ALLOCATED_IRI, newamountAllocated);
        }
        
        try {

            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateAllocationData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateAllocationData(). Details: ' + error.message);
        console.log("Error executing updateAllocationData()...", error);
    }
}


async function deleteAllocationData(goalID) {
    try {
        console.log("starting deleteAllocationData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/allocation`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recordgoalID = thing.predicates[GOAL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

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
        console.log("Error executing deleteAllocationData()...", error);
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


router.post('/saveallocation', async (req, res) => {
    console.log("Received a request to /saveallocation");
    const { allocationID, goalID, amountAllocated, allocationDate } = req.query;
    try {
        await saveAllocationData(allocationID, goalID, amountAllocated, allocationDate);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

router.get('/retrieveallocationall', async (req, res) => {
    try {
        console.log("Received a request to /retrieveallocationall");
        const searchData = await retrieveAllocationDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrieveallocationall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

router.get('/searchallocation', async (req, res) => {
    try {
        console.log("Received a request to /searchallocation");
        const { goalID } = req.query;
        const searchData = await searchAllocationData(goalID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchallocation endpoint....');

    } catch (error) {
        console.log("Error executing searchallocation endpoint...", error);
        res.status(500).send('Internal Server Error executing searchallocation endpoint', error);
    }
});

router.put('/updateallocationrecord', async (req, res) => {
    try {
        console.log("Received a request to /updateallocationrecord");
        const { goalID, newamountAllocated, allocationDate } = req.query;
        //console.log("goalID:", goalID);
        if (!goalID) {
            console.log('goalID is required to update a record.....');
            return res.status(400).send('goalID is required to update a record.');

        }
        await updateAllocationData(goalID, newamountAllocated, allocationDate);
        res.status(200).send('Allocation Record updated successfully...');
        console.log('Record updated successfully - updateallocationrecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updateallocationrecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updateallocationrecord endpoint...", error);
    }
});

router.delete('/deleteallocationrecord', async (req, res) => {
    try {
        console.log("Received a request to /deletegoalrecord");
        const { goalID } = req.query;

        if (!goalID) {
            return res.status(400).send('goalID is required to identify a record.');
        }

        await deleteAllocationData(goalID);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

export default router;

