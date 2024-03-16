import {
    login,
    handleIncomingRedirect,
    getDefaultSession,
    fetch,
} from "@inrupt/solid-client-authn-browser";

import {
    getPodUrlAll,
    getSolidDataset,
    getThingAll,
    getStringNoLocaleAll,
    getProfileAll,
    getStringNoLocale,
    createSolidDataset,
    createContainerAt,
    saveSolidDatasetAt,
} from "@inrupt/solid-client";

import { SessionProvider, LoginButton } from "@inrupt/solid-ui-react";
import { useSession, CombinedDataProvider, Text } from "@inrupt/solid-ui-react";

export async function handleLoginRedirect() {
    await handleIncomingRedirect(); // Logic for handling login redirect
}

export async function getDefaultPod() {
    const session = getDefaultSession();
    if (!session) {
        // Handle the case when the user is not logged in or session is not yet initialized
        return null;
    }
    const mypods = await getPodUrlAll(session.info.webId, { fetch: fetch });
    return mypods[0]; // Logic for getting the default pod
}


export async function initializePod(pod) {
    const fitnessRoutineDatasetUrl = `${pod}wellness/fitness/routine`;
    let fitnessRoutineDataset;

    try {
        fitnessRoutineDataset = await getSolidDataset(fitnessRoutineDatasetUrl, { fetch: fetch });
    } catch (error) {
        if (typeof error.statusCode === "number" && error.statusCode === 404) {
            fitnessRoutineDataset = createSolidDataset();

            try {
                await saveSolidDatasetAt(fitnessRoutineDatasetUrl, fitnessRoutineDataset, { fetch: fetch });
                console.log("Dataset initialized");
            } catch (error2) {
                console.error(error2.message);
            }
        } else {
            console.error(error.message);
        }
    }
}