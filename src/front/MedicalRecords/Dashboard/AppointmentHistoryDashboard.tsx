import React, { Component } from "react";
import GenericForm from "../../GenericComponents/GenericForm";
class  AppointmentHistoryDashboard extends Component {
  fields = [
    { name: 'name', label: 'Which Type of Doctor', type: 'text' },
    { name: 'email', label: 'Covered By Insurance', type: 'email' },
    { name: 'dob', label: 'Date of Birth', type: 'date' }
  
  ];
  render() {
    return (

      <div>
        <h1>Appointment History Dashboard</h1>
        <GenericForm fields={this.fields} />
    </div>
      );
  }
}

export default AppointmentHistoryDashboard;
