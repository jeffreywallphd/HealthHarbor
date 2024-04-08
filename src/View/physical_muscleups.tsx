
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png"
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import Ymat from "../svr/physical_fitness/fitness_images/y_matt.png";
import "../svr/physical_fitness/css_files/physical_fitness_getting_started.css";

import React, { Component } from "react";
import "../svr/physical_fitness/css_files/physical_muscleups.css";

class MuscleUps extends Component {
  render() {
    return (
      <div className="container">
        <h1>Muscle-ups</h1>
        <div className="step">
          <img src="step1_image.jpg" alt="Step 1" />
          <div className="text-box">
            <p><strong>Step 1:</strong> Begin with a hanging position on rings or a bar.</p>
          </div>
        </div>
        <div className="step">
          <img src="step2_image.jpg" alt="Step 2" />
          <div className="text-box">
            <p><strong>Step 2:</strong> Pull yourself up explosively, transitioning into a dip position.</p>
          </div>
        </div>
        <div className="step">
          <img src="step3_image.jpg" alt="Step 3" />
          <div className="text-box">
            <p><strong>Step 3:</strong> Push up to complete the movement.</p>
          </div>
        </div>
        <div className="step">
          <img src="step4_image.jpg" alt="Step 4" />
          <div className="text-box">
            <p><strong>Step 4:</strong> Targets both pulling and pushing muscles.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MuscleUps;
