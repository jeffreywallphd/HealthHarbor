import React, { Component } from "react";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png"
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import Ymat from "../svr/physical_fitness/fitness_images/y_matt.png";
import "../svr/physical_fitness/css_files/physical_beginnprog.css"
import { NavLink } from "react-router-dom";

interface classprops{
  classList: any;
}

class BeginProg extends Component<classprops> {
 
  render() {
    return (
      <div>
        <div className="header">Beginner Programs</div>
        <div className="container">
          <div className="flip-card card" onTouchStart={() => this.classList.toggle('hover')}>
            <div className="flip-card-inner">
              <div className="flip-card-inner-front" style={{backgroundImage: `url(${Yoga})`}}>
                <span>Yoga</span>
              </div>
              <div className="flip-card-inner-back">
                <h3 className="flip-card-inner-back-title">Beginner Yoga Programs</h3>
                <p className="flip-card-inner-back-text">To embark on your yoga journey, start by finding a comfortable space and setting aside dedicated time each day for practice. Begin with simple poses and focus on deep, mindful breathing to ease into the practice.</p>
                <NavLink to="#" className="button">Get Started Now</NavLink>
              </div>
            </div>
          </div>
          <div className="flip-card card" onTouchStart={() => this.classList.toggle('hover')}>
            <div className="flip-card-inner">
              <div className="flip-card-inner-front" style={{backgroundImage: `url(${Cardio})`}}>
                <span>Cardio</span>
              </div>
              <div className="flip-card-inner-back">
                <h3 className="flip-card-inner-back-title">Beginner Cardio Workouts</h3>
                <p className="flip-card-inner-back-text">Start slow and gradually increase intensity to avoid overexertion. Incorporate activities like brisk walking or cycling for effective cardiovascular health.</p>
                <NavLink to="#" className="button">Start Now</NavLink>
              </div>
            </div>
          </div>
          <div className="flip-card card" onTouchStart={() => this.classList.toggle('hover')}>
            <div className="flip-card-inner">
              <div className="flip-card-inner-front" style={{backgroundImage: `url(${Gym})`}}>
                <span>Gym</span>
              </div>
              <div className="flip-card-inner-back">
                <h3 className="flip-card-inner-back-title">Beginner Gym Workouts</h3>
                <p className="flip-card-inner-back-text">Start by setting achievable goals and gradually increasing intensity to avoid burnout.</p>
                <NavLink to="#" className="button">Hop On!</NavLink>
              </div>
            </div>
          </div>
          <div className="flip-card card" onTouchStart={() => this.classList.toggle('hover')}>
            <div className="flip-card-inner">
              <div className="flip-card-inner-front" style={{backgroundImage: `url(${Calisthenics})`}}>
                <span>Calisthenics</span>
              </div>
              <div className="flip-card-inner-back">
                <h3 className="flip-card-inner-back-title">Beginner Calisthenics</h3>
                <p className="flip-card-inner-back-text">Start with a solid foundation of core strength and gradually progress to more advanced movements for a fulfilling calisthenics experience.</p>
                <NavLink to="/begcalis" className="button">Direct Me to It</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="circle-container">
          <div className="circle">Yoga</div>
          <div className="circle">Cardio</div>
          <div className="circle">Gym</div>
          <div className="circle">Calisthenics</div>
        </div>
      </div>
    );
  }
}

export default BeginProg;
