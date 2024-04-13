import React, { Component } from "react";
import "../svr/physical_fitness/css_files/physical_muscleups.css";

class MuscleUps extends Component {
  render() {
    return (
      <div className="muscleups-container">
        <h1>Muscle-ups</h1>
        <div className="muscleups-step">
          <img src="step1_image.jpg" alt="Step 1" />
          <div className="muscleups-text-box">
            <p><strong>Step 1:</strong> Begin with a hanging position on rings or a bar.</p>
          </div>
        </div>
        <div className="muscleups-step">
          <img src="step2_image.jpg" alt="Step 2" />
          <div className="muscleups-text-box">
            <p><strong>Step 2:</strong> Pull yourself up explosively, transitioning into a dip position.</p>
          </div>
        </div>
        <div className="muscleups-step">
          <img src="step3_image.jpg" alt="Step 3" />
          <div className="muscleups-text-box">
            <p><strong>Step 3:</strong> Push up to complete the movement.</p>
          </div>
        </div>
        <div className="muscleups-step">
          <img src="step4_image.jpg" alt="Step 4" />
          <div className="muscleups-text-box">
            <p><strong>Step 4:</strong> Targets both pulling and pushing muscles.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MuscleUps;
