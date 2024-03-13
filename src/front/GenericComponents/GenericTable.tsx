import React from 'react';
import './StyleSheetForMR.css'; // Import the CSS file
interface TableProps {
    heading: string; // Heading for the table
    data: { [key: string]: any }[]; // Define the type for the data prop
    buttonLabel?: string; // Optional button label prop
  }
  
  const GenericTable: React.FC<TableProps> = ({ heading, data, buttonLabel = 'Add Appointment' }) => {
    if (!data || data.length === 0) {
      return <div>No data available</div>;
    }
  
    const columns = Object.keys(data[0]);
  
    return (
      <div className="generic-table-container">
        <h2 className='generic-dashboard-heading'>{heading}</h2>
        <table className="generic-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col, colIdx) => (
                  <td key={colIdx}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {buttonLabel && (
          <div className="appointment-history-button-div">
            <button>{buttonLabel}</button>
          </div>
        )}
      </div>
    );
  };
  
  export default GenericTable;