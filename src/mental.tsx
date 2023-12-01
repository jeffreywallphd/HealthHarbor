import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Mental extends Component {
  render() {
    return (
      <div>
        <h2>Mental Wellness</h2>
        <p>Track habits and converse with an AI for mental health support.</p>
        <section className="cardRow">
          <NavLink to="/habit-tracker">
            <div className="card">
              <div className="cardHeader">
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
          <NavLink to="/ai-chatbot">
            <div className="card">
              <div className="cardHeader">
                <h3>AI Chatbot</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Engage with our AI chatbot for guidance, support, and mental
                  health resources.
                </p>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default Mental;
