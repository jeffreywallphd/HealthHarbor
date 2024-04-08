import React, { Component } from "react";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png"
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import Ymat from "../svr/physical_fitness/fitness_images/y_matt.png";
import "../svr/physical_fitness/css_files/physical_humanpullover.css";

class HumanPullover extends Component {
  render() {
    return (
      <div className="container">
        <h1>Human Pullover</h1>
        <div className="step">
          <img src="step1_image.jpg" alt="Step 1" />
          <div className="text-box">
            <p><strong>Step 1:</strong> Start hanging from a pull-up bar.</p>
          </div>
        </div>
        <div className="step">
          <img src="step2_image.jpg" alt="Step 2" />
          <div className="text-box">
            <p><strong>Step 2:</strong> Swing your legs forward and lift them over the bar.</p>
          </div>
        </div>
        <div className="step">
          <img src="step3_image.jpg" alt="Step 3" />
          <div className="text-box">
            <p><strong>Step 3:</strong> Lower your body down, keeping your core engaged.</p>
          </div>
        </div>
        <div className="step">
          <img src="step4_image.jpg" alt="Step 4" />
          <div className="text-box">
            <p><strong>Step 4:</strong> Push back up to the starting position.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HumanPullover;