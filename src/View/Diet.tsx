import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Calorie extends Component {
  render() {
    return (
      <div>
        <h2>Calorie Tracker</h2>
        <p>Monitor your dietary intake and stay on top of your nutrition goals with our calorie tracker.</p>
        <section className="cardRow">
          <NavLink to="/diet-dashboard">
            <div className="card">
              <div className="cardHeader">
                <h3>Dashboard</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Visualize and track your daily, weekly, monthly, and yearly calorie intake and burn progress with analytics and graphs.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/diet-foodLog">
            <div className="card">
              <div className="cardHeader">
                <h3>Food Log</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Record and manage your daily calorie intake by entering food details and viewing total calorie consumption for each day, with the ability to edit previous entries.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/diet-exerciseLog">
            <div className="card">
              <div className="cardHeader">
                <h3>Exercise Log</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Track and monitor your daily exercise routine, highlighting the total calories burnt and remaining calories to meet your daily goal.
                </p>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default Calorie;
