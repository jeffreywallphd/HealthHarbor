import React, { Component } from "react";

class FitnessRoutine extends Component {
  render() {
    return (
      <div>
        <h2>Create a Fitness Routine</h2>
        <p>
          Use the form below to create a new fitness routine. You can then begin
          tracking your progress.
        </p>
        <section>
          <div>
            <label id="routineNameLabel" htmlFor="routineName">
              Routine Name:
            </label>
            <br />
            <input type="text" id="routineName" name="routineName" />
          </div>
          <div>
            <button name="btnSave" id="btnSave" onClick={this.saveRoutine}>
              Save Routine
            </button>
          </div>
        </section>
      </div>
    );
  }

  saveRoutine() {}
}

export default FitnessRoutine;
