import React, { Component } from 'react';
import GenericForm from '../../GenericComponents/GenericForm';
import '../../GenericComponents/StyleSheetForMR.css';
import { NavLink } from 'react-router-dom';

class InsuranceDashboard extends Component {
  render() {
    const fields = [
      { name: 'insurance_provider', label: 'Insurance Provider', type: 'text' },
      { name: 'policy_number', label: 'Policy Number', type: 'text' },
      { name: 'expiry_date', label: 'Expiry Date', type: 'date' },
      // Add more fields as needed
    ];

    return (
      <div>
        <h1 className="generic-dashboard-heading">Insurance Dashboard</h1>
        <div className="insurance-button-div">
        <NavLink to="/medical-records/insurance-dashboard">
  
</NavLink>

        </div>
        <GenericForm fields={fields} />
      </div>
    );
  }
}

export default InsuranceDashboard;
