import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt, faShieldAlt, faAllergies, faHeartbeat, faSyringe, faPills, faFileMedical, faUser } from '@fortawesome/free-solid-svg-icons';
import InsuranceDashboard from "./front/MedicalRecords/Dashboard/InsuranceDashboard";
import AllergiesDashboard from "./front/MedicalRecords/Dashboard/AllergiesDashboard";
import VitalsDashboard from "./front/MedicalRecords/Dashboard/VitalsDashboard";
import AppointmentHistoryDashboard from "./front/MedicalRecords/Dashboard/AppointmentHistoryDashboard";

class MyMedicalRecordsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: null
    };
  }

  handleButtonClick = (section) => {
    this.setState({ currentSection: section });
  };

  render() {
    const { currentSection } = this.state;

    return (
      <div>
        <div className="container">
          <div className="user-details">
            <div className="details">
              <p><FontAwesomeIcon icon={faUser} /> Name, Age, ID </p>
            </div>
          </div>
        </div>
        
        <div className="wrapper">
          <aside>
            <button onClick={() => this.handleButtonClick('Find')}>
              Find <FontAwesomeIcon icon={faSearch} />
            </button>
      
            <button onClick={() => this.handleButtonClick('Appointments')}>
              
                Appointments <FontAwesomeIcon icon={faCalendarAlt} />
              </button>
            
            <button onClick={() => this.handleButtonClick('Insurance')}>
              Insurance Info <FontAwesomeIcon icon={faShieldAlt} />
            </button>
            <button onClick={() => this.handleButtonClick('Allergies')}>
              Allergies <FontAwesomeIcon icon={faAllergies} />
            </button>
            <button onClick={() => this.handleButtonClick('Vitals')}>
              Vitals <FontAwesomeIcon icon={faHeartbeat} />
            </button>
            <button onClick={() => this.handleButtonClick('Vaccines')}>
              Vaccines <FontAwesomeIcon icon={faSyringe} />
            </button>
            <button onClick={() => this.handleButtonClick('Medicines')}>
              Medicines <FontAwesomeIcon icon={faPills} />
            </button>
            <button onClick={() => this.handleButtonClick('Lab Reports')}>
              Lab Reports <FontAwesomeIcon icon={faFileMedical} />
            </button>
          </aside>
          <div className="main-content">
            <a href="#" className="get-help">Get Help</a>
            <div className="dashboard-details">
              {/* This is where dashboard details will be displayed */}
              {/* Conditional rendering based on the state */}
              {currentSection === 'Insurance' && <InsuranceDashboard />}
              {currentSection === 'Allergies' && <AllergiesDashboard />}
              {currentSection === 'Vitals' && <VitalsDashboard />}
              {currentSection === 'Appointments' && <AppointmentHistoryDashboard />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMedicalRecordsDashboard;
