import React, { Component } from "react";

import "../svr/physical_fitness/css_files/physical_humanpullover.css";

class HumanPullover extends Component {
  render() {
    return (
      <div className="humanpullover-container">
        <h1 className="humanpullover-h1">Human Pullover</h1>
        <div className="humanpullover-step">
          <img src="step1_image.jpg" alt="Step 1" />
          <div className="humanpullover-text-box">
            <p><strong>Step 1:</strong> Start hanging from a pull-up bar.</p>
          </div>
        </div>
        <div className="humanpullover-step">
          <img src="step2_image.jpg" alt="Step 2" />
          <div className="humanpullover-text-box">
            <p><strong>Step 2:</strong> Swing your legs forward and lift them over the bar.</p>
          </div>
        </div>
        <div className="humanpullover-step">
          <img src="step3_image.jpg" alt="Step 3" />
          <div className="humanpullover-text-box">
            <p><strong>Step 3:</strong> Lower your body down, keeping your core engaged.</p>
          </div>
        </div>
        <div className="humanpullover-step">
          <img src="step4_image.jpg" alt="Step 4" />
          <div className="humanpullover-text-box">
            <p><strong>Step 4:</strong> Push back up to the starting position.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HumanPullover;
