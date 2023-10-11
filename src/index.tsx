import React, { Component } from "react";
import * as ReactDOM from 'react-dom';

import {
  login,
  handleIncomingRedirect,
  getDefaultSession,
  fetch
} from "@inrupt/solid-client-authn-browser";

import { getPodUrlAll } from "@inrupt/solid-client";

import App from "./App";

const session = getDefaultSession();

async function getDefaultPod() {
    const mypods = await getPodUrlAll(session.info.webId, { fetch: fetch });
    return mypods[0];
}

async function handleLoginRedirect() {
  await handleIncomingRedirect(); // no-op if not part of login redirect

  if (session.info.isLoggedIn) {
      alert("You are logged in");
  }
}

ReactDOM.render(<App />, document.getElementById('root'));