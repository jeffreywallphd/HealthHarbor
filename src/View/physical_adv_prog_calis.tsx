import React, { Component } from "react";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png"
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import Ymat from "../svr/physical_fitness/fitness_images/y_matt.png";
import "../svr/physical_fitness/css_files/adv_prog_calis.css"
import { NavLink } from "react-router-dom";

class AdvancedProgsCalis extends Component {
    render() {
      return (
        <div className="grid">
          {/* Row 1 */}
          <div className="cell">
            <NavLink to="/humanpullover" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">Human Pullover</div>
              </div>
            </NavLink>
          </div>

          <div className="cell">
            <NavLink to="muscle_ups.html" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">muscle-ups</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">pistol squats</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">handstand push-ups</div>
              </div>
            </NavLink>
          </div>
          {/* Repeat the cell structure for other rows */}
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">glute ham raise</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">hanging leg raises</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">dips</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">doorway face pulls</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">levitation squats</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">advanced pull-ups</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">default</div>
              </div>
            </NavLink>
          </div>
          <div className="cell">
            <NavLink to="#" className="title"> {/* Change a href to NavLink */}
              <div className="flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="thumb" />
                <div className="title-text">default</div>
              </div>
            </NavLink>
          </div>
        </div>
      );
    }
  }
  
  export default AdvancedProgsCalis;