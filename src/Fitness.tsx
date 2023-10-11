import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Fitness extends Component {
  render() {
    return (
      <div>
        <h2>Physical Fitness</h2>
        <p>
            Create a custom fitness routine, browse pre-designed routines, or track your physical activity.
        </p>
        <section className="cardRow">
            <NavLink to="/fitness-routine">
              <div className="card">
                <div className="cardHeader">
                    <h3>Physical Routine Creator</h3>
                </div>
                <div className="cardContainer">
                  <p>Create a new customized workout routine or manager other saved routines.</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/fitness-tracker">
              <div className="card">
                <div className="cardHeader">
                    <h3>Fitness Tracker</h3>
                </div>
                <div className="cardContainer">
                  <p>Track your physical activity and visualize your progress.</p>
                </div>
              </div>
            </NavLink>
        </section>
      </div>
    );
  }
}

export default Fitness;