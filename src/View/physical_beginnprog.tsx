import React, { Component } from "react";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png";
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import "../svr/physical_fitness/css_files/physical_beginnprog.css";
import BegCalis from "./physical_begcalis";
import { NavLink } from "react-router-dom";

class BeginProg extends Component {
  render() {
    return (
      <div>
        <div className="beginnprog-header">Beginner Programs</div>
        <div className="beginnprog-container">
          <div className="beginnprog-flip-card card" onTouchStart={this.handleTouchStart}>
            <div className="beginnprog-flip-card-inner">
              <div className="beginnprog-flip-card-inner-front" style={{ backgroundImage: `url(${Yoga})` }}>
                <span>Yoga</span>
              </div>
              <div className="beginnprog-flip-card-inner-back">
                <h3 className="beginnprog-flip-card-inner-back-title">Beginner Yoga Programs</h3>
                <p className="beginnprog-flip-card-inner-back-text">Embark your journey by finding a comfortable space and setting aside time each day for practice. Begin with simple poses!</p>
                <NavLink to="#" className="beginnprog-button">Get Started Now</NavLink>
              </div>
            </div>
          </div>
          <div className="beginnprog-flip-card card" onTouchStart={this.handleTouchStart}>
            <div className="beginnprog-flip-card-inner">
              <div className="beginnprog-flip-card-inner-front" style={{ backgroundImage: `url(${Cardio})` }}>
                <span>Cardio</span>
              </div>
              <div className="beginnprog-flip-card-inner-back">
                <h3 className="beginnprog-flip-card-inner-back-title">Beginner Cardio Workouts</h3>
                <p className="beginnprog-flip-card-inner-back-text">Start slow and gradually increase intensity to avoid overexertion. Incorporate brisk walking or cycling for effective cardiovascular health.</p>
                <NavLink to="#" className="beginnprog-button">Start Now</NavLink>
              </div>
            </div>
          </div>
          <div className="beginnprog-flip-card card" onTouchStart={this.handleTouchStart}>
            <div className="beginnprog-flip-card-inner">
              <div className="beginnprog-flip-card-inner-front" style={{ backgroundImage: `url(${Gym})` }}>
                <span>Gym</span>
              </div>
              <div className="beginnprog-flip-card-inner-back">
                <h3 className="beginnprog-flip-card-inner-back-title">Beginner Gym Workouts</h3>
                <p className="beginnprog-flip-card-inner-back-text">Start by setting achievable goals and gradually increasing intensity to avoid burnout.</p>
                <NavLink to="#" className="beginnprog-button">Hop On!</NavLink>
              </div>
            </div>
          </div>
          <div className="beginnprog-flip-card card" onTouchStart={this.handleTouchStart}>
            <div className="beginnprog-flip-card-inner">
              <div className="beginnprog-flip-card-inner-front" style={{ backgroundImage: `url(${Calisthenics})` }}>
                <span>Calisthenics</span>
              </div>
              <div className="beginnprog-flip-card-inner-back">
                <h3 className="beginnprog-flip-card-inner-back-title">Beginner Calisthenics</h3>
                <p className="beginnprog-flip-card-inner-back-text">Start with a solid foundation of core strength and gradually progress to more advanced movements for a fulfilling calisthenics experience.</p>
                <NavLink to="/physicalbegcalis" className="beginnprog-button">Direct Me to It</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="beginnprog-circle-container">
          <div className="beginnprog-circle">Yoga</div>
          <div className="beginnprog-circle">Cardio</div>
          <div className="beginnprog-circle">Gym</div>
          <div className="beginnprog-circle">Calisthenics</div>
        </div>
      </div>
    );
  }

  handleTouchStart = (event) => {
    event.currentTarget.classList.toggle('hover');
  };
}

export default BeginProg;
