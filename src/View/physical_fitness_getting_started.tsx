import React, { Component } from "react";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png"
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import Ymat from "../svr/physical_fitness/fitness_images/y_matt.png";
import "../svr/physical_fitness/css_files/physical_fitness_getting_started.css";

class GettingStarted extends Component {
  render() {
    return (
      <div className="gettingStarted">
        <div className="header-container">
        <h1>The journey of a thousand miles, begins with a single step!</h1>
      </div>

    <div className="marquee-container">
        <div className="marquee"><b>---Take yours Today---</b></div>
    </div>
    
    <div className="image-container">
        <div className="image-wrapper">
            <img src={Yoga} alt="Yoga"/>
            <div className="overlay">
                <p>Yoga</p>
            </div>
        </div>
        <div className="image-wrapper">
            <img src={Gym} alt="Image 2"/>
            <div className="overlay">
                <p>Gym</p>
            </div>
        </div>
        <div className="image-wrapper">
            <img src={Calisthenics} alt="Image 3"/>
            <div className="overlay">
                <p>Calisthenics</p>
            </div>
        </div>
        <div className="image-wrapper">
            <img src={Cardio} alt="Image 4"/>
            <div className="overlay">
                <p>Cardio</p>
            </div>
        </div>
    </div>
    
    <div className="text-container">
        <h2><em>Hey there!</em></h2>
        <p>
          🌟 Welcome aboard! This is the perfect moment to kickstart your fitness journey. <br/>
          🏋️‍♀️ Let's dive right in and tackle those fitness goals head-on! 🚀 <br/>
          This is a judgment-free zone, so feel free to define what fitness means to you. 
          It could be shedding a few pounds, trying out some bed workouts, or simply starting your day with a brisk walk. <br/>
          Whatever floats your boat, we've got your back! Let's dive into each of these sections and get you all set up! 🎉<br/>
        </p>
     
    </div>
    <div className="yoga-container">
        <h2><b><u>YOGA</u></b><br/></h2>
        <p><em>(noun)</em> . /ˈyōɡə/<br/> </p><p>
            Yoga, derived from the Sanskrit word "Yuj" meaning union, is often interpreted as a means of achieving harmony with God, body, or mind. Regardless of the interpretation, it serves as an excellent starting point for those aiming to improve fitness.<br/><br/><br/>
            Engaging in yoga fosters a calm and centered mind, making it universally beneficial. Whether one is considering its suitability, the answer is unequivocally affirmative. Over time, yoga has diversified, offering numerous variations tailored to different needs.<br/><br/><br/>
            For instance, power yoga targets calorie burning, while traditional yoga emphasizes flexibility. Certain poses are also designed to alleviate specific pains. However, individuals with medical histories or physical conditions should seek professional advice before getting on with it.<br/><br/><br/>
            Despite its vastness, efforts are made to make yoga accessible to all. Even small amounts of practice contribute to progress, underscoring its inclusivity and adaptability.<br/><br/>
            <b/><b/>
        </p>
    </div>

    <div className="image-text-container">
        <img src={Ymat} alt="Yoga Mat"/>
    </div>

    <div className="button-container">
        <button className="btn"><span>Take me to yoga workouts</span></button>
    </div>

      </div>
    );
  }
}

export default GettingStarted;