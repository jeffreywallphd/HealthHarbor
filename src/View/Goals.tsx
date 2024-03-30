import React, { Component } from "react";
import { Session, getDefaultSession } from "@inrupt/solid-client-authn-browser";
import InruptAuthenticator from "../Utility/InruptAuthenticator";
import {saveGoal} from "../Controller/goals"


interface IGoalState {
  goalID: string;
  userID: string;
  name: string;
  amount: string;
  goalDate: string;
  auth: InruptAuthenticator;
  session: Session;
}

class Goals extends Component<{}, IGoalState> {
  constructor(props: {}) {
    super(props);
    // Set the inital goal state to default values
    // get the authenticator and session to check if logged in
    this.state = {
      goalID: "",
      userID: "",
      name: "",
      amount: "",
      goalDate: "",
      auth: new InruptAuthenticator(),
      session: getDefaultSession(),
    };
    // bind the force login function to the object
    this.forceLogin = this.forceLogin.bind(this);
    // call force login to ensure the use is logged in
    this.forceLogin();
  }

  // checks if the user is logged in and redirects to the login page if not
  forceLogin = async () =>{
    const loggedIn = this.state.auth.isLoggedIn()
    if(!loggedIn){
      this.state.auth.login()
    }
  };

  // used to change the goal state when the user alters the inputs
  // This was from Fall 2023, not exactly sure how it works
  // but it does seem to be effective in updating the values
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name as keyof IGoalState;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  // render the webpage 
  render() {
    return (
      <body>
        <div>
          <h2>Set savings goal </h2>
          <br />
          <section>
            <div>
              <label htmlFor="goalName"> Goal Description: </label>
              <input
                type="text"
                id="goalName"
                name="name"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="goalAmount"> Amount: </label>
              <input
                type="number"
                id="goalAmount"
                name="amount"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="goalDate"> Target Date: </label>
              <input
                type="date"
                id="goalDate"
                name="goalDate"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div>
              <button id="btnSave" onClick={() => saveGoal(this.state)}>
                Save Goal
              </button>
            </div>
          </section>
        </div>
      </body>
    );
  }
}

export default Goals;
