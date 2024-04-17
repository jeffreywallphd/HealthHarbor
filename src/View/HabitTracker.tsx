import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HabitTracker extends Component {
  render() {
    return (
      <div>
        <h2>Habit Tracker</h2>
        <p>Track habits and converse with an AI for mental health support.</p>
        <section className="cardRow">
          <NavLink to="/habit-tracker">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#0F4769" }}>
                <h3>Habit Tracker</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Monitor and maintain your daily habits for better mental
                  health.
                </p>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default HabitTracker;
