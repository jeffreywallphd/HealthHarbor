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
    setThing
} from "@inrupt/solid-client";
import { fetch } from '@inrupt/solid-client-authn-browser'
import { SCHEMA_INRUPT, RDF, AS } from "@inrupt/vocab-common-rdf";


// get the current pod based on the user's webid
// only works if the user is logged in
async function getDefaultPod(session) {
    const mypods = await getPodUrlAll(session.info.webId, { fetch: fetch });
    return mypods[0];
}

// this function is used to ensure entered sufficient input
function validateInputs(goal_state){
    // gets the name, amount, and date from the state parameter
    const { name, amount, goalDate } = goal_state;
    // 0, null, undefined, or empty strings are considered falsy values and become 
    // true when negated with the first ! and false when negated with the second !
    // this will only return true when all of the inputs are valid. 
    return !!name && !!amount && !!goalDate;
}

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
    const podUrl = await getDefaultPod(curr_session);
    // parse all this information from the state parameter
    const {userID, name, amount, goalDate} = goal_state;
    // check if goal data already exists
    let newGoal;
    try {
        // attempt to get dataset if possible
        const goalUrl = `${curr_session.info.webId}/wellness/goals`;
        newGoal = await getSolidDataset(goalUrl, { fetch: fetch.bind(window) });
    } 
    catch (error) {
        // if didn't find dataset we want to create it
        if (typeof error.statusCode === "number" && error.statusCode === 404) {
            console.log("A")
            newGoal = await createSolidDataset();
            console.log(newGoal)
        } 
        // if there was a different error, log it 
        else {
            console.log("B")
            console.log(error.message);
        }
    }
    // once we get to here the dataset should hopefully exist
    //structure the data in the format of the custom web ontology
    const date = new Date();
    let datetime = date.getTime(); //acts like a unique id
    let item = createThing(); 
    console.log(item)
    console.log("HERE")
    // console.log(SCHEMA_INRUPT)
    // console.log(AS.Goal)
    // item = addUrl(item, RDF.type,)
    // item = addInteger(item,finance_goals.GoalID,datetime) 
    // item = addStringNoLocale(item,finance_goals.GoalDate,goalDate)
    // item = addStringNoLocale(item,finance_goals.GoalName,name)
    // item = addStringNoLocale(item,finance_goals.GoalAmount,amount)
    // item = addStringNoLocale(item,finance_goals.UserID,userID)

    // newGoal = setThing(newGoal, item)

    //   //save the newly created Thing to the data store
    // try {
    //     let savedGoal = await saveSolidDatasetAt(
    //         podUrl,
    //         newGoal, { fetch: fetch }
    // );
    // } 
    // catch (error) {
    // console.error(error.message)
    // }




}




  // saveGoal = (): void => {
  //   const id = this.state.session.info.webId
  //   console.log(id)
  //   // if (this.validateInputs()) {
  //   //   alert(this.state.amount);

  //     // fetch(`${this.state.session.info.webId}/wellness/goals`, {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //     // Authorization: `Bearer ${token}`,
  //     //   },
  //     //   body: JSON.stringify({
  //     //     goalID: this.state.goalID,
  //     //     userID: this.state.userID,
  //     //     name: this.state.name,
  //     //     amount: this.state.amount,
  //     //     goalDate: this.state.goalDate,
  //     //   }),
  //     // })
  //   //     .then((response) => {
  //   //       console.log("Raw response:", response);
  //   //       if (!response.ok) {
  //   //         return response.text().then((text) => {
  //   //           throw new Error(text);
  //   //         });
  //   //       }
  //   //       return response.json();
  //   //     })
  //   //     .then((data) => {
  //   //       console.log("Success:", data);
  //   //       alert(data);
  //   //     })
  //   //     .catch((error) => {
  //   //       console.error("Error occurred:", error);
  //   //       alert(error);
  //   //     });
  //   // } else {
  //   //   alert("Please fill all the fields");
  //   // }
  // };
