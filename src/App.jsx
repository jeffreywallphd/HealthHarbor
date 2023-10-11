import React, { Component } from "react";
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { useState, useEffect } from 'react';

import {
  login,
  handleIncomingRedirect,
  getDefaultSession,
  fetch
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
  saveSolidDatasetAt
} from "@inrupt/solid-client";

import { SessionProvider, LoginButton } from "@inrupt/solid-ui-react";
import { useSession, CombinedDataProvider, Text } from "@inrupt/solid-ui-react";

import Home from "./Home";
import Fitness from "./Fitness";
import FitnessRoutine from "./FitnessRoutine";
import FitnessTracker from "./FitnessTracker";
import Diet from "./Diet";

import "./styles/styles.css";
import FITV from "./Generated/SourceCodeArtifacts/JavaScript/GeneratedVocab/FITV.js";

const redirectURL = new URL("/", window.location.href).toString();
const session = getDefaultSession();

function Name() {
  const webId = session.info.webId;
  let myPod;
  let myName;

  async function handleLoginRedirect() {
    await handleIncomingRedirect(); // no-op if not part of login redirect

    if (session.info.isLoggedIn) {
        myPod = await getDefaultPod();
        if(myPod) {
            initializePod(myPod);
        }
    }
  };

  handleLoginRedirect();

  async function getDefaultPod() {
    const mypods = await getPodUrlAll(session.info.webId, { fetch: fetch });
    return mypods[0];
  };

  async function initializePod(pod) {
      const fitnessRoutineDatasetUrl = `${pod}wellness/fitness/routine`;
      let fitnessRoutineDataset;

      //create the containers and dataset on the solid pod if the container structure doesn't exist
      try {
        fitnessRoutineDataset = await getSolidDataset(fitnessRoutineDatasetUrl, { fetch: fetch });
      } catch(error) {
        if (typeof error.statusCode === "number" && error.statusCode === 404) {
            fitnessRoutineDataset = createSolidDataset();

            try {
                let savedRoutineDataset = saveSolidDatasetAt(
                    fitnessRoutineDatasetUrl,
                    fitnessRoutineDataset,
                    { fetch: fetch }
                );

                console.log("dataset initialized");
            } catch(error2) {
                console.error(error2.message);
            }
        } else {
            console.error(error.message);
        }
      }
  };

  return (
    <div>{myName}</div>
  );
}

class App extends Component {
  render() {
    return (
      <HashRouter>
      <SessionProvider sessionId="some-id">
        <header className="mainHeader">
          <div>
            <h1>My Wellness Pod <Name /></h1>
          </div>
          <div className="right">
            <LoginButton oidcIssuer="https://login.inrupt.com" redirectUrl={redirectURL} clientName="Wellness Pod App" />
          </div>
        </header>
        <div>
          <nav>
            <ul className="navigation">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/fitness">Fitness</NavLink></li>
              <li><NavLink to="/diet">Diet</NavLink></li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/fitness" element={<Fitness />}/>
              <Route path="/fitness-routine" element={<FitnessRoutine />}/>
              <Route path="/fitness-tracker" element={<FitnessTracker />}/>
              <Route path="/diet" element={<Diet />}/>
            </Routes>
          </div>
        </div>
        </SessionProvider>
      </HashRouter>
    );
  }
}

export default App;

