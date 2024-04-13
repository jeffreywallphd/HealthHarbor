import React, { Component } from "react";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import "../svr/physical_fitness/css_files/adv_prog_calis.css"
import { NavLink } from "react-router-dom";

class AdvancedProgsCalis extends Component {
    render() {
      return (
        <div className="adv-prog-calis-grid">
          {/* Row 1 */}
          <div className="adv-prog-calis-cell">
            <NavLink to="/physicalhumanpullover" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">Human Pullover</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
          <NavLink to="/physicalmuscleups" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">muscle-ups</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">pistol squats</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">handstand push-ups</div>
              </div>
            </NavLink>
          </div>

          {/* Repeat the same structure for other rows */}
          
          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">glute ham raise</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">hanging leg raises</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">dips</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">doorway face pulls</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">levitation squats</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">advanced pull-ups</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">default</div>
              </div>
            </NavLink>
          </div>

          <div className="adv-prog-calis-cell">
            <NavLink to="#" className="adv-prog-calis-title">
              <div className="adv-prog-calis-flex-container">
                <img src={Calisthenics} width="133" height="100" alt="Calisthenics" className="adv-prog-calis-thumb" />
                <div className="adv-prog-calis-title-text">default</div>
              </div>
            </NavLink>
          </div>
        </div>
      );
    }
  }
  
  export default AdvancedProgsCalis;
