// Import from "@inrupt/solid-client-authn-browser"
import {
  login,
  handleIncomingRedirect,
  getDefaultSession,
  fetch
} from "@inrupt/solid-client-authn-browser";

// Import from "@inrupt/solid-client"
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

import { SCHEMA_INRUPT, RDF, AS } from "@inrupt/vocab-common-rdf";

const buttonLogin = document.querySelector("#btnLogin");
const buttonSave = document.querySelector("#btnSave");
const activityList = document.querySelector("#activityList");
const activityField = document.getElementById("physicalActivity");
const activityMetricField = document.getElementById("physicalActivityMetric");
const OIDC = "https://login.inrupt.com";
const session = getDefaultSession();

buttonLogin.onclick = function () {
    loginToPod();
};

buttonSave.onclick = function () {
    saveActivity();
};

function loginToPod() {
    return login({
        oidcIssuer: OIDC,
        redirectUrl: new URL("/", window.location.href).toString(),
        clientName: "Wellness Pod App"
    });
}

async function handleLoginRedirect() {
    await handleIncomingRedirect(); // no-op if not part of login redirect

    if (session.info.isLoggedIn) {
        session.info.pod = await getDefaultPod();
        await displayActivity();
    }
}

handleLoginRedirect();

async function getDefaultPod() {
    const mypods = await getPodUrlAll(session.info.webId, { fetch: fetch });
    buttonSave.removeAttribute("disabled")
    return mypods[0];
}

async function displayActivity() {
    //specify the container where the data will be stored
    const wellnessPodUrl = `${session.info.pod}wellness/physical/activity`;

    //get the activity data from the data store and display it
    try {
        let previousActivity = await getSolidDataset(wellnessPodUrl, { fetch: fetch });

        let items = getThingAll(previousActivity);

        for (let i = 0; i < items.length; i++) {
            let activity = getStringNoLocale(items[i], PWV.PhysicalActivity);
            let metric = getDecimal(items[i], PWV.ImperialMeasurement);
            //alert(activity + " for " + metric + " miles")
            if (activity !== null) {
                let newListItem = document.createElement("li")
                let newListItemText = document.createTextNode(activity + " for " + metric + " miles")

                newListItem.appendChild(newListItemText)
                activityList.appendChild(newListItem)
            }
        }
    } catch (error) {
        console.log(error);
    }
}

async function saveActivity() {
     //specify the container where the data will be stored
     const wellnessPodUrl = `${session.info.pod}wellness/physical/activity`;

     let activity = activityField.value;
     let metric = activityMetricField.value;

     let myPhysicalActivity;

     //create the dataset on the solid pod if the container structure doesn't exist
     try {
        myPhysicalActivity = await getSolidDataset(wellnessPodUrl, { fetch: fetch });
     } catch(error) {
        if (typeof error.statusCode === "number" && error.statusCode === 404) {
            myPhysicalActivity = createSolidDataset();
        } else {
            console.error(error.message);
        }
     }

     //structure the data in the format of the custom web ontology
     const date = new Date();
     let datetime = date.getTime();

     let item = createThing({ name: "activity_" + datetime }); //acts like a unique id
     item = addUrl(item, RDF.type, PWV.Activity);
     item = addStringNoLocale(item, PWV.PhysicalActivity, activity);
     item = addDecimal(item, PWV.ImperialMeasurement, metric);
     myPhysicalActivity = setThing(myPhysicalActivity, item);

     //save the newly created Thing to the data store
     try {
        let savedActivity = await saveSolidDatasetAt(
            wellnessPodUrl,
            myPhysicalActivity,
            { fetch: fetch }
        );

        let newListItem = document.createElement("li")
        let newListItemText = document.createTextNode(activity + " for " + metric + " miles")

        newListItem.appendChild(newListItemText)
        activityList.appendChild(newListItem)

        activityField.value = ""
        activityMetricField.value = ""
     } catch(error) {
        console.error(error.message)
     }
}

// 3. Create the Reading List
async function createList() {
  labelCreateStatus.textContent = "";
  const SELECTED_POD = document.getElementById("select-pod").value;

  // For simplicity and brevity, this tutorial hardcodes the  SolidDataset URL.
  // In practice, you should add in your profile a link to this resource
  // such that applications can follow to find your list.
  const readingListUrl = `${SELECTED_POD}getting-started/readingList/myList`;

  let titles = document.getElementById("titles").value.split("\n");

  // Fetch or create a new reading list.
  let myReadingList;

  try {
    // Attempt to retrieve the reading list in case it already exists.
    myReadingList = await getSolidDataset(readingListUrl, { fetch: fetch });
    // Clear the list to override the whole list
    let items = getThingAll(myReadingList);
    items.forEach((item) => {
      myReadingList = removeThing(myReadingList, item);
    });
  } catch (error) {
    if (typeof error.statusCode === "number" && error.statusCode === 404) {
      // if not found, create a new SolidDataset (i.e., the reading list)
      myReadingList = createSolidDataset();
    } else {
      console.error(error.message);
    }
  }

  // Add titles to the Dataset
  let i = 0;
  titles.forEach((title) => {
    if (title.trim() !== "") {
      let item = createThing({ name: "title" + i });
      item = addUrl(item, RDF.type, AS.Article);
      item = addStringNoLocale(item, SCHEMA_INRUPT.name, title);
      myReadingList = setThing(myReadingList, item);
      i++;
    }
  });

  try {
    // Save the SolidDataset
    let savedReadingList = await saveSolidDatasetAt(
      readingListUrl,
      myReadingList,
      { fetch: fetch }
    );

    labelCreateStatus.textContent = "Saved";

    // Refetch the Reading List
    savedReadingList = await getSolidDataset(readingListUrl, { fetch: fetch });

    let items = getThingAll(savedReadingList);

    let listcontent = "";
    for (let i = 0; i < items.length; i++) {
      let item = getStringNoLocale(items[i], SCHEMA_INRUPT.name);
      if (item !== null) {
        listcontent += item + "\n";
      }
    }

    document.getElementById("savedtitles").value = listcontent;
  } catch (error) {
    console.log(error);
    labelCreateStatus.textContent = "Error" + error;
    labelCreateStatus.setAttribute("role", "alert");
  }
}


