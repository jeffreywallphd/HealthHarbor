import React, { Component } from "react";
import Cardio from "../svr/physical_fitness/fitness_images/cardio.png";
import Calisthenics from "../svr/physical_fitness/fitness_images/calisthenics.png";
import Gym from "../svr/physical_fitness/fitness_images/gym.png"
import Yoga from "../svr/physical_fitness/fitness_images/yoga.png";
import Ymat from "../svr/physical_fitness/fitness_images/y_matt.png";
import AbsYoga from "../svr/physical_fitness/fitness_images/absyog.png"
import AbsCard from "../svr/physical_fitness/fitness_images/abscardio.png"
import AbsCalis from "../svr/physical_fitness/fitness_images/abscalis.png"
import "../svr/physical_fitness/css_files/physical_fitness_getting_started.css";
import { NavLink } from "react-router-dom";


class GettingStarted extends Component {
  render() {
    return (
      <>
        <div className="gettingstarted-header-container">
          <h1>The journey of a thousand miles, begins with a single step!</h1>
        </div>
    
        <div className="gettingstarted-marquee-container">
          <div className="gettingstarted-marquee"><b>---Take yours Today---</b></div>
        </div>
    
        <div className="gettingstarted-image-container gettingstarted-container">
          <div className="gettingstarted-image-wrapper">
            <img src={Yoga} alt="Yoga" />
            <div className="gettingstarted-overlay">
              <p>Yoga</p>
            </div>
          </div>
          <div className="gettingstarted-image-wrapper">
            <img src={Gym} alt="Gym" />
            <div className="gettingstarted-overlay">
              <p>Gym</p>
            </div>
          </div>
          <div className="gettingstarted-image-wrapper">
            <img src={Calisthenics} alt="Calisthenics" />
            <div className="gettingstarted-overlay">
              <p>Calisthenics</p>
            </div>
          </div>
          <div className="gettingstarted-image-wrapper">
            <img src={Cardio} alt="Cardio" />
            <div className="gettingstarted-overlay">
              <p>Cardio</p>
            </div>
          </div>
        </div>
        
        <div className="gettingstarted-text-container gettingstarted-container">
          <h2>Hey there!</h2>
          <p>
            🌟 Welcome aboard! This is the perfect moment to kickstart your fitness journey. <br />
            🏋️‍♀️ Let's dive right in and tackle those fitness goals head-on! 🚀 <br />
            This is a judgment-free zone, so feel free to define what fitness means to you. 
            It could be shedding a few pounds, trying out some bed workouts, or simply starting your day with a brisk walk. <br />
            Whatever floats your boat, we've got your back! Let's dive into each of these sections and get you all set up! 🎉<br />
          </p>
        </div>
    
        {/* Yoga Container */}
        <div className="gettingstarted-yoga-container gettingstarted-container">
          <h2><b><u>YOGA</u></b><br /></h2>
          <p><em>(noun)</em> . /ˈyōɡə/<br />
          </p><p>
            Yoga, derived from the Sanskrit word "Yuj" meaning union, is often interpreted as a means of achieving harmony with God, body, or mind. Regardless of the interpretation, it serves as an excellent starting point for those aiming to improve fitness.<br /><br /><br />
            Engaging in yoga fosters a calm and centered mind, making it universally beneficial. Whether one is considering its suitability, the answer is unequivocally affirmative. Over time, yoga has diversified, offering numerous variations tailored to different needs.<br /><br /><br />
            For instance, power yoga targets calorie burning, while traditional yoga emphasizes flexibility. Certain poses are also designed to alleviate specific pains. However, individuals with medical histories or physical conditions should seek professional advice before getting on with it.<br /><br /><br />
            Despite its vastness, efforts are made to make yoga accessible to all. Even small amounts of practice contribute to progress, underscoring its inclusivity and adaptability.<br /><br />
          </p>
          <div className="gettingstarted-image-wrapper">
            <img src={AbsYoga} alt="Yoga Mat" />
            <div className="gettingstarted-overlay">
              <p>Yoga</p>
            </div>
          </div>
        </div>
    
        <div className="gettingstarted-button-container">
          <button className="gettingstarted-btn"><span>Take me to yoga workouts</span></button>
        </div>
    
        {/* Cardio Container */}
        <div className="gettingstarted-cardio-container gettingstarted-container">
          <h2><b><u>CARDIO</u></b><br /></h2>
          <p><em>(noun)</em> . /ˈkärdēō/<br />
          </p><p>
            Cardio, short for cardiovascular exercise, refers to any physical activity that raises your heart rate and improves oxygen circulation throughout the body. These exercises are essential for enhancing cardiovascular health and burning calories.<br /><br /><br />
            Engaging in regular cardio workouts can have numerous benefits, including improved heart health, increased endurance, better mood, and weight management.<br /><br /><br />
            Popular forms of cardio exercises include running, cycling, swimming, and brisk walking. It's recommended to perform at least 150 minutes of moderate-intensity cardio exercises per week for optimal health benefits.<br /><br /><br />
            Whether you're a beginner or a seasoned athlete, incorporating cardio into your fitness routine can help you achieve your health and fitness goals.<br /><br />
          </p>
          <div className="gettingstarted-image-wrapper">
            <img src={AbsCard} alt="Cardio" />
            <div className="gettingstarted-overlay">
              <p>Cardio</p>
            </div>
          </div>
        </div>
    
        <div className="gettingstarted-button-container">
          <button className="gettingstarted-btn"><span>Take me to cardio workouts</span></button>
        </div>
    
        {/* Calisthenics Container */}
        <div className="gettingstarted-calisthenics-container gettingstarted-container">
          <h2><b><u>CALISTHENICS</u></b><br /></h2>
          <p><em>(noun)</em> . /ˈkaləsˌTHeniks/<br />
          </p><p>
            Calisthenics refers to a form of exercise that consists of a variety of movements using only the body weight for resistance. These exercises focus on strength, flexibility, and body control.<br /><br /><br />
            Common calisthenics exercises include push-ups, pull-ups, squats, lunges, and planks. These exercises can be performed anywhere, making them accessible to people of all fitness levels.<br /><br /><br />
            Calisthenics workouts are beneficial for building muscle strength, improving joint mobility, and enhancing overall fitness. Additionally, they can be modified to suit individual fitness goals and preferences.<br /><br /><br />
            Whether you're looking to build muscle, improve flexibility, or increase endurance, calisthenics can be an effective and versatile form of exercise.<br /><br />
          </p>
          <div className="gettingstarted-image-wrapper">
            <img src={AbsCalis} alt="Calisthenics" />
            <div className="gettingstarted-overlay">
              <p>Calisthenics</p>
            </div>
          </div>
        </div>
    
        <div className="gettingstarted-button-container">
          <button className="gettingstarted-btn"><NavLink to="/physicalbegcalis"><span>Take me to calisthenics workouts</span></NavLink></button>  
        </div>

        {/* Gym Container */}
        <div className="gettingstarted-gym-container gettingstarted-container">
          <h2><b><u>GYM</u></b><br /></h2>
          <p><em>(noun)</em> . /ˈjim/<br />
          </p><p>
            The gym, short for gymnasium, is a dedicated space equipped with various exercise machines, free weights, and fitness equipment. It provides individuals with the opportunity to engage in structured workouts and training programs.<br /><br /><br />
            Gym exercises encompass a wide range of activities, including strength training, resistance training, cardiovascular exercises, and functional training. These workouts aim to improve strength, endurance, flexibility, and overall fitness.<br /><br /><br />
            Joining a gym offers access to professional trainers, group fitness classes, and specialized equipment, allowing individuals to customize their workouts based on their fitness goals and preferences.<br /><br /><br />
            Whether you're a beginner or an experienced fitness enthusiast, the gym provides a supportive environment for achieving your health and fitness objectives.<br /><br />
          </p>
          <div className="gettingstarted-image-wrapper">
            <img src={Gym} alt="Gym" />
            <div className="gettingstarted-overlay">
              <p>Gym</p>
            </div>
          </div>
        </div>
    
        <div className="gettingstarted-button-container">
          <button className="gettingstarted-btn"><span>Take me to gym workouts</span></button>
        </div>
      </div>
    );
  }
}

export default GettingStarted;
