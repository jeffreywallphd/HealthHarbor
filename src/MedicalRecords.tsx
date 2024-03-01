import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MedicalRecords extends Component {
  render() {
    return (
      <div>
        <div>Goto Medical Records dashboard: 
          <NavLink to="/medical-records/inital-dashboard-medical-records">
            <div>Click here!</div>
          </NavLink>
        </div>
        <h2>Medical Records</h2>
        <p>Details of your personalized medical records</p>
        <section className="cardRow">
          <NavLink to="/appointment-history-dashboard">
            <div className="card">
              <div className="cardHeader">
                <h3>Appointment</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Users can now update their appointments history on this platform. Users can track their appointments scheduled with ease and without any worry. 
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/insurance-detail">
            <div className="card">
              <div className="cardHeader">
                <h3>Insurance</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Users can easily update their insurance data and link all their appointments with insurance data. This will be very handy while selecting the doctors for appointment tracking and scheduling. 
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/allergies-detail">
            <div className="card">
              <div className="cardHeader">
                <h3>Allergies</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Users can track all their allergies at a single point of access. When needed users can share this data with doctors or health infrastructure with ease. Any necessary medications need will also be assigned here.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/vitals-detail">
            <div className="card">
              <div className="cardHeader">
                <h3>Vitals</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Users can track, record, update and analyse their vital history with their health care centers for better understanding of the patient’s medical history. 
                </p>
              </div>
            </div>
          </NavLink>
        </section>
        <section className="cardRow">
          <NavLink to="/vaccines-detail">
            <div className="card">
              <div className="cardHeader">
                <h3>Vaccines</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Users will be able to keep all their vaccination records at one place. They will be able to schedule and track vaccinations. Users will be able to share this data to other institutions (Health Care/Schools/Government institutions etc.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/medicines-detail">
            <div className="card">
              <div className="cardHeader">
                <h3>Medicines</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Users can have data of all their active medical needs at the tip of their fingers. All medical needs associated with their allergies and other conditions like diabetes, cholesterol will be available here.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/lab-reports-detail">
            <div className="card">
              <div className="cardHeader">
                <h3>Lab Reports</h3>
              </div>
              <div className="cardContainer">
                <p>
                Users will not be able to store all their lab report data together. This data can be shared with other medical care institutions with ease. People will be able to get this data.
                </p>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default MedicalRecords;
