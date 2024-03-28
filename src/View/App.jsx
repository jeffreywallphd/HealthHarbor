import React, { Component } from "react";
import { HashRouter, NavLink, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Fitness from "./Fitness";
import FitnessRoutine from "./FitnessRoutine";
import FitnessTracker from "./FitnessTracker";
import PhysicalFitness from "./physical_fitness";
import Diet from "./Diet";
import Finance from "./Finance";
import Budgeting from "./Budgeting";
import Goals from "./Goals";
import DebtRepayment from "./DebtRepayment";
import Mental from "./MentalHealthChatbot";
import MentalHealthChatbot from "./Mental_chatbot";
import HabitTracker from "./HabitTracker";
import MedicalRecords from "./MedicalRecords";
import logo from "../Assets/Images/LogoNoName.png";
import "../styles/styles.css";
import InruptAuthenticator from "../Utility/InruptAuthenticator";
import ChatbotUI from "./ChatbotUI";
import MedicalRecordsInitial from "./MedicalRecords/MedicalRecordsInitial";
import AppointmentHistoryDashboard from "./MedicalRecords/Dashboard/AppointmentHistoryDashboard";
import InsuranceDashboard from "./MedicalRecords/Dashboard/InsuranceDashboard";
import AllergiesDashboard from "./MedicalRecords/Dashboard/AllergiesDashboard";
import VitalsDashboard from "./MedicalRecords/Dashboard/VitalsDashboard";
import AppointmentHistoryPage from "./MedicalRecords/Dashboard/AppointmentHistoryPage";
import MyMedicalRecordsDashboard from "./MyMedicalRecordsDashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new InruptAuthenticator();
    this.state = { 
      isAuthenticated: this.auth.isLoggedIn(),
      authError: null 
    };
  }

  componentDidMount() {
    this.auth.handleLoginRedirect();
  }

  login = async () => {
    try {
      await this.auth.login();
      this.setState({ isAuthenticated: this.auth.isLoggedIn(), authError: null });
    } catch (error) {
      this.setState({ authError: error });
    }
  };

  logout = async () => {
    try {
      await this.auth.logout();
      this.setState({ isAuthenticated: this.auth.isLoggedIn(), authError: null });
    } catch(error) {
      this.setState({ authError: error });
    }
  };

  render() {
    const { isAuthenticated, authError } = this.state;

    return (
      <HashRouter>
        
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
                <button onClick={this.login}>Login</button>
              </div>
              <div className="button">
                <button onClick={this.logout}>Logout</button>
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
                  <NavLink className="navlink" to="/physicalfitness">
                    Fitness
                  </NavLink>
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
                <Route path="/physicalfitness" element={<PhysicalFitness />} />
                <Route path="/diet" element={<Diet />} />
                <Route path="/medicalRecords" element={<MedicalRecords />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/budgeting" element={<Budgeting />} />
                <Route path="/debt-repayment" element={<DebtRepayment />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/mental" element={<Mental />} />
                <Route path="/ai_chatbot" element={< MentalHealthChatbot/>} />
                <Route path="/HabitTracker" element={<HabitTracker/>}/>
                <Route path="/fin-chatbot" element={<ChatbotUI />} />
                <Route path="" element={<MedicalRecordsInitial />} />
                <Route path="/medicalRecords/appointment-history-dashboard" element={<AppointmentHistoryDashboard />} />
                <Route path="/medicalRecords/appointment-history-page" element={<AppointmentHistoryPage />} />
                <Route path="/medicalRecords/insurance-dashboard" element={<InsuranceDashboard />} />
                <Route path="/medicalRecords/allergies-dashboard" element={<AllergiesDashboard />} />
                <Route path="/medicalRecords/vitals-dashboard" element={<VitalsDashboard />} />
                <Route path="/myRecords" element={<MyMedicalRecordsDashboard />} />
              </Routes>
            </div>
          </div>
        
      </HashRouter>
    );
  }
}

export default App;
