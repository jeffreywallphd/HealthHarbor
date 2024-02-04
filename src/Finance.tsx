import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Finance extends Component {
  render() {
    return (
      <div>
        <h2>Financial Welness</h2>
        <p>Manage personal budgets, and credits.</p>
        <section className="cardRow">
          <NavLink to="/budgeting">
            <div className="card">
              <div className="cardHeader">
                <h3>Budget</h3>
              </div>
              <div className="cardContainer">
                <p>Create a new budget or manage other saved budgets.</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/goals">
            <div className="card">
              <div className="cardHeader">
                <h3>Goals</h3>
              </div>
              <div className="cardContainer">
                <p>Set savings goals.</p>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default Finance;
