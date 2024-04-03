import React, { Component } from "react";
import Description from "../GenericComponents/Description";

class  InsuranceDetail extends Component {
  render() {
    return (
        <div>
          <Description
            title="Welcome to Insurance Detail"
            backgroundImage="">
            <div>
              <ul>
                  <li><strong>Insurance Data Update:</strong> Users are provided with a straightforward process to update their insurance information within the platform. This likely includes details such as insurance provider, policy number, and any relevant coverage information.</li>
                  <li><strong>Linking Appointments with Insurance Data:</strong> The platform allows users to associate their appointments with their insurance data. This linkage ensures that relevant insurance information is connected to each appointment, facilitating streamlined coordination between medical visits and insurance coverage.</li>
                  <li><strong>Handiness in Doctor Selection:</strong> When users schedule appointments, they can easily access their insurance data to assist in selecting healthcare providers. This feature might provide information on which doctors are in-network with the user's insurance plan, helping users make informed decisions to maximise their insurance benefits and minimise out-of-pocket expenses.</li>
                  <li><strong>Enhanced Appointment Tracking and Scheduling:</strong> By integrating insurance data into appointment tracking and scheduling, users gain a more comprehensive view of their healthcare management. They can efficiently manage appointments while considering insurance coverage, reducing the likelihood of confusion or unexpected costs.</li>
              </ul>
            </div>
          </Description>
        </div>
      );
  }
}

export default InsuranceDetail;