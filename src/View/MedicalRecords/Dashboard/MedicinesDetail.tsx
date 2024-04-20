// MedicinesDetail.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericForm from '../GenericComponents/GenericForm';
import '../GenericComponents/StyleSheetForMR.css';
import '../../../styles/styles.css';

const MedicinesDetail = () => {
  // Sample medicine data
  const medicines = [
    { id: 1, name: 'Paracetamol', dosage: '500mg', frequency: 'Twice daily' },
    { id: 2, name: 'Amoxicillin', dosage: '250mg', frequency: 'Once daily' },
    { id: 3, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
    // Add more medicine records if needed
  ];

  // Fields for the GenericForm
  const fields = [
    { name: 'medicine_name', label: 'Medicine Name', type: 'text' },
    { name: 'medicine_dosage', label: 'Dosage', type: 'text' },
    { name: 'medicine_frequency', label: 'Frequency', type: 'text' }
    // Add more fields as needed
  ];

  return (
    <div className="centered-container">
      <div className="medicines-container">
        <h2>Medicines</h2>
        <p>This is where you can view and manage your medicine records.</p>
        <div className="medicine-list">
          <h3>Medicine Records:</h3>
          <ul>
            {medicines.map(medicine => (
              <li key={medicine.id}>
                <strong>{medicine.name}</strong> - Dosage: {medicine.dosage}, Frequency: {medicine.frequency}
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/add-medicine">
          <button>Add New Medicine</button>
        </NavLink>
        {/* GenericForm for adding new medicines */}
        <GenericForm fields={fields} />
      </div>
    </div>
  );
};

export default MedicinesDetail;
