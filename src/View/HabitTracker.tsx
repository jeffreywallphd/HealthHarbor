import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./front/HabitTracker/styles.css";

class HabitTracker extends Component {
  render() {
    return (
        <div className="sidenav" id="sidenav">
          <img
              src="https://play-lh.googleusercontent.com/ODq6rmF4jOnXCzF0OH8BujnoDTzCtQgFLaNwiqjoVIg5t0Wpy9jkS7yY6AmgrYs98No"
              alt="Icon Image"></img>
          <a href="main.html" id="habitBtn">Habit</a>
          <a href="#" id="viewOptionsBtn">View Options</a>
          <div id="viewOptions">
            <a href="#">Daily</a>
            <a href="Calendar.html">Weekly</a>
          </div>
          <div className="gap"></div>

          <div className="gap"></div>
          <a href="#" id="dueBtn">Due</a>
          <a href="#" id="habitReportBtn">Habit Report</a>
        </div>
    );
  }
}

export default HabitTracker;
