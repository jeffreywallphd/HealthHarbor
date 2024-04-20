// LabReportsDetail.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericForm from '../GenericComponents/GenericForm';
import '../GenericComponents/StyleSheetForMR.css';
import '../../../styles/styles.css';

const LabReports = () => {
  // Sample lab report data
  const labReports = [
    { id: 1, name: 'Blood Test', date: '2023-01-15', result: 'Normal' },
    { id: 2, name: 'Urine Test', date: '2022-10-05', result: 'Abnormal' },
    { id: 3, name: 'X-ray', date: '2021-12-20', result: 'Normal' },
    // Add more lab report records if needed
  ];

  // Fields for the GenericForm
  const fields = [
    { name: 'report_name', label: 'Report Name', type: 'text' },
    { name: 'report_date', label: 'Date', type: 'date' },
    { name: 'report_result', label: 'Result', type: 'text' }
    // Add more fields as needed
  ];

  return (
    <div className="centered-container">
      <div className="lab-reports-container">
        <h2>Lab Reports</h2>
        <p>This is where you can view and manage your lab report records.</p>
        <div className="lab-report-list">
          <h3>Lab Report Records:</h3>
          <ul>
            {labReports.map(report => (
              <li key={report.id}>
                <strong>{report.name}</strong> - Date: {report.date}, Result: {report.result}
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/add-lab-report">
          <button>Add New Lab Report</button>
        </NavLink>
        {/* GenericForm for adding new lab reports */}
        <GenericForm fields={fields} />
      </div>
    </div>
  );
};

export default LabReports;
