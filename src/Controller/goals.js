import {
    addUrl,
    addStringNoLocale,
    addDecimal,
    createSolidDataset,
    createThing,
    getPodUrlAll,
    getSolidDataset,
    getThingAll,
    getStringNoLocale,
    getDecimal,
    removeThing,
    saveSolidDatasetAt,
    setThing,
    addInteger
} from "@inrupt/solid-client";
import { fetch } from '@inrupt/solid-client-authn-browser';
import {FINANCE_GOALS} from "../Ontology/Generated/FINANCE_GOALS";

// get the current pod based on the user's webid
// only works if the user is logged in
async function getDefaultPod(session) {
    const mypods = await getPodUrlAll(session.info.webId, { fetch: fetch });
    return mypods[0];
};

// this function is used to ensure entered sufficient input
function validateInputs(goal_state){
    // gets the name, amount, and date from the state parameter
    const { name, amount, goalDate } = goal_state;
    // 0, null, undefined, or empty strings are considered falsy values and become 
    // true when negated with the first ! and false when negated with the second !
    // this will only return true when all of the inputs are valid. 
    return !!name && !!amount && !!goalDate;
};


// Trying to connect to the solid pod database based on the following resource
//https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/getting-started/
export async function saveGoal(goal_state){
    // if the inputs are not valid alert the user and return
    if (!validateInputs(goal_state)){
        alert("Please fill out all fields!")
        return
    }

    // get current session and pod based on session
    const curr_session = goal_state.session;

    // parse all this information from the state parameter
    const {userID, name, amount, goalDate} = goal_state;

    let newGoal;
    const podUrl = await getDefaultPod(curr_session);
    const goalUrl = `${curr_session.info.webId}/wellness/finance_goals`;

    // check if goal data already exists
    try {
        // attempt to get dataset if possible
        newGoal = await getSolidDataset(goalUrl, { fetch: fetch.bind(window) });
    } 
    catch (error) {
        // if didn't find dataset we want to create it
        if (typeof error.statusCode === "number" && error.statusCode === 404) {
            newGoal = await createSolidDataset(goalUrl);
        } 
        // if there was a different error, log it 
        else {
            console.log("B")
        }
    }

    // once we get to here the dataset should hopefully exist
    //structure the data in the format of the custom web ontology
    const date = new Date();
    let datetime = date.getTime(); //acts like a unique id
    let item = createThing({name:"goal_"+datetime}); 

    // add URL and all of the other data
    item = addUrl(item, goalUrl, FINANCE_GOALS.Goal);
    item = addInteger(item, FINANCE_GOALS.GoalID, datetime);
    item = addStringNoLocale(item, FINANCE_GOALS.GoalDate, goalDate);
    item = addStringNoLocale(item, FINANCE_GOALS.GoalName, name);
    item = addStringNoLocale(item, FINANCE_GOALS.GoalAmount, amount);
    item = addStringNoLocale(item, FINANCE_GOALS.UserID,userID);

    // newGoal should be a solid dataset that either already existed or was created
    newGoal = setThing(newGoal, item);

    console.log(goalUrl)
    console.log(FINANCE_GOALS)


    //save the newly created Thing to the data store
    try {
        let savedGoal = await saveSolidDatasetAt(
            goalUrl,
            newGoal, { fetch: fetch });
        console.log(savedGoal)
    } 
    catch (error) {
    console.error(error.message)
    }

}
