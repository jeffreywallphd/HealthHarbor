import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyBuilder from "../svr/physical_fitness/fitness_images/body_builder.png";
import GettingStarted from "../svr/physical_fitness/fitness_images/getting_started.png";
import BegginerPrograms from "../svr/physical_fitness/fitness_images/begginer_programs.png";
import AdvancedPrograms from "../svr/physical_fitness/fitness_images/advanced_program.png";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png";
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import BmiImage from "../svr/physical_fitness/fitness_images/bmi.png";
import BlogImage from "../svr/physical_fitness/fitness_images/blog.png";
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
            <img src={BodyBuilder} alt="error" className="bodybuilder" />
          </div>
        </div>

        <Cards />

        <FitnessPrograms />

        <Bmi />
        
        <NavLink to="/physicalfitnessblog">
          <Blogcard />
        </NavLink>

        <Footer />
      </div>
    );
  }
}

export default FitnessApp;

// 3 programs (Getting started, Beginner programs, and Advanced Programs)
class Cards extends Component {
  render() {
    return (
      <div className="cards">
        <NavLink to="/physicalfitnessgettingstarted">
          <div className="cardsproto">
            <div className="cardsdiv">
              <figure>
                <img
                  src={GettingStarted}
                  alt="gettingstartedimg"
                  className="image"
                />
              </figure>
            </div>
            <div>
              <h4>GETTING STARTED</h4>
              <p>Here's a step-by-step guide to help you begin your journey</p>
            </div>
          </div>
        </NavLink>

        <div className="cardsproto">
          <div className="cardsdiv">
            <figure>
              <img
                src={BegginerPrograms}
                alt="begginerprogramsimg"
                className="image"
              />
            </figure>
          </div>
          <div>
            <h4>Begginer Programs</h4>
            <p>
              Ready to embark on your fitness journey? Find a program that
              inspires and motivates you
            </p>
          </div>
        </div>

        <div className="cardsproto">
          <div className="cardsdiv">
            <figure>
              <img
                src={AdvancedPrograms}
                alt="advanvedprogramsimg"
                className="image"
              />
            </figure>
          </div>
          <div>
            <h4>Advanced Programs</h4>
            <p>
              Increase muscle mass and overall body size through targeted
              exercise, nutrition, and lifestyle strategies
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// fitness programs
class FitnessPrograms extends Component {
  render() {
    return (
      <div className="fitnessProgramsContainer">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Yoga} alt="yoga" />
              <h3>Yoga</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Yoga is a mind-body practice that originated in ancient India.
                It combines physical postures, breathing techniques, meditation,
                and relaxation to promote holistic health and well-being. The
                practice of yoga is aimed at harmonizing the body, mind, and
                spirit, enhancing flexibility, strength, and balance, as well as
                reducing stress and promoting mental clarity.
              </p>
              <a href="#" type="button">
                Take me to Yoga Programs
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Cardio} alt="cardio" />
              <h3>Cardio</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {" "}
                Cardio, short for cardiovascular exercise, refers to any
                activity that elevates the heart rate and increases blood
                circulation for an extended period. This type of exercise
                primarily targets the cardiovascular system, including the heart
                and lungs.Common forms of cardio include running, cycling,
                swimming, and brisk walking, among others.{" "}
              </p>
              <a href="#" type="button">
                Take me to Cardio Programs
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Gym} alt="gym" />
              <h3>Gym</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Gym exercises encompass a variety of physical activities
                performed using equipment found in a gym setting. These
                exercises target different muscle groups and fitness goals,
                aiming to improve strength, endurance, flexibility, and overall
                fitness. Common gym exercises include squats, deadlifts, bench
                presses, pull-ups, lunges, and planks, among many others.{" "}
              </p>
              <a href="#" type="button">
                Take me to Gym Programs
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Calisthenics} alt="calisthenics" />
              <h3>Calisthenics</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Calisthenics is a form of exercise that uses body weight as
                resistance and requires minimal equipment. It includes a wide
                range of movements such as push-ups, pull-ups, squats,
                lunges,and various types of jumps and holds. Calisthenics
                exercises can be performed almost anywhere, making them
                accessible for people of all fitness levels and backgrounds.
              </p>
              <a href="#" type="button">
                Take me to calisthenics programs
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// bmi
class Bmi extends Component {
  render() {
    return (
      <div className="bmiContainer">
        <div
          style={{ backgroundImage: `url(${BmiImage})` }}
          className="bmiimage"
        ></div>
        <div className="bmiDiv2">
          <h1>Calculate your BMI</h1>
          <h6>
            BMI or Body mass index is used to determine if you are in a healthy
            weight range for your height
          </h6>
          <button>CHECK NOW</button>
        </div>
      </div>
    );
  }
}

// blogs card
class Blogcard extends Component {
  render() {
    return (
      <div className="blogContainer">
        <div className="blogDiv2">
          <h1>Sculpting Strength: Your Path to Physical Fitness</h1>
          <h6>
            Welcome to our dynamic hub of physical fitness! Dive into our blog
            where we merge the latest data on health, sports, and fitness trends
            to empower your journey towards a stronger, healthier you. From
            evidence-based workout routines to cutting-edge nutrition advice,
            we're here to guide you every step of the way. Stay ahead of the
            curve with our up-to-the-minute insights and expert tips, designed
            to optimize your performance and enhance your well-being. Let's
            elevate your fitness game together!
          </h6>
          <button>Take me to blogs</button>
        </div>
        <div
          style={{ backgroundImage: `url(${BlogImage})` }}
          className="blogimage"
        ></div>
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
        ></section>

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
                  Get-Fit is a feature of Health-Harbor that focuses on physical
                  fitness. The programs include gym workouts, yoga sessions,
                  cardio exercises, and calisthenics routines.
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
                  <p className="text-dark">Blog</p>
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
