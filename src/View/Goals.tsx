import React, { Component } from "react";
import { Session, getDefaultSession } from "@inrupt/solid-client-authn-browser";
import InruptAuthenticator from "../Utility/InruptAuthenticator";
import { fetch } from '@inrupt/solid-client-authn-browser'


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
    this.saveGoal = this.saveGoal.bind(this);
    this.forceLogin = this.forceLogin.bind(this);
    this.state = {
      goalID: "",
      userID: "",
      name: "",
      amount: "",
      goalDate: "",
      auth: new InruptAuthenticator(),
      session: getDefaultSession(),
    };
  }

  forceLogin = async () =>{
    const loggedIn = this.state.auth.isLoggedIn()
    console.log(loggedIn)
    if(!loggedIn){
      this.state.auth.login()
    }
  };


  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name as keyof IGoalState;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validateInputs = (): boolean => {
    const { name, amount, goalDate } = this.state;
    return !!name && !!amount && !!goalDate;
  };

  saveGoal = (): void => {
    const id = this.state.session.info.webId
    console.log(id)
    // if (this.validateInputs()) {
    //   alert(this.state.amount);

      // fetch(`${this.state.session.info.webId}/wellness/goals`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify({
      //     goalID: this.state.goalID,
      //     userID: this.state.userID,
      //     name: this.state.name,
      //     amount: this.state.amount,
      //     goalDate: this.state.goalDate,
      //   }),
      // })
    //     .then((response) => {
    //       console.log("Raw response:", response);
    //       if (!response.ok) {
    //         return response.text().then((text) => {
    //           throw new Error(text);
    //         });
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log("Success:", data);
    //       alert(data);
    //     })
    //     .catch((error) => {
    //       console.error("Error occurred:", error);
    //       alert(error);
    //     });
    // } else {
    //   alert("Please fill all the fields");
    // }
  };

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
              <button id="btnSave" onClick={this.saveGoal}>
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
