import React, { Component } from "react";
import GenericForm from "../../GenericComponents/GenericForm";
import "../../GenericComponents/StyleSheetForMR.css";
import { NavLink } from "react-router-dom";

class  AppointmentHistoryDashboard extends Component {
  render() {
    const fields = [
      { name: 'type_of_doctor', label: 'Which Type of Doctor?', type: 'select',
        options: 
          [
            { value: 'allergist', label: 'Allergist' }, 
            { value: 'anesthesiology', label: 'Anesthesiology' }, 
            { value: 'cardiology', label: 'Cardiology' },
            { value: 'dermatology', label: 'Dermatology' },
            { value: 'emergencyMedicine', label: 'Emergency medicine' },
            { value: 'endocrinology', label: 'Endocrinology' },
            { value: 'familymedicine', label: 'Family medicine' },
            { value: 'internalmedicine', label: 'Internal medicine' },
            { value: 'neurology', label: 'Neurology' },
            { value: 'nuclearmedicine', label: 'Nuclear medicine' },
            { value: 'obstetricsandgynecology', label: 'Obstetrics and gynecology' },
            { value: 'ophthalmology', label: 'Ophthalmology' },
            { value: 'orthopedicsurgeon', label: 'Orthopedic Surgeon' },
            { value: 'pathology', label: 'Pathology' },
            { value: 'pediatrics', label: 'Pediatrics' },
            { value: 'plasticsurgery', label: 'Plastic Surgery' },
            { value: 'psychiatry', label: 'Psychiatry' },
            { value: 'radiationoncology', label: 'Radiation oncology' },
            { value: 'radiology', label: 'Radiology' },
            { value: 'sleepmedicine', label: 'Sleep Medicine' },
            { value: 'surgery', label: 'Surgery' },
            { value: 'urology', label: 'Urology' }
          ]
      },
      { name: 'coveredbyinsurance', label: 'Covered By Insurance', type: 'radio', options: 
        [
          { value: 'yes', label: 'Yes' }, 
          { value: 'no', label: 'No' }
        ] 
      },
      { name: 'city_pin_code', label: 'City / Pin-code', type: 'text' },
      { name: 'prefdate', label: 'Preferred Date', type: 'date' },
      { name: 'timeslot', label: 'Time Slot', type: 'timeslot', 
        options: 
          [
            { value: 'morning', label: 'Morning' }, 
            { value: 'afternoon', label: 'Afternoon' }, 
            { value: 'evening', label: 'Evening' }
          ] 
      }
      // { name: 'password', label: 'Password', type: 'password' },
    ];

    return (
      <div>
        <h1 className="generic-dashboard-heading">Appointment History Dashboard</h1>
        <div className="appointment-history-button-div">
        <NavLink to="/appointment-history-page">
            <button>Appointment History</button>
          </NavLink>
        </div>
        <GenericForm fields={fields}/>
      </div>
    );
  }
}
export default AppointmentHistoryDashboard;