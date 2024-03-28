import React, { Component } from "react";
import Description from "../GenericComponents/Description";

class  AppointmentHistoryDetail extends Component {
  render() {
    return (
        <div>
          <Description
            title="Welcome to Appointment History Detail"
            backgroundImage="">
              <ul>
                  <li><strong>Appointment Management Feature:</strong> The platform now offers a feature that enables users to manage their appointments. This likely includes functionalities such as scheduling, editing, canceling, and viewing appointments.</li>
                  <li><strong>Update Appointment History:</strong> Users can now make changes to their appointment history. This could involve editing details of past appointments, such as rescheduling or adding notes.</li>
                  <li><strong>Ease of Tracking:</strong> The platform makes it easy for users to keep track of their scheduled appointments. This might involve providing a clear overview of upcoming appointments, reminders, and notifications.</li>
                  <li><strong>Reduced Concerns:</strong> Users can manage their appointments without worry, implying that the platform provides reliability and reassurance in managing appointments effectively. This could include features like automated reminders, confirmation emails, or easy rescheduling options.</li>
              </ul>
          </Description>
        </div>
      );
  }
}

export default AppointmentHistoryDetail;