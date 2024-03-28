import React, { Component } from 'react';
import GenericForm from '../GenericComponents/GenericForm';
import '../GenericComponents/StyleSheetForMR.css';
import { NavLink } from 'react-router-dom';

class VitalsDashboard extends Component {
  render() {
    const fields = [
      { name: 'temperature', label: 'Temperature', type: 'number' },
      { name: 'respiration_rate', label: 'Respiration Rate', type: 'number' },
      { name: 'blood_pressure', label: 'Blood Pressure', type: 'text' },
      // Add more fields as needed
    ];

    return (
      <div>
        <h1 className="generic-dashboard-heading">Vitals Dashboard</h1>
        <div className="vitals-button-div">
          <NavLink to="/medical-records/vitals-dashboard">

          </NavLink>
        </div>
        <GenericForm fields={fields} />
      </div>
    );
  }
}

export default VitalsDashboard;