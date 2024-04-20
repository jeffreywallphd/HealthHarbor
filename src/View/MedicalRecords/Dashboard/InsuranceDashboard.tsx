// InsuranceDashboard.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericForm from '../GenericComponents/GenericForm';
import '../GenericComponents/StyleSheetForMR.css';
import '../../../styles/styles.css';

const InsuranceDashboard = () => {
  // Sample insurance data
  const insuranceData = [
    { id: 1, insurance_provider: 'Provider A', policy_number: '123456789', expiry_date: '2025-12-31' },
    { id: 2, insurance_provider: 'Provider B', policy_number: '987654321', expiry_date: '2024-09-30' },
    // Add more insurance records if needed
  ];

  // Fields for the GenericForm
  const fields = [
    { name: 'insurance_provider', label: 'Insurance Provider', type: 'text' },
    { name: 'policy_number', label: 'Policy Number', type: 'text' },
    { name: 'expiry_date', label: 'Expiry Date', type: 'date' }
    // Add more fields as needed
  ];

  return (
    <div className="centered-container">
      <div className="insurance-dashboard-container">
        <h2>Insurance Dashboard</h2>
        <p>This is where you can view and manage your insurance records.</p>
        <div className="insurance-list">
          <h3>Insurance Records:</h3>
          <ul>
            {insuranceData.map(insurance => (
              <li key={insurance.id}>
                <strong>Provider:</strong> {insurance.insurance_provider}, <strong>Policy Number:</strong> {insurance.policy_number}, <strong>Expiry Date:</strong> {insurance.expiry_date}
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/add-insurance">
          <button>Add New Insurance Record</button>
        </NavLink>
        {/* GenericForm for adding new insurance records */}
        <GenericForm fields={fields} />
      </div>
    </div>
  );
};

export default InsuranceDashboard;
