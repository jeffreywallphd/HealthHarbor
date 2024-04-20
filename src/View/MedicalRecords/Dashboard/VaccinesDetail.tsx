// VaccinesDetail.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericForm from '../GenericComponents/GenericForm';
import '../GenericComponents/StyleSheetForMR.css';
import '../../../styles/styles.css';

const VaccinesDetail = () => {
  // Sample vaccine data
  const vaccines = [
    { id: 1, name: 'COVID-19 Vaccine', date: '2023-01-15' },
    { id: 2, name: 'Flu Vaccine', date: '2022-10-05' },
    { id: 3, name: 'Hepatitis B Vaccine', date: '2021-12-20' },
    // Add more vaccine records if needed
  ];

  // Fields for the GenericForm
  const fields = [
    { name: 'vaccine_name', label: 'Vaccine Name', type: 'text' },
    { name: 'vaccine_date', label: 'Vaccine Date', type: 'date' }
    // Add more fields as needed
  ];

  return (
    <div className="centered-container">
      <div className="vaccines-container">
        <h2>Vaccines</h2>
        <p>This is where you can view and manage your vaccination records.</p>
        <div className="vaccine-list">
          <h3>Vaccine Records:</h3>
          <ul>
            {vaccines.map(vaccine => (
              <li key={vaccine.id}>
                <strong>{vaccine.name}</strong> - {vaccine.date}
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/add-vaccine">
          <button>Add New Vaccine</button>
        </NavLink>
        {/* GenericForm for adding new vaccines */}
        <GenericForm fields={fields} />
      </div>
    </div>
  );
};

export default VaccinesDetail;
