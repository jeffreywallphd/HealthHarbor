import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Mental extends Component {
  render() {
    return (
      <div>
        <h2>Mental Health Chatbot</h2>
        <p>Track habits and converse with an AI for mental health support.</p>
        <section className="cardRow">
          <NavLink to="/ai_chatbot">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#0F4769" }}>
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
