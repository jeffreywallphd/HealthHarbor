import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png";
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import "../svr/physical_fitness/css_files/adv_prog_home.css";

class AdvancedPrograms extends Component {
  render() {
    return (
      <div className="AdvancedProgramsContainer">
        <div className="left-section">
          <h1>Advanced Programs</h1>
          <div className="highlighter"></div>
          <h4>
            These challenging movements will help you build strength,
            coordination, and body control. Remember to focus on proper form and
            gradually progress as you master each exercise.
          </h4>
        </div>
        <div className="right-section">
          <div className="grid">
            <div className="grid-item">
              <img src={Yoga} alt="Yoga" />
            </div>
            <NavLink to="/physicaladvprogcalis">
              <div className="grid-item">
                <img src={Calisthenics} />
              </div>
            </NavLink>
            <div className="grid-item">
              <img src={Cardio} alt="Cardio" />
            </div>
            <div className="grid-item">
              <img src={Gym} alt="Gym" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedPrograms;
