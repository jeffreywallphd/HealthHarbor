import React, { Component } from "react";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png";
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import "../svr/physical_fitness/css_files/adv_prog_home.css";
import { NavLink } from "react-router-dom";

class AdvancedProgramsHome extends Component {
  render() {
    return (
      <div className="adv-prog-home-container">
        <div className="adv-prog-home-left">
          <h1>Advanced Programs</h1>
          <div className="adv-prog-home-highlighter"></div>
          <h4>These challenging movements will help you build strength, coordination, and body control. Remember to focus on proper form and gradually progress as you master each exercise.</h4>
        </div>
        <div className="adv-prog-home-right">
          <div className="adv-prog-home-grid">
            <div className="adv-prog-home-grid-item"><img src={Yoga} alt="Yoga" /></div>
            <div className="adv-prog-home-grid-item"><NavLink to ="/physicaladvprogcalis"><img src={Calisthenics} alt="Calisthenics" /></NavLink></div>
            <div className="adv-prog-home-grid-item"><img src={Cardio} alt="Cardio" /></div>
            <div className="adv-prog-home-grid-item"><img src={Gym} alt="Gym" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedProgramsHome;
