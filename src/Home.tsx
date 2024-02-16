import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        <p>
          Your personal wellness pod is a gateway to the various wellness
          services you utilize. Your pod is a centralized location for all of
          your wellness information.
        </p>
        <section className="cardRow">
          <NavLink to="/fitness">
            <div className="card">
              <div className="cardHeader">
                <h3>Physical Wellness</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Create customized workout routines or select from existing
                  workout routines. Then, track and visualize your workout
                  progress.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/diet">
            <div className="card">
              <div className="cardHeader">
                <h3>Dietary Wellness</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Create customized diet plans, select from existing diet plans,
                  or just track your eating habits.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/finance">
            <div className="card">
              <div className="cardHeader">
                <h3>Finance Wellness</h3>
              </div>
              <div className="cardContainer">
                <p>Manage personal budgets, and credits. </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/mentalwellness">
            <div className="card">
              <div className="cardHeader">
                <h3>Mental Wellness</h3>
              </div>
              <div className="cardContainer">
                <p>Track your habits and access a personal AI therapist.</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/medicalRecords">
            <div className="card">
              <div className="cardHeader">
                <h3>Medical Record Management</h3>
              </div>
              <div className="cardContainer">
                <p>Upload Medical Records and View History</p>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default Home;
