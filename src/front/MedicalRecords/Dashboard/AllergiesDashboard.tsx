import React, { Component } from 'react';
import GenericForm from '../../GenericComponents/GenericForm';
import '../../GenericComponents/StyleSheetForMR.css';
import { NavLink } from 'react-router-dom';

class AllergiesDashboard extends Component {
  render() {
    const fields = [
      { name: 'allergy_type', label: 'Allergy Type', type: 'text' },
      { name: 'severity', label: 'Severity', type: 'select', options: [{ value: 'mild', label: 'Mild' }, { value: 'moderate', label: 'Moderate' }, { value: 'severe', label: 'Severe' }] },
      // Add more fields as needed
    ];

    return (
      <div>
        <h1 className="generic-dashboard-heading">Allergies Dashboard</h1>
        <div className="allergies-button-div">
          <NavLink to="/medical-records/allergies-dashboard">
            
          </NavLink>
        </div>
        <GenericForm fields={fields} />
      </div>
    );
  }
}

export default AllergiesDashboard;
