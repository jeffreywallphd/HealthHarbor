
/*

Contains stress history details.

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

    node stressHistorySvr.mjs

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

/* Open new session ... */
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

app.listen(process.env.LISTENPORT, () => {
    console.log(`Server started on port ${process.env.LISTENPORT}....`);
});


/* helper_util functions for conversion */
function toInt(value) {
    return value ? parseInt(value) : null;
}

function toFloat(value) {
    return value ? parseFloat(value) : null;
}

// some class vars
const parent_path = 'wellness/mental_wellness_athelete/stress_mgmt'




/* 01 ATHLETE Athl_ */
// Using ontology classes and properties
const ATHL_ID_IRI = "https://example.com/athlete#id";
const ATHL_ATHL_NAME_IRI = "https://example.com/athlete#athl_name";
const ATHL_DOB_IRI = "https://example.com/athlete#dob";
const ATHL_LOC_ADDR_IRI = "https://example.com/athlete#loc_addr";
const ATHL_LOC_GPS_IRI = "https://example.com/athlete#loc_gps";
 

/* class methods */
const ontol_path_athl = `${parent_path}/athlete`

async function retrieveAtheleteAll() {
    try {

        console.log("starting [retrieveAtheleteAll] execution...");
        let myPod;
        myPod = await getDefaultPod();
        const dsUrl = `${myPod}${ontol_path_athl}`;
        const ds = await getSolidDataset(dsUrl, { fetch: session.fetch });
        const strsmgmtThing = getThingAll(ds);

        // Extract and format the data for display
        const formattedData = strsmgmtThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                id: thing.predicates[ATHL_ID_IRI],
                athlName: thing.predicates[ATHL_ATHL_NAME_IRI],
                dob: thing.predicates[ATHL_DOB_IRI],
                locAddr: thing.predicates[ATHL_LOC_ADDR_IRI],
                locGPS: thing.predicates[ATHL_LOC_GPS_IRI]
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed [retrieveAtheleteAll] ...");
        return formattedData;
    } catch (error) {
        console.log("Error executing [retrieveAtheleteAll] ...", error);
    }
}

async function searchAtheleteById_AthlName(oId, oAthlName) {
    try {
        console.log("starting [searchAtheleteById_AthlName] execution...");
        let myPod = await getDefaultPod();
        const dsUrl = `${myPod}${ontol_path_athl}`;
        const ds = await getSolidDataset(dsUrl, { fetch: session.fetch });
        const strsmgmtThing = getThingAll(ds);

        const filteredData = strsmgmtThings.filter(thing => {
            let isValid = true;

            const dsId = thing.predicates[ATHL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            console.log("Checking month:", dsId, oId);
            if (oId && dsId) {
                isValid = isValid && dsId === oId.toString();
            }

            const dsAthlName = thing.predicates[ATHL_ATHL_NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            console.log("Checking month:", dsAthlName, oAthlName);
            if (oAthlName && dsAthlName) {
                isValid = isValid && dsAthlName === oAthlName.toString();
            }

            return isValid;
        });

        //console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                id: thing.predicates[ATHL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                athlId: thing.predicates[ATHL_ATHL_NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                dob: thing.predicates[ATHL_DOB_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                locAddr: thing.predicates[ATHL_LOC_ADDR_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                locGPS: thing.predicates[ATHL_LOC_GPS_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
            };
        });
 
        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing [searchAtheleteById_AthlName]. Details: ' + error.message);
        console.log("Error executing [searchAtheleteById_AthlName]...", error);
    }

}

