
/*

Contains budget details.

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

    node budgetServer.mjs

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

import { SCHEMA_INRUPT, RDF, AS } from "@inrupt/vocab-common-rdf";

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
const MONTH_IRI = "https://example.com/budget#month";
const YEAR_IRI = "https://example.com/budget#year";
const TOTAL_INCOME_IRI = "https://example.com/budget#totalIncome";
const TOTAL_EXPENSES_IRI = "https://example.com/budget#totalExpenses";

async function saveBudgetData(budgetname, month, year, totalIncome, totalExpenses) {
    console.log("starting saveBudgetData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/budget`;

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

    let budget = createThing({ name: budgetname });

    budget = setStringNoLocale(budget, MONTH_IRI, month);
    budget = setStringNoLocale(budget, YEAR_IRI, year);
    budget = setStringNoLocale(budget, TOTAL_INCOME_IRI, totalIncome);
    budget = setStringNoLocale(budget, TOTAL_EXPENSES_IRI, totalExpenses);

    const updatedDataset = setThing(dataset, budget);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveBudgetDataAll() {
    try {

        console.log("starting retrieveBudgetDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/budget`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const budgetThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = budgetThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                month: thing.predicates[MONTH_IRI],
                totalExpenses: thing.predicates[TOTAL_EXPENSES_IRI],
                totalIncome: thing.predicates[TOTAL_INCOME_IRI],
                year: thing.predicates[YEAR_IRI]
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveBudgetDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveBudgetDataAll()...", error);

    }
}


async function searchBudgetData(month, year, name) {
    try {
        console.log("starting searchBudgetData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/budget`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const budgetThings = getThingAll(dataset);

        //console.log("budgetThings....", budgetThings);

        const filteredData = budgetThings.filter(thing => {
            let isValid = true;

            const monthValue = thing.predicates[MONTH_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            console.log("Checking month:", monthValue, month);
            if (month && monthValue) {
                isValid = isValid && monthValue === month.toString();
            }

            const yearValue = thing.predicates[YEAR_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            if (year && yearValue) {
                isValid = isValid && yearValue === year.toString();
            }

            return isValid;
        });

        //console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                month: thing.predicates[MONTH_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                totalExpenses: thing.predicates[TOTAL_EXPENSES_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                totalIncome: thing.predicates[TOTAL_INCOME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                year: thing.predicates[YEAR_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
            };
        });

        
        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchBudgetData(). Details: ' + error.message);
        console.log("Error executing searchBudgetData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateBudgetData(month, year, res, newmonth, newyear, newtotalIncome, newtotalExpenses) {
    try {
        console.log("starting updateBudgetData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/budget`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const budgetThings = getThingAll(dataset);


        const recordToUpdate = budgetThings.find(thing => {
            const recordMonth = thing.predicates[MONTH_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            const recordYear = thing.predicates[YEAR_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recordMonth === month.toString() && recordYear === year.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateBudgetData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newmonth) {
            updatedRecord = setStringNoLocale(updatedRecord, MONTH_IRI, newmonth);
        }
        if (newyear) {
            updatedRecord = setStringNoLocale(updatedRecord, YEAR_IRI, newyear);
        }
        if (newtotalIncome) {
            updatedRecord = setStringNoLocale(updatedRecord, TOTAL_INCOME_IRI, newtotalIncome);
        }
        if (newtotalExpenses) {
            updatedRecord = setStringNoLocale(updatedRecord, TOTAL_EXPENSES_IRI, newtotalExpenses);
        }
        
        try {

            dataset = setThing(dataset, updatedRecord);
            
            await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at updateBudgetRecord() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateBudgetData(). Details: ' + error.message);
        console.log("Error executing updateBudgetData()...", error);
    }
}


async function deleteBudgetData(month, year) {
    try {
        console.log("starting deleteBudgetData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/budget`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recordMonth = thing.predicates[MONTH_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            const recordYear = thing.predicates[YEAR_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            return recordMonth === month.toString() && recordYear === year.toString();
        });


        if (!recordToDelete) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        dataset = removeThing(dataset, recordToDelete);
        await saveSolidDatasetAt(datasetUrl, dataset, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing deleteBudgetData()...", error);
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

app.post('/saveBudget', async (req, res) => {
    console.log("Received a request to /saveBudget");
    const { budgetname, month, year, totalIncome, totalExpenses } = req.body;
    try {
        await saveBudgetData(budgetname, month, year, totalIncome, totalExpenses);
        res.status(200).send('Budget data saved successfully.');
        console.log('Budget data saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving budget data.');
        console.log(error + 'Error saving budget data.');
    }
});

app.get('/retrieveBudgetAll', async (req, res) => {
    try {
        const budgetData = await retrieveBudgetDataAll();
        res.status(200).json(budgetData);
        console.log('Successfully executed retrieveBudgetAll endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving budget data.');
    }
});

app.get('/searchBudget', async (req, res) => {
    try {

        const { month, year, name } = req.query;
        const budgetData = await searchBudgetData(month, year, name);
        res.status(200).json(budgetData);
        console.log('Successfully executed searchBudget endpoint....');

    } catch (error) {
        console.log("Error executing searchBudget endpoint...", error);
        res.status(500).send('Internal Server Error', error);
    }
});

app.put('/updateBudgetRecord', async (req, res) => {
    try {
        const { year, month, newmonth, newyear, newtotalIncome, newtotalExpenses } = req.query;
        console.log("month:", month, "year:", year);
        if (!year || !month) {
            console.log('Both year and month are required to update a record.....');
            return res.status(400).send('Both year and month are required to update a record.');

        }
        await updateBudgetData(month, year, res, newmonth, newyear, newtotalIncome, newtotalExpenses);
        res.status(200).send('Budget Record updated successfully...');
        console.log('Budget Record updated successfully - updateBudgetRecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record: ' + error.message);
        console.log("Error executing updateBudgetRecord endpoint...", error);
    }
});

app.delete('/deleteBudgetRecord', async (req, res) => {
    try {
        const { month, year } = req.query;

        if (!month || !year) {
            return res.status(400).send('Both year and month are required to identify a record.');
        }

        await deleteBudgetData(month, year);
        res.status(200).send('Budget Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});


