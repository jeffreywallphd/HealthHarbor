import React, { FunctionComponent, useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Divcard from "./components/Divcard";
import Divcard1 from "./components/Divcard1";
import "../../Assets/styles/ExerciseLog.css";
import icon1 from '../../Assets/Images/icon-1.png';
import icon2 from '../../Assets/Images/icon-2.png';
import apple from '../../Assets/Images/bitten-apple@2x.png';
import calendar from '../../Assets/Images/vector-3.png';
import del from '../../Assets/Images/delete1.png';
import edit from '../../Assets/Images/edit-square1.png';
import run from '../../Assets/Images/directions-run.png';
import sleep from '../../Assets/Images/sleep.png';
import group2 from '../../Assets/Images/group-2.png'
import calendar3 from '../../Assets/Images/calendar3.png';


const ExerciseLog: FunctionComponent = () => {

  const [
    currentDate,
    setCurrentDate,
  ] = useState<Date>(new Date);

  const [
    exercise,
    setExercise,
  ] = useState<{name:string, time : string, calories_lost:string}[]>([{ name: "CYCLING", time : "2 hrs", calories_lost:"600 kcal" },{ name: "WALKING", time : "1 hrs", calories_lost:"256 kcal" },{ name: "RUNNING", time : "0.5 hrs", calories_lost:"110 kcal" },{ name: "WEIGHT LIFTING", time : "2 hrs", calories_lost:"421 kcal" }]);

  const [newExerciseEntry, setNewExerciseEntry] = useState<{ name: string; time : string, calories_lost:string }>({ name: "", time : "", calories_lost:"" });

  const addNewItemL = () => {
    setExercise(prevExercise => [...prevExercise, newExerciseEntry]);
    setNewExerciseEntry({ name: "", time : "", calories_lost:""  }); // Reset newLunchEntry state
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

    <div className="exercise-log2">
      <section className="nav2-parent">
        <div className="nav22">
            <div className="branch-selector">
            <NavLink to='/diet-dashboard'>
            <div
              className="iri-dashboard-2-line-parent1"
            >
              <div className="iri-dashboard-2-line6">
                <img
                  className="icon8"
                  loading="lazy"
                  alt=""
                  src={icon1}
                  />
              </div>
              <div className="subtree-splitter">
                <div className="dashboard2">Dashboard</div>
              </div>
            </div>
            </NavLink>
          </div>
          <NavLink to='/diet-foodLog'>
          <div className="button-2-wrapper" >
            <div className="button-21">
              <div className="iri-dashboard-2-line7">
                <div className="before3">
                  <div className="icon9">
                    <img
                      className="bitten-apple-icon2"
                      loading="lazy"
                      alt=""
                      src={apple}
                    />
                  </div>
                </div>
              </div>
              <div className="food-log3">Food Log</div>
            </div>
          </div>
          </NavLink>
          <div className="rectangle-parent1">
            <div className="frame-child2" />
            <div className="iri-dashboard-2-line8">
              <img className="icon10" loading="lazy" alt="" src={icon2} />
            </div>
            <div className="exercise-log-container">
              <div className="exercise-log3">Exercise Log</div>
            </div>
          </div>
        </div>
        <div className="data-processor-wrapper">
          <div className="data-processor">
          <DatePicker
                        value={currentDate}
                        onChange={(newValue: any) => {
                          setCurrentDate(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "transparent",
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 1,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "transparent" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                          },
                          "& input::placeholder": {
                            textColor: "#878a99",
                            fontSize: 13,
                          },
                          input: {
                            color: "#878a99",
                            fontSize: 13,
                            textAlign: "center",
                            fontWeight: "600",
                          },
                          "& .MuiInputBase-root": {
                            backgroundColor: "#fff",
                            height: 40,
                            width:130,
                            gap: "",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: false,
                            // required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                            placeholder: "",
                          },
                          openPickerIcon: {
                            component: () => (
                              <img width="15px" height="15px" style={{marginRight:'20px'}} src={calendar3} />
                            ),
                          },
                        }}
                        />


            <div className="dropdown-menu">
              <div className="frame-parent12">
                <div className="divcard-container">
                  <Divcard
                    propFlex="1"
                    propMinWidth="203px"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                    propWidth="unset"
                  />
                  <Divcard1
                    cALORIESBURNT="CALORIES BURNT "
                    prop="2,894 "
                    group2={group2}
                    propMinWidth="203px"
                    propPadding="unset"
                    propBackgroundColor="rgba(11, 121, 51, 0.26)"
                    propHeight="unset"
                    propHeight1="36.3px"
                    propWidth="32.3px"
                  />
                </div>
                <div className="divcard-parent1">
                  <form className="divcard3 form-border-unset">
                    <div className="divcard-header3">
                      <div className="lunch">EXERCISE</div>
                    </div>
                    <div className="divtable-responsive1">
                      <div className="table1">
                        <div className="header-row1">
                          <div className="cell6">
                            <div className="calorie1">NAME</div>
                          </div>
                          <div className="cell6">
                            <div className="calorie1">TIME</div>
                          </div>
                          <div className="cell7">
                            <div className="fat2">CALORIES LOST</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="body-group">
                      <div className="body2">
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter name"
                            value={newExerciseEntry.name}
                            onChange={(e) => setNewExerciseEntry({ ...newExerciseEntry, name: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter time"
                            value={newExerciseEntry.time}
                            onChange={(e) => setNewExerciseEntry({ ...newExerciseEntry, time: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter calories lost"
                            value={newExerciseEntry.calories_lost}
                            onChange={(e) => setNewExerciseEntry({ ...newExerciseEntry, calories_lost: e.target.value })}
                          />
                        </div>
                      </div>

                      <div style={{width:"136px", justifyContent:"start", display:"flex"}} >
                      <div className="heading-5-container">
                        <button className="heading-55" type="button" onClick={addNewItemL}>
                          <div className="add-item1">ADD ITEM</div>
                        </button>
                      </div>
                    </div>
                    </div>
                    <div className="exercise-container">

                    {exercise.map((item, index) => (
                      <div className="body3" key={index}>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.name}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.time}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.calories_lost}</div>
                        </div>
                        <div className="delete-group">
                            <img
                              className="delete-icon1"
                              alt=""
                              src={del}
                            />
                            <div className="edit-square-container">
                              <img
                                className="edit-square-icon1"
                                alt=""
                                src={edit}
                                />
                            </div>
                        </div>
                      </div>
                    ))}
                        </div>
                  </form>
                  <div className="template-engine">
                    <div className="divcard6">
                      <div className="ptext-uppercase">
                        <div className="step-count">STEP COUNT</div>
                      </div>
                      <div className="divflex-shrink-0" />
                      <div className="divd-flex2">
                        <div className="heading-4-36894-wrapper">
                          <div className="heading-4-container">
                            <span className="heading-4-container1">
                              <span className="span">{`10,652 `}</span>
                              <span className="steps">steps</span>
                            </span>
                          </div>
                        </div>
                        <div className="link-view">View progress</div>
                        <button className="spanavatar-title">
                          <div className="ibx-shopping-bag" />
                          <img
                            className="directions-run-icon"
                            alt=""
                            src={run}
                          />
                        </button>
                        <div className="divavatar-sm" />
                      </div>
                    </div>
                    <div className="divcard7">
                      <div className="ptext-uppercase1">
                        <div className="sleep-time">SLEEP TIME</div>
                      </div>
                      <div className="divflex-shrink-01" />
                      <div className="divd-flex3">
                        <div className="heading-4-36894-container">
                          <div className="heading-4-container2">
                            <span className="heading-4-container3">
                              <span className="span1">{`6 `}</span>
                              <span className="hrs4">{`hrs `}</span>
                              <span className="span2">{`54 `}</span>
                              <span className="hrs5">{`hrs `}</span>
                            </span>
                          </div>
                        </div>
                        <div className="link-view1">View progress</div>
                        <button className="spanavatar-title1">
                          <img className="sleep-icon" alt="" src={sleep} />
                        </button>
                        <div className="divavatar-sm1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </LocalizationProvider>

  );
};

export default ExerciseLog;
