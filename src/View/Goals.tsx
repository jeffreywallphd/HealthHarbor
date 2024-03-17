import React, { Component } from "react";

import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

const token =
  "eyJraWQiOiJRQUF1bmZDWE0xWlVaMkpKb253ek1rWDJ2TERGaW1jTVVzaWNmUWg5VUJzPSIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2In0.eyJ3ZWJpZCI6Imh0dHBzOi8vaWQuaW5ydXB0LmNvbS9qbXdhcmUiLCJjbmYiOnsiamt0IjoidUpadHNTc2psempFTHNFNDljeU1mSjhvcGxlUzhIS1AtSkI2Y2prYUtCZyJ9LCJzdWIiOiJodHRwczovL2lkLmlucnVwdC5jb20vam13YXJlIiwiYXVkIjoic29saWQiLCJjbGllbnRfaWQiOiI4MjUyMzEzMi03ZWUzLTRiOTEtOTM2MC0yZGUwN2U5Y2I0ODAiLCJpc3MiOiJodHRwczovL2xvZ2luLmlucnVwdC5jb20iLCJpYXQiOjE3MDIwOTkwMzUsImV4cCI6MTcwMjA5OTMzNSwianRpIjoiYTY5MGJkNmYtNGY2MC00YjViLWE3ZWEtOGIwM2QzYzJlZDgwIn0.wweSvO2S4Rx3pVm9r54P-WHiDDHTrP8oVuB0JDlHT6faB3CxlVeVESrZShN-jYf89_3DBPb9Qa_FfhTiq_sEEQ";
interface IGoalState {
  goalID: string;
  userID: string;
  name: string;
  amount: string;
  goalDate: string;
}

class Goals extends Component<{}, IGoalState> {
  constructor(props: {}) {
    super(props);
    this.saveGoal = this.saveGoal.bind(this);

    this.state = {
      goalID: "1002",
      userID: "1112",
      name: "",
      amount: "",
      goalDate: "",
    };
  }

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
    if (this.validateInputs()) {
      alert(this.state.amount);

      fetch("http://localhost:8080/api/d02crd/savegoal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          goalID: this.state.goalID,
          userID: this.state.userID,
          name: this.state.name,
          amount: this.state.amount,
          goalDate: this.state.goalDate,
        }),
      })
        .then((response) => {
          console.log("Raw response:", response);
          if (!response.ok) {
            return response.text().then((text) => {
              throw new Error(text);
            });
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          alert(data);
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          alert(error);
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  render() {
    return (
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
    );
  }
}

export default Goals;
