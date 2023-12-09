/*

Containts different categories across the credit modules. Metadata details

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
const CATEGORY_ID_IRI = "https://example.com/budget#categoryID";
const CATEGORY_NAME_IRI = "https://example.com/budget#categoryName";


async function saveCategoryData(categoryID, categoryName) {
    console.log("starting saveCategoryData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/categories`;

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
    let recordName = "category" + categoryID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, CATEGORY_ID_IRI, categoryID);
    record = setStringNoLocale(record, CATEGORY_NAME_IRI, categoryName);


    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveCategoryDataAll() {
    try {

        console.log("starting retrieveCategoryDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/categories`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                categoryID: thing.predicates[CATEGORY_ID_IRI],
                categoryName: thing.predicates[CATEGORY_NAME_IRI]
            };
        });
     
        
        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveCategoryDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveCategoryDataAll()...", error);

    }
}


async function searchCategoryData(categoryName) {
    try {
        console.log("starting searchCategoryData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/categories`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const categoryNameValue = thing.predicates[CATEGORY_NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            if (categoryName && categoryNameValue) {
                isValid = isValid && categoryNameValue === categoryName.toString();
            }

            return isValid;
        });

        //console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                categoryID: thing.predicates[CATEGORY_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                categoryName: thing.predicates[CATEGORY_NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
            };
        });
        
        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchCategoryData(). Details: ' + error.message);
        console.log("Error executing searchCategoryData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateCategoryData(categoryName, newcategoryName) {
    try {
        console.log("starting updateCategoryData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/categories`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recordcategoryName = thing.predicates[CATEGORY_NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recordcategoryName === categoryName.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateCategoryData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newcategoryName) {
            updatedRecord = setStringNoLocale(updatedRecord, CATEGORY_NAME_IRI, newcategoryName);
        }


        try {
            
            dataset = setThing(dataset, updatedRecord);

            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateCategoryData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateCategoryData(). Details: ' + error.message);
        console.log("Error executing updateCategoryData()...", error);
    }
}


async function deleteCategoryData(categoryName) {
    try {
        console.log("starting deleteCategoryData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/categories`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recordcategoryName = thing.predicates[CATEGORY_NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            //console.log(`recordcategoryName: ${recordcategoryName}, categoryName: ${categoryName}`);

            return recordcategoryName === categoryName.toString();
        });


        if (!recordToDelete) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        dataset = removeThing(dataset, recordToDelete);
        await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing deleteCategoryData()...", error);
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


router.post('/savecategory', async (req, res) => {
    console.log("Received a request to /savecategory");
    const { categoryID, categoryName, name, amount, deadline } = req.query;
    try {
        await saveCategoryData(categoryID, categoryName, name, amount, deadline);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

router.get('/retrievecategoryall', async (req, res) => {
    try {
        console.log("Received a request to /retrievecategoryall");
        const searchData = await retrieveCategoryDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrievecategoryall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

router.get('/searchcategory', async (req, res) => {
    try {
        console.log("Received a request to /searchcategory");
        const { categoryName } = req.query;
        const searchData = await searchCategoryData(categoryName);
        res.status(200).json(searchData);
        console.log('Successfully executed searchcategory endpoint....');

    } catch (error) {
        console.log("Error executing searchcategory endpoint...", error);
        res.status(500).send('Internal Server Error executing searchcategory endpoint', error);
    }
});

router.put('/updatecategoryrecord', async (req, res) => {
    try {
        console.log("Received a request to /updatecategoryrecord");
        const { categoryName, newname, newamount, deadline } = req.query;
        //console.log("categoryName:", categoryName);
        if (!categoryName) {
            console.log('categoryName is required to update a record.....');
            return res.status(400).send('categoryName is required to update a record.');

        }
        await updateCategoryData(categoryName, newname, newamount, deadline);
        res.status(200).send('Category Record updated successfully...');
        console.log('Record updated successfully - updatecategoryrecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updatecategoryrecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updatecategoryrecord endpoint...", error);
    }
});

router.delete('/deletecategoryrecord', async (req, res) => {
    try {
        console.log("Received a request to /deletecategoryrecord");
        const { categoryName } = req.query;

        if (!categoryName) {
            return res.status(400).send('categoryName is required to identify a record.');
        }

        await deleteCategoryData(categoryName);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

export default router;