async function saveAthelete(id, athlName, dob, locAddr, locGPS) {
    console.log("starting [saveAthelete] execution...");
    let myPod;
    myPod = await getDefaultPod(); 
    const dsUrl = `${myPod}${ontol_path_athl}`;

    // Fetch existing dataset or create new if not exists
    let ds;
    try {
        console.log("Fetching container details ...");
        ds = await getSolidDataset(dsUrl, { fetch: session.fetch });
    } catch (error1) {
        try {

            if (typeof error1.statusCode === "number" && error1.statusCode === 404) {
                console.log("Resource not found. Creating a new container...");
                //ds = await createContainerAt(dsUrl, { fetch: session.fetch });
                ds = createSolidDataset();
                //console.log("Container created successfully at:", dsUrl);
            }
            else {
                console.log("Error occured while attempting to fetch container details :", error1);
            }
        } catch (error2) {
            console.log("Error encountered while creating a new container...", error2);
        }

    }

    // Generate a unique identifier
    let unique_id = "athl_" + id;
    let strsmgmt = createThing({ name: unique_id });

    strsmgmt = setStringNoLocale(strsmgmt, ATHL_ID_IRI, id);
    strsmgmt = setStringNoLocale(strsmgmt, ATHL_ATHL_NAME_IRI, athlName); 
    strsmgmt = setStringNoLocale(strsmgmt, ATHL_DOB_IRI, dob);
    strsmgmt = setStringNoLocale(strsmgmt, ATHL_LOC_ADDR_IRI, locAddr);
    strsmgmt = setStringNoLocale(strsmgmt, ATHL_LOC_GPS_IRI, locGPS);


    const dsUpd = setThing(ds, strsmgmt); // dataset

    try {
        await saveSolidDatasetAt(dsUrl, dsUpd, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }

}

async function updateAthelete(oId, oAthlName, id, athlName, sympCode, dob, locAddr, locGPS) { // res, 
    try {
        console.log("starting updateAthelete() execution...");

        let myPod = await getDefaultPod(); 
        const dsUrl = `${myPod}${ontol_path_athl}`;  

        let ds = await getSolidDataset(dsUrl, { fetch: session.fetch });
        const strsmgmtThings = getThingAll(ds);

        const oAthelete = strsmgmtThings.find(thing => {
             const dsId = thing.predicates[ATHL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
             const dsAthlName = thing.predicates[ATHL_ATHL_NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            return dsId === oId.toString() && dsAthlName === oAthlName.toString();
        });

        if (!oAthelete) {
            console.log("Record not found for update at [updateAthelete]...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }

        //console.log("oAthelete====== ", oAthelete);
        // let updatedRecord = oAthelete;

        if (id) oAthelete = setStringNoLocale(oAthelete, ATHL_ID_IRI, id);
        if (athlName) oAthelete = setStringNoLocale(oAthelete, ATHL_ATHL_NAME_IRI, athlName); 
        if (dob) oAthelete = setStringNoLocale(oAthelete, ATHL_DOB_IRI, dob);
        if (locAddr) oAthelete = setStringNoLocale(oAthelete, ATHL_LOC_ADDR_IRI, locAddr);
        if (locGPS) oAthelete = setStringNoLocale(oAthelete, ATHL_LOC_GPS_IRI, locGPS);
         
        
        try {

            ds = setThing(ds, oAthelete);
            
            await saveSolidDatasetAt(dsUrl, ds, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at [updateAthelete] ....');


    } catch (error) {
        //res.status(500).send('Error executing updateAthelete(). Details: ' + error.message);
        console.log("Error executing [updateAthelete] ...", error);
    }
}

async function deleteAthelete(oId, oAthlName) {
    try {
        console.log("starting [deleteAthelete] execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod(); 
        const dsUrl = `${myPod}${ontol_path_athl}`; 

        let ds = await getSolidDataset(dsUrl, { fetch: session.fetch });

        const oAthelete = getThingAll(ds).find(thing => {
            const dsId = thing.predicates[ATHL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            const dsAthlName = thing.predicates[ATHL_ATHL_NAME_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            return dsId === oId.toString() && dsAthlName === oAthlName.toString();
        });

        if (!oAthelete) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        ds = removeThing(ds, oAthelete);
        await saveSolidDatasetAt(dsUrl, ds, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing [deleteAthelete]...", error);
    }
}


/* http request methods  ...api endpoints */

app.get('/retrieveAtheleteAll', async (req, res) => {
    try {
        const oAthelete = await retrieveAtheleteAll();
        res.status(200).json(oAthelete);
        console.log('Successfully executed [retrieveAtheleteAll] endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving stress history data.');
    }
});

app.get('/searchAtheleteById_AthlName', async (req, res) => {
    try {
        const { oId, oAthlName } = req.query;
        const oAthelete = await searchAtheleteById_AthlName(oId, oAthlName);
        res.status(200).json(oAthelete);
        console.log('Successfully executed [searchAtheleteById_AthlName] endpoint....');

    } catch (error) {
        console.log("Error executing [searchAtheleteById_AthlName] endpoint...", error);
        res.status(500).send('Internal Server Error', error);
    }
});

app.post('/saveAthelete', async (req, res) => {
    console.log("Received a request to /saveAthelete");
    const { id, athlName, dob, locAddr, locGPS } = req.body;
    try {
        await saveAthelete(id, athlName, dob, locAddr, locGPS);
        res.status(200).send('Stress history data saved successfully.');
        console.log('Stress history data saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving stress history data.');
        console.log(error + 'Error saving stress history data.');
    }
});

app.put('/updateAthelete', async (req, res) => {
    try {
        const { oId, oAthlName, id, athlName, dob, locAddr, locGPS } = req.query;
        console.log("oId:", oId, "oAthlName:", oAthlName);
        if (!dsId || !dsAthlName) {
            console.log('Both [id] and [athlName] are required to update a record.....');
            return res.status(400).send('Both [id] and [athlName] are required to update a record.');
        }
        await updateAthelete(oId, oAthlName, id, athlName, dob, locAddr, locGPS);  // res, 
        res.status(200).send('Stress history record updated successfully...');
        console.log('Athelete Record updated successfully - [updateAthelete] endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record: ' + error.message);
        console.log("Error executing updateAthelete endpoint...", error);
    }
});

app.delete('/deleteAthelete', async (req, res) => {
    try {
        const { oId, oAthlName } = req.query;

        if (!oId || !oAthlName) {
            return res.status(400).send('Both [id] and [athlName] are required to identify a record.');
        }

        await deleteAthelete(oId, oAthlName);
        res.status(200).send('Stress history record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});




/* 02 STRESS_HISTORY StrsHis_ */
// Using ontology classes and properties
const STRSHIS_ID_IRI = "https://example.com/stresshistory#id";
const STRSHIS_ATHL_ID_IRI = "https://example.com/stresshistory#athl_id";
const STRSHIS_STRES_TYPE_ID_IRI = "https://example.com/stresshistory#stres_type_id";
const STRSHIS_SYMP_CODE_IRI = "https://example.com/stresshistory#symp_code";
const STRSHIS_DATE_OCCUR_IRI = "https://example.com/stresshistory#date_occur";
const STRSHIS_IS_NEG_IMPCT_IRI = "https://example.com/stresshistory#is_neg_impct";
const STRSHIS_STRESS_SCORE_IRI = "https://example.com/stresshistory#stress_score";


/* class methods */ 
const ontol_path_strshis = `${parent_path}/stress_history`

async function retrieveStressHistoryAll() {
    try {

        console.log("starting [retrieveStressHistoryAll] execution...");
        let myPod;
        myPod = await getDefaultPod();
        const dsUrl = `${myPod}${ontol_path_strshis}`;
        const ds = await getSolidDataset(dsUrl, { fetch: session.fetch });
        const strsmgmtThing = getThingAll(ds);

        // Extract and format the data for display
        const formattedData = strsmgmtThing.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                id: thing.predicates[STRSHIS_ID_IRI],
                athlId: thing.predicates[STRSHIS_ATHL_ID_IRI],
                stressTypeId: thing.predicates[STRSHIS_STRES_TYPE_ID_IRI],
                sympCode: thing.predicates[STRSHIS_SYMP_CODE_IRI],
                dateOccur: thing.predicates[STRSHIS_DATE_OCCUR_IRI],
                isNegImpct: thing.predicates[STRSHIS_IS_NEG_IMPCT_IRI],
                stressScore: thing.predicates[STRSHIS_STRESS_SCORE_IRI]
            };
        });

        // Display the formatted data in a table format
        // console.table(formattedData);

        // If you also want to display it in JSON format, you can use:
        // console.log(JSON.stringify(formattedData, null, 2));

        console.log("Successfully executed [retrieveStressHistoryAll] ...");
        return formattedData;
    } catch (error) {
        console.log("Error executing [retrieveStressHistoryAll] ...", error);
    }
}

async function searchStressHistoryById_AthlId(oId, oAthlId) {
    try {
        console.log("starting [searchStressHistoryById_AthlId] execution...");
        let myPod = await getDefaultPod();
        const dsUrl = `${myPod}${ontol_path_strshis}`;
        const ds = await getSolidDataset(dsUrl, { fetch: session.fetch });
        const strsmgmtThing = getThingAll(ds);

        const filteredData = strsmgmtThings.filter(thing => {
            let isValid = true;

            const dsId = thing.predicates[STRSHIS_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            console.log("Checking month:", dsId, oId);
            if (oId && dsId) {
                isValid = isValid && dsId === oId.toString();
            }

            const dsAthlId = thing.predicates[STRSHIS_ATHL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            console.log("Checking month:", dsAthlId, oAthlId);
            if (oAthlId && dsAthlId) {
                isValid = isValid && dsAthlId === oAthlId.toString();
            }

            return isValid;
        });

        //console.log("filteredData....", filteredData);

        const formattedData = filteredData.map(thing => {
            return {
                type: thing.type,
                url: thing.url,
                id: thing.predicates[STRSHIS_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                athlId: thing.predicates[STRSHIS_ATHL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                stressTypeId: thing.predicates[STRSHIS_STRES_TYPE_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                sympCode: thing.predicates[STRSHIS_SYMP_CODE_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                dateOccur: thing.predicates[STRSHIS_DATE_OCCUR_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                isNegImpct: thing.predicates[STRSHIS_IS_NEG_IMPCT_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0],
                stressScore: thing.predicates[STRSHIS_STRESS_SCORE_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0]
            };
        });
 
        //console.log("formattedData....", formattedData);

        return formattedData;

    } catch (error) {
        res.status(500).send('Error executing [searchStressHistoryById_AthlId]. Details: ' + error.message);
        console.log("Error executing [searchStressHistoryById_AthlId]...", error);
    }

}

async function saveStressHistory(id, athlId, stressTypeId, sympCode, dateOccur, isNegImpct, stressScore) {
    console.log("starting [saveStressHistory] execution...");
    let myPod;
    myPod = await getDefaultPod(); 
    const dsUrl = `${myPod}${ontol_path_strshis}`;

    // Fetch existing dataset or create new if not exists
    let ds;
    try {
        console.log("Fetching container details ...");
        ds = await getSolidDataset(dsUrl, { fetch: session.fetch });
    } catch (error1) {
        try {

            if (typeof error1.statusCode === "number" && error1.statusCode === 404) {
                console.log("Resource not found. Creating a new container...");
                //ds = await createContainerAt(dsUrl, { fetch: session.fetch });
                ds = createSolidDataset();
                //console.log("Container created successfully at:", dsUrl);
            }
            else {
                console.log("Error occured while attempting to fetch container details :", error1);
            }
        } catch (error2) {
            console.log("Error encountered while creating a new container...", error2);
        }

    }

    // Generate a unique identifier
    let unique_id = "strscase_" + id;
    let strsmgmt = createThing({ name: unique_id });

    strsmgmt = setStringNoLocale(strsmgmt, STRSHIS_ID_IRI, id);
    strsmgmt = setStringNoLocale(strsmgmt, STRSHIS_ATHL_ID_IRI, athlId);
    strsmgmt = setStringNoLocale(strsmgmt, STRSHIS_STRES_TYPE_ID_IRI, stressTypeId);
    strsmgmt = setStringNoLocale(strsmgmt, STRSHIS_SYMP_CODE_IRI, sympCode);
    strsmgmt = setStringNoLocale(strsmgmt, STRSHIS_DATE_OCCUR_IRI, dateOccur);
    strsmgmt = setStringNoLocale(strsmgmt, STRSHIS_IS_NEG_IMPCT_IRI, isNegImpct);
    strsmgmt = setStringNoLocale(strsmgmt, STRSHIS_STRESS_SCORE_IRI, stressScore);


    const dsUpd = setThing(ds, strsmgmt); // dataset

    try {
        await saveSolidDatasetAt(dsUrl, dsUpd, { fetch: session.fetch });
    } catch (error3) {
        console.log("Error encountered while saving details to the container...", error3);
    }

}

async function updateStressHistory(oId, oAthlId, id, athlId, sympCode, dateOccur, isNegImpct, stressScore) { // res, 
    try {
        console.log("starting updateStressHistory() execution...");

        let myPod = await getDefaultPod(); 
        const dsUrl = `${myPod}${ontol_path_strshis}`;  

        let ds = await getSolidDataset(dsUrl, { fetch: session.fetch });
        const strsmgmtThings = getThingAll(ds);

        const oStressHistory = strsmgmtThings.find(thing => {
             const dsId = thing.predicates[STRSHIS_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
             const dsAthlId = thing.predicates[STRSHIS_ATHL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            return dsId === oId.toString() && dsAthlId === oAthlId.toString();
        });

        if (!oStressHistory) {
            console.log("Record not found for update at [updateStressHistory]...");
            //return res.status(404).send('Record not found.');
            return '(404) - Record not found.';
        }

        //console.log("oStressHistory====== ", oStressHistory);
        // let updatedRecord = oStressHistory;

        if (id) oStressHistory = setStringNoLocale(oStressHistory, STRSHIS_ID_IRI, id);
        if (athlId) oStressHistory = setStringNoLocale(oStressHistory, STRSHIS_ATHL_ID_IRI, athlId);
        if (stressTypeId) oStressHistory = setStringNoLocale(oStressHistory, STRSHIS_STRES_TYPE_ID_IRI, stressTypeId);
        if (sympCode) oStressHistory = setStringNoLocale(oStressHistory, STRSHIS_SYMP_CODE_IRI, sympCode);
        if (dateOccur) oStressHistory = setStringNoLocale(oStressHistory, STRSHIS_DATE_OCCUR_IRI, dateOccur);
        if (isNegImpct) oStressHistory = setStringNoLocale(oStressHistory, STRSHIS_IS_NEG_IMPCT_IRI, isNegImpct);
        if (stressScore) oStressHistory = setStringNoLocale(oStressHistory, STRSHIS_STRESS_SCORE_IRI, stressScore);
         
        
        try {

            ds = setThing(ds, oStressHistory);
            
            await saveSolidDatasetAt(dsUrl, ds, { fetch: session.fetch });
        } catch (error2) {
            console.log('Error at  saveSolidDatasetAt & setThing ....', error2);
        }

        console.log('Record updated successfully at [updateStressHistory] ....');


    } catch (error) {
        //res.status(500).send('Error executing updateStressHistory(). Details: ' + error.message);
        console.log("Error executing [updateStressHistory] ...", error);
    }
}

async function deleteStressHistory(oId, oAthlId) {
    try {
        console.log("starting [deleteStressHistory] execution...");

        if (!session.info.isLoggedIn) {
            console.log("Session is not authenticated. Please log in.");
            return '(401) - Unauthorized.';
        }

        let myPod = await getDefaultPod(); 
        const dsUrl = `${myPod}${ontol_path_strshis}`; 

        let ds = await getSolidDataset(dsUrl, { fetch: session.fetch });

        const oStressHistory = getThingAll(ds).find(thing => {
            const dsId = thing.predicates[STRSHIS_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];
            const dsAthlId = thing.predicates[STRSHIS_ATHL_ID_IRI]?.literals["http://www.w3.org/2001/XMLSchema#string"]?.[0];

            return dsId === oId.toString() && dsAthlId === oAthlId.toString();
        });

        if (!oStressHistory) {
            console.log("Record not found for deletion...");
            return '(404) - Record not found.';
        }

        ds = removeThing(ds, oStressHistory);
        await saveSolidDatasetAt(dsUrl, ds, { fetch: session.fetch });

        console.log('Record deleted successfully.');

    } catch (error) {
        console.log("Error executing [deleteStressHistory]...", error);
    }
}


/* http request methods  ...api endpoints */

app.get('/retrieveStressHistoryAll', async (req, res) => {
    try {
        const oStressHistory = await retrieveStressHistoryAll();
        res.status(200).json(oStressHistory);
        console.log('Successfully executed [retrieveStressHistoryAll] endpoint....');
    } catch (error) {
        res.status(500).send('Error retrieving stress history data.');
    }
});

app.get('/searchStressHistoryById_AthlId', async (req, res) => {
    try {
        const { oId, oAthlId } = req.query;
        const oStressHistory = await searchStressHistoryById_AthlId(oId, oAthlId);
        res.status(200).json(oStressHistory);
        console.log('Successfully executed [searchStressHistoryById_AthlId] endpoint....');

    } catch (error) {
        console.log("Error executing [searchStressHistoryById_AthlId] endpoint...", error);
        res.status(500).send('Internal Server Error', error);
    }
});

app.post('/saveStressHistory', async (req, res) => {
    console.log("Received a request to /saveStressHistory");
    const { id, athlId, stressTypeId, sympCode, dateOccur, isNegImpct, stressScore } = req.body;
    try {
        await saveStressHistory(id, athlId, stressTypeId, sympCode, dateOccur, isNegImpct, stressScore);
        res.status(200).send('Stress history data saved successfully.');
        console.log('Stress history data saved successfully.');
    } catch (error) {
        res.status(500).send(error + 'Error saving stress history data.');
        console.log(error + 'Error saving stress history data.');
    }
});

app.put('/updateStressHistory', async (req, res) => {
    try {
        const { oId, oAthlId, id, athlId, stressTypeId, sympCode, dateOccur, isNegImpct, stressScore } = req.query;
        console.log("oId:", oId, "oAthlId:", oAthlId);
        if (!dsId || !dsAthlId) {
            console.log('Both [id] and [athlId] are required to update a record.....');
            return res.status(400).send('Both [id] and [athlId] are required to update a record.');
        }
        await updateStressHistory(oId, oAthlId, id, athlId, stressTypeId, sympCode, dateOccur, isNegImpct, stressScore);  // res, 
        res.status(200).send('Stress history record updated successfully...');
        console.log('StressHistory Record updated successfully - [updateStressHistory] endpoint....');

    } catch (error) {
        res.status(500).send('Error updating the record: ' + error.message);
        console.log("Error executing updateStressHistory endpoint...", error);
    }
});

app.delete('/deleteStressHistory', async (req, res) => {
    try {
        const { oId, oAthlId } = req.query;

        if (!oId || !oAthlId) {
            return res.status(400).send('Both [id] and [athlId] are required to identify a record.');
        }

        await deleteStressHistory(oId, oAthlId);
        res.status(200).send('Stress history record deleted successfully.');

    } catch (error) {
        res.status(500).send('Error deleting the record: ' + error.message);
    }
});



