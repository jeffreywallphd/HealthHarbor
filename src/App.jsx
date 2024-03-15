import React, { Component } from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import { SessionProvider, LoginButton } from "@inrupt/solid-ui-react";

import Home from "./Home";
import Fitness from "./Fitness";
import FitnessRoutine from "./FitnessRoutine";
import FitnessTracker from "./FitnessTracker";
import Diet from "./Diet";

// Finance module - John Mware
import Finance from "./Finance";
import Budgeting from "./Budgeting";
import Goals from "./Goals";
import DebtRepayment from "./DebtRepayment";

// Mental Health Chatbot module
import Mental from "./MentalHealthChatbot";

// Habit Tracker module 
import HabitTracker from "./HabitTracker";

// Medical Records
import MedicalRecords from "./MedicalRecords";
import MedicalRecordsInitial from "./front/MedicalRecords/MedicalRecordsInitial";
import AppointmentHistoryDashboard from "./front/MedicalRecords/Dashboard/AppointmentHistoryDashboard";
import InsuranceDashboard from "./front/MedicalRecords/Dashboard/InsuranceDashboard";
import AllergiesDashboard from "./front/MedicalRecords/Dashboard/AllergiesDashboard";
import VitalsDashboard from "./front/MedicalRecords/Dashboard/VitalsDashboard";
import AppointmentHistoryPage from "./front/MedicalRecords/Dashboard/AppointmentHistoryPage";
import MyMedicalRecordsDashboard from "./MyMedicalRecordsDashboard";


import "./styles/styles.css";


const redirectURL = new URL("/", window.location.href).toString();

class App extends Component {
  render() {
    return (
      <HashRouter>
        <SessionProvider sessionId="some-id">
          <header className="mainHeader">
            <div>
              <h1>My Wellness Pod</h1>
            </div>
            <div className="right">
              <LoginButton
                oidcIssuer="https://login.inrupt.com"
                redirectUrl={redirectURL}
                clientName="Wellness Pod App"
              />
            </div>
          </header>
          <div>
            <nav>
              <ul className="navigation">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/fitness">Fitness</NavLink></li>
                <li><NavLink to="/diet">Diet</NavLink></li>
                <li><NavLink to="/finance">Finance</NavLink></li>
                <li><NavLink to="/mental">Mental Health Chatbot</NavLink></li>
                <li><NavLink to="/HabitTracker">Habit Tracker</NavLink></li>
                <li><NavLink to="/medicalRecords">Medical Records</NavLink></li>
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
                <Route path="/medicalRecords/inital-dashboard" element={<MedicalRecordsInitial />} />
                <Route path="/medicalRecords/appointment-history-dashboard" element={<AppointmentHistoryDashboard />} />
                <Route path="/medicalRecords/appointment-history-page" element={<AppointmentHistoryPage />} />
                <Route path="/medicalRecords/insurance-dashboard" element={<InsuranceDashboard />} />
                <Route path="/medicalRecords/allergies-dashboard" element={<AllergiesDashboard />} />
                <Route path="/medicalRecords/vitals-dashboard" element={<VitalsDashboard />} />
                <Route path="/myRecords" element={<MyMedicalRecordsDashboard />} />


                

              </Routes>
            </div>
          </div>
        </SessionProvider>
      </HashRouter>
    );
  }
}

export default App;
