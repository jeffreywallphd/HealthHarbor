import React from "react";
import "../../GenericComponents/StyleSheetForMR.css";
import GenericTable from "../../GenericComponents/GenericTable";


class AppointmentHistoryPage extends React.Component {
  render() {
    // Example data
    const data = [
      {"Physician's' Name": 'John Doe', "Appointment time and date": "12:00 PM 02/26/2023", "Location": "Clinic", "Necessary steps to take before the appointment": "Fasting for a day"},
      {"Physician's' Name": 'John Doe', "Appointment time and date": "12:00 PM 03/26/2023", "Location": "Home Visit", "Necessary steps to take before the appointment": "No Steps to be taken"},
      {"Physician's' Name": 'John Doe', "Appointment time and date": "12:00 PM 04/26/2023", "Location": "Home Visit", "Necessary steps to take before the appointment": "No Steps to be taken"},
      // Add more data as needed
    ];

    return (
      <div>
        <GenericTable heading="Appointment History" data={data} buttonLabel="Add Appointment" />
      </div>
    );
  }
  }
  
  export default AppointmentHistoryPage;