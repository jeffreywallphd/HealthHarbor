/*

Contains user goals with realistic timelines.

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

    node goalServer.mjs

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
const GOAL_ID_IRI = "https://example.com/budget#goalID";
const USER_ID_IRI = "https://example.com/budget#userID";
const NAME_IRI = "https://example.com/budget#name";
const AMOUNT_IRI = "https://example.com/budget#amount";
const DEADLINE_IRI = "https://example.com/budget#deadline";

async function saveGoalData(goalID, userID, name, amount,deadline) {
    console.log("starting saveGoalData execution...");
    let myPod;
    myPod = await getDefaultPod();

    const datasetUrl = `${myPod}wellness/finance/budgeting/goals`;

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
    let recordName = "goal" + goalID;
    let record = createThing({ name: recordName });


    record = setStringNoLocale(record, GOAL_ID_IRI, goalID);
    record = setStringNoLocale(record, USER_ID_IRI, userID);
    record = setStringNoLocale(record, NAME_IRI, name);
    record = setStringNoLocale(record, AMOUNT_IRI, amount);
    record = setStringNoLocale(record, DEADLINE_IRI, deadline);

    //console.log("record === ", record);
    const updatedDataset = setThing(dataset, record);

    try {
        await saveSolidDatasetAt(datasetUrl, updatedDataset, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }


}


async function retrieveGoalDataAll() {
    try {

        console.log("starting retrieveGoalDataAll() execution...");
        let myPod;
        myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/goals`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThing = getThingAll(dataset);

        // Extract and format the data for display
        const formattedData = searchThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                goalID: thing.predicates[GOAL_ID_IRI],
                userID: thing.predicates[USER_ID_IRI],
                name: thing.predicates[NAME_IRI],
                amount: thing.predicates[AMOUNT_IRI],
                deadline: thing.predicates[DEADLINE_IRI]
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed retrieveGoalDataAll()...");
        return formattedData;
    } catch (error) {
        console.log("Error executing retrieveGoalDataAll()...", error);

    }
}


async function searchGoalData(userID) {
    try {
        console.log("starting searchGoalData() execution...");
        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/goals`;

        const dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const searchThings = getThingAll(dataset);

        //console.log("searchThings....", searchThings);

        const filteredData = searchThings.filter(thing => {
            let isValid = true;
            const userIDValue = thing.predicates[USER_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
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
                goalID: thing.predicates[GOAL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                userID: thing.predicates[USER_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                name: thing.predicates[NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                amount: thing.predicates[AMOUNT_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                deadline: thing.predicates[DEADLINE_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
                
            };
        });
        
        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing searchGoalData(). Details: ' + error.message);
        console.log("Error executing searchGoalData()...", error);
    }

}

// Helper functions for conversion
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

async function updateGoalData(userID, newname, newamount, newdeadline) {
    try {
        console.log("starting updateGoalData() execution...");

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/goals`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });
        const searchThings = getThingAll(dataset);


        const recordToUpdate = searchThings.find(thing => {
            const recorduserID = thing.predicates[USER_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            return recorduserID === userID.toString();
        });

        if (!recordToUpdate) {
            console.log("Record not found for update at updateGoalData()...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }
        //console.log("recordToUpdate====== ", recordToUpdate);

        let updatedRecord = recordToUpdate;

        if (newdeadline) {
            updatedRecord = setStringNoLocale(updatedRecord, DEADLINE_IRI, newdeadline);
        }
        if (newname) {
            updatedRecord = setStringNoLocale(updatedRecord, NAME_IRI, newname);
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

        console.log('Record updated successfully at updateGoalData() ....');


    } catch (error) {
        //res.status(500).send('Error executing updateGoalData(). Details: ' + error.message);
        console.log("Error executing updateGoalData()...", error);
    }
}


async function deleteGoalData(userID) {
    try {
        console.log("starting deleteGoalData() execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod();
        const datasetUrl = `${myPod}wellness/finance/budgeting/goals`;

        let dataset = await getSolidDataset(datasetUrl, { fetch: session.fetch });

        const recordToDelete = getThingAll(dataset).find(thing => {
            const recorduserID = thing.predicates[USER_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

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
        console.log("Error executing deleteGoalData()...", error);
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


app.post('/savegoal', async (req, res) => {
    console.log("Received a request to /savegoal");
    const { goalID, userID, name, amount, deadline } = req.query;
    try {
        await saveGoalData(goalID, userID, name, amount, deadline);
        res.status(200).send('Record saved successfully.');
        console.log('Record saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving Data .');
        console.log(error + 'Error saving Data .');
    }
});

app.get('/retrievegoalall', async (req, res) => {
    try {
        console.log("Received a request to /retrievegoalall");
        const searchData = await retrieveGoalDataAll();
        res.status(200).json(searchData);
        console.log('Successfully executed retrievegoalall endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving Data .');
        console.log(error + 'Error retrieving Data .');
    }
});

app.get('/searchgoal', async (req, res) => {
    try {
        console.log("Received a request to /searchgoal");
        const { userID } = req.query;
        const searchData = await searchGoalData(userID);
        res.status(200).json(searchData);
        console.log('Successfully executed searchgoal endpoint....');

    } catch (error) {
        console.log("Error executing searchgoal endpoint...", error);
        res.status(500).send('Internal Server Error executing searchgoal endpoint', error);
    }
});

app.put('/updategoalrecord', async (req, res) => {
    try {
        console.log("Received a request to /updategoalrecord");
        const { userID, newname, newamount, deadline } = req.query;
        //console.log("userID:", userID);
        if (!userID) {
            console.log('userID is required to update a record.....');
            return res.status(400).send('userID is required to update a record.');

        }
        await updateGoalData(userID, newname, newamount, deadline);
        res.status(200).send('Goal Record updated successfully...');
        console.log('Record updated successfully - updategoalrecord endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record - updategoalrecord endpoint...: ' + error.message);
        console.log("Error updating the record -  updategoalrecord endpoint...", error);
    }
});

app.delete('/deletegoalrecord', async (req, res) => {
    try {
        console.log("Received a request to /deletegoalrecord");
        const { userID } = req.query;

        if (!userID) {
            return res.status(400).send('userID is required to identify a record.');
        }

        await deleteGoalData(userID);
        res.status(200).send('Record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});

