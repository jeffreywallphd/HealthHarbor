import React, { Component } from "react";
import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import {
  SessionProvider,
  LoginButton,
  LogoutButton,
} from "@inrupt/solid-ui-react";
import Home from "./Home";
import Fitness from "./Fitness";
import FitnessRoutine from "./FitnessRoutine";
import FitnessTracker from "./FitnessTracker";
import Diet from "./Diet";
import Finance from "./Finance";
import Budgeting from "./Budgeting";
import Goals from "./Goals";
import DebtRepayment from "./DebtRepayment";
import Mental from "./MentalHealthChatbot";
import HabitTracker from "./HabitTracker";
import MedicalRecords from "./MedicalRecords";
import logo from "./images/LogoNoName.png";
import { handleLoginRedirect, getDefaultPod, initializePod } from "./login";
import "./styles/styles.css";

class App extends Component {
  componentDidMount() {
    handleLoginRedirect();
    getDefaultPod().then((pod) => {
      if (pod) {
        initializePod(pod);
      } else {
        console.log("Created a New user, no webID");
        // New user no pod set up
      }
    });
  }

  render() {
    return (
      <HashRouter>
        <SessionProvider>
          <header className="mainHeader">
            <div className="brand">
              <div className="title">
                <img src={logo} alt="HealthHarbor Logo" className="logo" />
                <h1>HealthHarbor</h1>
              </div>
              <div className="slogan">
                <slogan>Anchor Your Health</slogan>
              </div>
            </div>
            <div className="right login">
              <div className="button">
                <LoginButton
                  oidcIssuer="https://login.inrupt.com"
                  redirectUrl={new URL("/", window.location.href).toString()}
                  clientName="Wellness Pod App"
                />
              </div>
              <div className="button">
                <LogoutButton
                  oidcIssuer="https://login.inrupt.com"
                  redirectUrl={new URL("/", window.location.href).toString()}
                  clientName="Wellness Pod App"
                />
              </div>
            </div>
          </header>
          <div>
            <nav>
              <ul className="navigation">
                <li>
                  <NavLink className="navlink" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <a href="https://ubiquitous-gelato-085eed.netlify.app">
                    Fitness
                  </a>
                </li>
                <li>
                  <NavLink className="navlink" to="/diet">
                    Diet
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink" to="/finance">
                    Finance
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink" to="/mental">
                    Mental Health Chatbot
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink" to="/HabitTracker">
                    Habit Tracker
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink" to="/medicalRecords">
                    Medical Records
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fitness" element={<Fitness />} />
                <Route path="/fitness-routine" element={<FitnessRoutine />} />
                <Route path="/fitness-tracker" element={<FitnessTracker />} />
                <Route path="/diet" element={<Diet />} />
                <Route path="/medicalRecords" element={<MedicalRecords />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/budgeting" element={<Budgeting />} />
                <Route path="/debt-repayment" element={<DebtRepayment />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/mental" element={<Mental />} />
                <Route path="/HabitTracker" element={<HabitTracker />} />
              </Routes>
            </div>
          </div>
        </SessionProvider>
      </HashRouter>
    );
  }
}

export default App;
