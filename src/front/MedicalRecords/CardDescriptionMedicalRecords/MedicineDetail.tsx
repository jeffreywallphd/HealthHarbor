import React, { Component } from "react";
import Description from "../../GenericComponents/Description";

class  MedicineDetail extends Component {
  render() {
    return (
        <div>
          <Description
            title="Welcome to Appointment History Detail"
            backgroundImage="">
            <div>
              <ul>
                  <li><strong>Comprehensive Medical Data Access:</strong> The platform offers users the ability to access all their active medical needs conveniently. This includes a wide range of medical conditions and requirements, ensuring that users have a holistic view of their healthcare needs in one accessible location.</li>
                  <li><strong>Integration of Allergies and Medical Conditions:</strong> Users can view and manage medical needs associated with allergies as well as other conditions like diabetes and cholesterol. This integration allows users to track multiple health concerns simultaneously, facilitating better management and coordination of care.</li>
                  <li><strong>Instant Accessibility:</strong> Users can access their medical data quickly and easily, whether through a mobile app, website, or other digital interface. This instant access ensures that users have their important medical information readily available whenever they need it, whether for personal reference or sharing with healthcare providers.</li>
                  <li><strong>Personalized Healthcare Management:</strong> By having access to their active medical needs, users can take a more proactive role in managing their health. They can monitor their conditions, track relevant metrics (such as blood sugar levels for diabetes or cholesterol levels), and make informed decisions about their healthcare in collaboration with their healthcare providers.</li>
              </ul>
            </div>
          </Description>
        </div>
      );
  }
}

export default MedicineDetail;
