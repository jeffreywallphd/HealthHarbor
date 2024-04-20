import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericForm from '../GenericComponents/GenericForm';
import '../GenericComponents/StyleSheetForMR.css';
import '../../../styles/styles.css';

const VitalsDashboard = () => {
  // Sample vitals data
  const vitalsData = [
    { id: 1, temperature: 98.6, respiration_rate: 18, blood_pressure: '120/80' },
    { id: 2, temperature: 99.2, respiration_rate: 20, blood_pressure: '130/85' },
    { id: 3, temperature: 97.9, respiration_rate: 16, blood_pressure: '115/75' },
    // Add more vitals records if needed
  ];

  // Fields for the GenericForm
  const fields = [
    { name: 'temperature', label: 'Temperature', type: 'number' },
    { name: 'respiration_rate', label: 'Respiration Rate', type: 'number' },
    { name: 'blood_pressure', label: 'Blood Pressure', type: 'text' }
    // Add more fields as needed
  ];

  return (
    <div className="centered-container">
      <div className="vitals-dashboard-container">
        <h1>Vitals Dashboard</h1>
        <p>This is where you can view and manage your vitals records.</p>
        <div className="vitals-list">
          <h3>Vitals Records:</h3>
          <ul>
            {vitalsData.map(vital => (
              <li key={vital.id}>
                <strong>Temperature:</strong> {vital.temperature}°F, <strong>Respiration Rate:</strong> {vital.respiration_rate}, <strong>Blood Pressure:</strong> {vital.blood_pressure}
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/add-vitals">
          <button>Add New Vitals Record</button>
        </NavLink>
        {/* GenericForm for adding new vitals records */}
        <GenericForm fields={fields} />
      </div>
    </div>
  );
};

export default VitalsDashboard;
