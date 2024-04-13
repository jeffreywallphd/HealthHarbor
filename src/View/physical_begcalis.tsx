import React, { Component } from "react";
import Squats from "../svr/physical_fitness/fitness_images/squats.png";
import Lunges from "../svr/physical_fitness/fitness_images/lunges.png";
import Planks from "../svr/physical_fitness/fitness_images/planks.png";
import MountainClimbers from "../svr/physical_fitness/fitness_images/mountainclimbers.png";
import "../svr/physical_fitness/css_files/begcalis.css";

class BegCalis extends Component {
  render() {
    return (
      <div>
        <h1>Calisthenics exercises for beginners</h1>
        <div className="begcalis-container">
          {/* Exercise 1: Push-Ups */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Push-Ups Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Push-Ups</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Start in a plank position with hands shoulder-width apart.</li>
                <li><strong>Step 2:</strong> Lower your body by bending your elbows.</li>
                <li><strong>Step 3:</strong> Push back up to the starting position.</li>
                <li><strong>Step 4:</strong> Keep your core engaged and maintain a straight line from head to heels.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 2: Pull-Ups */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Pull-Ups Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Pull-Ups</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Hang from a pull-up bar with palms facing away.</li>
                <li><strong>Step 2:</strong> Pull your body upward until your chin clears the bar.</li>
                <li><strong>Step 3:</strong> Lower yourself back down with control.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 3: Dips */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Dips Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Dips</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Use parallel bars or sturdy surfaces.</li>
                <li><strong>Step 2:</strong> Lower your body by bending your elbows.</li>
                <li><strong>Step 3:</strong> Push back up to the starting position.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 4: Squats */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src={Squats} alt="Squats Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Squats</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Stand with feet shoulder-width apart.</li>
                <li><strong>Step 2:</strong> Bend your knees and hips, lowering your body.</li>
                <li><strong>Step 3:</strong> Keep your chest up and weight on your heels.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 5: Lunges */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src={Lunges} alt="Lunges Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Lunges</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Step forward with one leg and lower your body.</li>
                <li><strong>Step 2:</strong> Push back to the starting position.</li>
                <li><strong>Step 3:</strong> Alternate legs.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 6: Planks */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src={Planks} alt="Planks Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Planks</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Start in a push-up position but rest on your forearms.</li>
                <li><strong>Step 2:</strong> Keep your body straight and hold the position.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 7: Mountain Climbers */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src={MountainClimbers} alt="Mountain Climbers Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Mountain Climbers</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Begin in a plank position.</li>
                <li><strong>Step 2:</strong> Alternate bringing your knees toward your chest.</li>
              </ul>
            </div>
          </div>

                    {/* Exercise 8: Burpees */}
                    <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Burpees Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Burpees</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Start standing, then drop into a squat.</li>
                <li><strong>Step 2:</strong> Kick your feet back into a plank.</li>
                <li><strong>Step 3:</strong> Jump back up to standing.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 9: Leg Raises */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Leg Raises Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Leg Raises</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Lie on your back with legs straight.</li>
                <li><strong>Step 2:</strong> Lift your legs toward the ceiling, then lower them.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 10: Hollow Body Holds */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Hollow Body Holds Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Hollow Body Holds</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Lie on your back, arms extended overhead.</li>
                <li><strong>Step 2:</strong> Lift your head, shoulders, and legs off the ground.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 11: Handstand Push-Ups */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Handstand Push-Ups Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Handstand Push-Ups</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Kick up into a handstand against a wall.</li>
                <li><strong>Step 2:</strong> Lower your head toward the ground, then push back up.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 12: Pistol Squats */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Pistol Squats Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Pistol Squats</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Balance on one leg and lower into a single-leg squat.</li>
                <li><strong>Step 2:</strong> Push back up to standing.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 13: Supermans */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Supermans Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Supermans</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Lie face down, arms extended.</li>
                <li><strong>Step 2:</strong> Lift your arms, chest, and legs off the ground.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 14: Russian Twists */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Russian Twists Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Russian Twists</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Sit on the ground, knees bent, feet lifted.</li>
                <li><strong>Step 2:</strong> Twist your torso side to side, touching the ground with your hands.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 15: Box Jumps */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Box Jumps Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Box Jumps</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Find a sturdy box or platform.</li>
                <li><strong>Step 2:</strong> Jump onto it from a standing position.</li>
              </ul>
            </div>
          </div>
           
                     {/* Exercise 16: Jumping Jacks */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Jumping Jacks Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Jumping Jacks</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Stand with feet together and arms at your sides.</li>
                <li><strong>Step 2:</strong> Jump while spreading your legs and raising your arms above your head.</li>
                <li><strong>Step 3:</strong> Return to the starting position by jumping back to feet together and lowering your arms.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 17: Bicycle Crunches */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Bicycle Crunches Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Bicycle Crunches</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Lie on your back with your hands behind your head.</li>
                <li><strong>Step 2:</strong> Lift your knees to a 90-degree angle and perform a pedaling motion with your legs.</li>
                <li><strong>Step 3:</strong> As you pedal, twist your torso and bring your opposite elbow towards your knee.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 18: High Knees */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="High Knees Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>High Knees</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Stand with feet hip-width apart.</li>
                <li><strong>Step 2:</strong> Drive one knee towards your chest, then quickly switch legs, keeping a fast pace.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 19: Tricep Dips */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Tricep Dips Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Tricep Dips</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Sit on a stable surface with your hands placed behind you, fingers pointing towards your body.</li>
                <li><strong>Step 2:</strong> Lift your hips off the ground, supporting your weight with your hands and feet.</li>
                <li><strong>Step 3:</strong> Bend your elbows to lower your body towards the ground, then push back up to the starting position.</li>
              </ul>
            </div>
          </div>

          {/* Exercise 20: Flutter Kicks */}
          <div className="begcalis-step">
            <div className="begcalis-step-img">
              <img src="" alt="Flutter Kicks Image" />
            </div>
            <div className="begcalis-step-text">
              <h2>Flutter Kicks</h2>
              <ul className="begcalis-ul">
                <li><strong>Step 1:</strong> Lie on your back with your hands under your glutes.</li>
                <li><strong>Step 2:</strong> Lift your legs a few inches off the ground and alternately kick them up and down.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BegCalis;


          


