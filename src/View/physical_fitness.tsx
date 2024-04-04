import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyBuilder from "../svr/physical_fitness/fitness_images/body_builder.png";
import GettingStarted from "../svr/physical_fitness/fitness_images/getting_started.png";
import BegginerPrograms from "../svr/physical_fitness/fitness_images/begginer_programs.png";
import AdvancedPrograms from "../svr/physical_fitness/fitness_images/advanced_program.png";
import "../svr/physical_fitness/css_files/physical_fitness_home.css";




class FitnessApp extends Component {
  render() {
    return (
      <div className="App">
        
         <div className="home">
          <div className="div1_home">
            <h2 id="transform" style={{ margin: "0px" }}>
              TRANSFORM
            </h2>
            <h1 id="life" style={{ margin: "0px" }}>
              YOUR LIFE
            </h1>
            <p id="caring">
              Caring for your physical fitness is an investment in your present
              and future health and happiness. Prioritizing physical activity
              and adopting a healthy lifestyle can lead to a happier, more
              fulfilling life.
            </p>
            <h6 id="readmore"> READ MORE </h6>
          </div>
          <div className="div2_home">
            <img src={BodyBuilder} alt="error" className="bodybuilder"/>
          </div>
         
           </div>

           <div className="cards">

            {cardsArray.map((card) => <Card {...card} />)}

            </div>

         <Footer/>
           

    
       
      </div>
    );
  }
}

export default FitnessApp;


// 3 programs (getting started, begginer programs and advanced programs)

interface CardProps {
  image: string;
  title: string;
  data: string;
  key: number;
}


const cardsArray: CardProps[] = [
  {
    key: 0,
    image: GettingStarted,
    data: "Here's a step-by-step guide to help you begin your journey",
    title: "GETTING STARTED",
  },
  {
    key: 1,
    image: BegginerPrograms,
    data: "Ready to embark on your fitness journey? Find a program that inspires and motivates you",
    title: "BEGINNER PROGRAMS",
  },
  {
    key: 2,
    image: AdvancedPrograms,
    data: "Increase muscle mass and overall body size through targeted exercise, nutrition, and lifestyle strategies",
    title: "ADVANCED PROGRAMS",
  },
];

class Card extends Component<CardProps> {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
  };

  render() {
    const { image, title, data, key } = this.props;
    return (
      <div key={key} className="cardsproto">
        <div className="cardsdiv">
          <figure>
            <img src={image} alt="error" className="image" />
          </figure>
        </div>
        <div>
          <h4>{title}</h4>
          <p>{data}</p>
        </div>
      </div>
    );
  }
}


// footer 

class Footer extends Component {
  render() {
    return (
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: "#ECEFF1" }}
      >
        <section
          className="d-flex justify-content-between p-4 text-white"
          style={{ backgroundColor: "#21D192" }}
        >
          
           
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">GET FIT</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                Get-Fit is a feature of Health-Harbor that focuses on physical fitness. The programs include gym workouts, yoga sessions, cardio exercises, and calisthenics routines.
                    
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">PROGRAMS</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-dark">
                    Yoga
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Gym
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Cardio
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Calisthenics
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-dark">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    BMI Calculator
                  </a>
                </p>
                <NavLink to="/physicalfitnessblog">
                <p className="text-dark">
                
                    Blog
                </p>
                </NavLink>
                <p>
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> Houghton, MI 49936, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> jdwall@mtu.edu
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-dark" href="/">
            JeffDavidWall.com
          </a>
        </div>
      </footer>
    );
  }
}