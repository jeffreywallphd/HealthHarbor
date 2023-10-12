import React, { Component } from "react";

class Goals extends Component {
    render() {
        return (
            <div>
                <h2>Set savings goal </h2>
                <br />
                <section>
                    <div>
                        <label id="goalNameLabel" htmlFor="goalName"> Goal Description: </label>
                        <input type="text" id="goalName" name="goalName" />
                    </div>
                    <div>
                        <label id="goalAmountLabel" htmlFor="goalAmount"> Amount: </label>
                        <input type="text" id="goalAmount" name="goalAmount" />
                    </div>
                    <div>
                        <label id="goalDateLabel" htmlFor="goalDate"> Target Date: </label>
                        <input type="date" id="goalDate" name="goalDate" />
                    </div>
                    <br />
                    <div>
                        <button name="btnSave" id="btnSave" onClick={this.saveGoal}>Save Goal</button>
                    </div>
                </section>
            </div>
        );
    }

    saveGoal() {

    }
}

export default Goals;