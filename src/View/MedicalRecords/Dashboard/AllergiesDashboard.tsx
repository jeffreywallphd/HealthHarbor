// AllergiesDashboard.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericForm from '../GenericComponents/GenericForm';
import '../GenericComponents/StyleSheetForMR.css';
import '../../../styles/styles.css';

const AllergiesDashboard = () => {
  // Sample allergies data
  const allergiesData = [
    { id: 1, allergy_type: 'Peanuts', severity: 'Severe' },
    { id: 2, allergy_type: 'Pollen', severity: 'Mild' },
    // Add more allergies records if needed
  ];

  // Fields for the GenericForm
  const fields = [
    { name: 'allergy_type', label: 'Allergy Type', type: 'text' },
    { name: 'severity', label: 'Severity', type: 'select', options: [{ value: 'mild', label: 'Mild' }, { value: 'moderate', label: 'Moderate' }, { value: 'severe', label: 'Severe' }] }
    // Add more fields as needed
  ];

  return (
    <div className="centered-container">
      <div className="allergies-dashboard-container">
        <h2>Allergies Dashboard</h2>
        <p>This is where you can view and manage your allergies records.</p>
        <div className="allergies-list">
          <h3>Allergies Records:</h3>
          <ul>
            {allergiesData.map(allergy => (
              <li key={allergy.id}>
                <strong>Allergy Type:</strong> {allergy.allergy_type}, <strong>Severity:</strong> {allergy.severity}
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/add-allergy">
          <button>Add New Allergy Record</button>
        </NavLink>
        {/* GenericForm for adding new allergies records */}
        <GenericForm fields={fields} />
      </div>
    </div>
  );
};

export default AllergiesDashboard;
