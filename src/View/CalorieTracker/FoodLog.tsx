import React, { FunctionComponent, useCallback, useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { NavLink, useNavigate } from "react-router-dom";
import Divcard from "./components/Divcard";
import Divcard1 from "./components/Divcard1";
import "../../Assets/styles/FoodLog.css";
import icon1 from '../../Assets/Images/icon-1.png';
import icon2 from '../../Assets/Images/icon-2.png';
import apple from '../../Assets/Images/bitten-apple@2x.png';
import pie from '../../Assets/Images/svgjsg2327.png';
import del from '../../Assets/Images/delete1.png';
import edit from '../../Assets/Images/edit-square1.png';
import muscle from '../../Assets/Images/muscle@2x.png'
import calendar3 from '../../Assets/Images/calendar3.png';


const FoodLog: FunctionComponent = () => {
  const [
    currentDate,
    setCurrentDate,
  ] = useState<Date>(new Date);

  const [
    breakfast,
    setBreakfast,
  ] = useState<{name:string, calorie : string, fat:string,protein:string,carbs:string}[]>([]);
  const [newBreakfastEntry, setNewBreakfastEntry] = useState<{ name: string; calorie: string; fat: string; protein: string; carbs: string; }>({ name: "", calorie: "", fat: "", protein: "", carbs: "" });

  const addNewItemB = () => {
    setBreakfast(prevBreakfast => [...prevBreakfast, newBreakfastEntry]);
    setNewBreakfastEntry({ name: "", calorie: "", fat: "", protein: "", carbs: "" }); // Reset newLunchEntry state
  };

  const [
    lunch,
    setLunch,
  ] = useState<{name:string, calorie : string, fat:string,protein:string,carbs:string}[]>([]);
  const [newLunchEntry, setNewLunchEntry] = useState<{ name: string; calorie: string; fat: string; protein: string; carbs: string; }>({ name: "", calorie: "", fat: "", protein: "", carbs: "" });

  const addNewItemL = () => {
    setLunch(prevLunch => [...prevLunch, newLunchEntry]);
    setNewLunchEntry({ name: "", calorie: "", fat: "", protein: "", carbs: "" }); // Reset newLunchEntry state
  };

  const [
    dinner,
    setDinner,
  ] = useState<{name:string, calorie : string, fat:string,protein:string,carbs:string}[]>([]);
  const [newDinnerEntry, setNewDinnerEntry] = useState<{ name: string; calorie: string; fat: string; protein: string; carbs: string; }>({ name: "", calorie: "", fat: "", protein: "", carbs: "" });

  const addNewItemD = () => {
    setDinner(prevDinner => [...prevDinner, newDinnerEntry]);
    setNewDinnerEntry({ name: "", calorie: "", fat: "", protein: "", carbs: "" }); // Reset newLunchEntry state
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="food-log1">
      <main className="main-branch">
        <div className="nav21">
          <NavLink to='/diet-dashboard'>

          <div
            className="iri-dashboard-2-line-container"
            >
            <div className="iri-dashboard-2-line3">
              <img className="icon4" alt="" src={icon1} />
            </div>
            <div className="dashboard-wrapper">
              <div className="dashboard1">Dashboard</div>
            </div>
          </div>
            </NavLink>
          <div className="rectangle-group">
            <div className="frame-item" />
            <div className="button-2">
              <div className="iri-dashboard-2-line4">
                <div className="before1">
                  <div className="icon5">
                    <img
                      className="bitten-apple-icon1"
                      loading="lazy"
                      alt=""
                      src={apple}
                    />
                  </div>
                </div>
              </div>
              <div className="food-log2">Food Log</div>
            </div>
          </div>
            <NavLink to='/diet-exerciseLog'>
          <div className="group-div" >

            <div className="iri-dashboard-2-line5">
              <img className="icon6" alt="" src={icon2} />
            </div>
            <div className="exercise-log-wrapper">
              <div className="exercise-log1">Exercise Log</div>
            </div>
          </div>
            </NavLink>
        </div>
        <section className="trunk-cluster">
          <div className="branch-hub">
            <div className="sibling-hub">
              <div className="frame-parent2">
                <div className="frame-parent3">
                  <div className="divcard-parent">
                    <Divcard
                      propFlex="unset"
                      propMinWidth="unset"
                      propAlignSelf="stretch"
                      propAlignSelf1="unset"
                      propWidth="48px"
                    />
                    <div className="divcard-wrapper">
                      <Divcard1
                        cALORIESBURNT="CALORIES GAINED"
                        prop="3,568 "
                        group2={muscle}
                        propMinWidth="unset"
                        propPadding="unset"
                        propBackgroundColor="rgba(0, 142, 205, 0.24)"
                        propHeight="unset"
                        propHeight1="40px"
                        propWidth="42px"
                      />
                    </div>
                  </div>
                  <div className="divcard1">
                    <div className="todays-calorie-breakdown-parent">
                      <div className="todays-calorie-breakdown">
                        TODAY’S CALORIE BREAKDOWN
                      </div>
                      <div className="svgjsg2327-wrapper">
                        <img
                          className="svgjsg2327-icon"
                          loading="lazy"
                          alt=""
                          src={pie}
                        />
                      </div>
                    </div>
                    <div className="divcard-inner">
                      <div className="frame-parent4">
                        <div className="frame-parent5">
                          <div className="rectangle-wrapper">
                            <div className="frame-inner" />
                          </div>
                          <div className="fat">Fat</div>
                        </div>
                        <div className="frame-parent6">
                          <div className="rectangle-container">
                            <div className="rectangle-div" />
                          </div>
                          <div className="protein">PROTEIN</div>
                        </div>
                        <div className="frame-parent7">
                          <div className="rectangle-frame">
                            <div className="frame-child1" />
                          </div>
                          <div className="carbs">CARBS</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divcard-group">
                  

                  {/* Breakfast */}
                  <form className="divcard3">
                    <div className="divcard-header3">
                      <div className="lunch">BREAKFAST</div>
                    </div>
                    <div className="divtable-responsive1">
                      <div className="table1">
                        <div className="header-row1">
                          <div className="cell6">
                            <div className="calorie1">NAME</div>
                          </div>
                          <div className="cell6">
                            <div className="calorie1">CALORIE</div>
                          </div>
                          <div className="cell7">
                            <div className="fat2">FAT</div>
                          </div>
                          <div className="cell7">
                            <div className="fat2">PROTEIN</div>
                          </div><div className="cell7">
                            <div className="fat2">CARBS</div>
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
                            value={newBreakfastEntry.name}
                            onChange={(e) => setNewBreakfastEntry({ ...newBreakfastEntry, name: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter calorie"
                            value={newBreakfastEntry.calorie}
                            onChange={(e) => setNewBreakfastEntry({ ...newBreakfastEntry, calorie: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter fat"
                            value={newBreakfastEntry.fat}
                            onChange={(e) => setNewBreakfastEntry({ ...newBreakfastEntry, fat: e.target.value })}
                          />
                        </div><div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter protein"
                            value={newBreakfastEntry.protein}
                            onChange={(e) => setNewBreakfastEntry({ ...newBreakfastEntry, protein: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input 
                            className="link-vz21072"
                            placeholder="Enter carbs"
                            value={newBreakfastEntry.carbs}
                            onChange={(e) => setNewBreakfastEntry({ ...newBreakfastEntry, carbs: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="heading-5-container">
                        <button className="heading-55" type="button" onClick={addNewItemB}>
                          <div className="add-item1">ADD ITEM</div>
                        </button>
                      </div>
                    </div>
                    {breakfast.map((item, index) => (
                      <div className="body3" key={index}>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.name}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.calorie}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.fat}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.protein}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.carbs}</div>
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
                  </form>
                  

                  {/* Lunch */}
                  <form className="divcard3">
                    <div className="divcard-header3">
                      <div className="lunch">LUNCH</div>
                    </div>
                    <div className="divtable-responsive1">
                      <div className="table1">
                        <div className="header-row1">
                          <div className="cell6">
                            <div className="calorie1">NAME</div>
                          </div>
                          <div className="cell6">
                            <div className="calorie1">CALORIE</div>
                          </div>
                          <div className="cell7">
                            <div className="fat2">FAT</div>
                          </div>
                          <div className="cell7">
                            <div className="fat2">PROTEIN</div>
                          </div><div className="cell7">
                            <div className="fat2">CARBS</div>
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
                            value={newLunchEntry.name}
                            onChange={(e) => setNewLunchEntry({ ...newLunchEntry, name: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter calorie"
                            value={newLunchEntry.calorie}
                            onChange={(e) => setNewLunchEntry({ ...newLunchEntry, calorie: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter fat"
                            value={newLunchEntry.fat}
                            onChange={(e) => setNewLunchEntry({ ...newLunchEntry, fat: e.target.value })}
                          />
                        </div><div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter protein"
                            value={newLunchEntry.protein}
                            onChange={(e) => setNewLunchEntry({ ...newLunchEntry, protein: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input 
                            className="link-vz21072"
                            placeholder="Enter carbs"
                            value={newLunchEntry.carbs}
                            onChange={(e) => setNewLunchEntry({ ...newLunchEntry, carbs: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="heading-5-container">
                        <button className="heading-55" type="button" onClick={addNewItemL}>
                          <div className="add-item1">ADD ITEM</div>
                        </button>
                      </div>
                    </div>
                    {lunch.map((item, index) => (
                      <div className="body3" key={index}>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.name}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.calorie}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.fat}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.protein}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.carbs}</div>
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
                  </form>
                  

                  {/* Dinner */}
                  <form className="divcard3">
                    <div className="divcard-header3">
                      <div className="lunch">DINNER</div>
                    </div>
                    <div className="divtable-responsive1">
                      <div className="table1">
                        <div className="header-row1">
                          <div className="cell6">
                            <div className="calorie1">NAME</div>
                          </div>
                          <div className="cell6">
                            <div className="calorie1">CALORIE</div>
                          </div>
                          <div className="cell7">
                            <div className="fat2">FAT</div>
                          </div>
                          <div className="cell7">
                            <div className="fat2">PROTEIN</div>
                          </div>
                          <div className="cell7">
                            <div className="fat2">CARBS</div>
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
                            value={newDinnerEntry.name}
                            onChange={(e) => setNewDinnerEntry({ ...newDinnerEntry, name: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter calorie"
                            value={newDinnerEntry.calorie}
                            onChange={(e) => setNewDinnerEntry({ ...newDinnerEntry, calorie: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter fat"
                            value={newDinnerEntry.fat}
                            onChange={(e) => setNewDinnerEntry({ ...newDinnerEntry, fat: e.target.value })}
                          />
                        </div><div className="link-vz2107-frame">
                          <input
                            className="link-vz21072"
                            placeholder="Enter protein"
                            value={newDinnerEntry.protein}
                            onChange={(e) => setNewDinnerEntry({ ...newDinnerEntry, protein: e.target.value })}
                          />
                        </div>
                        <div className="link-vz2107-frame">
                          <input 
                            className="link-vz21072"
                            placeholder="Enter carbs"
                            value={newDinnerEntry.carbs}
                            onChange={(e) => setNewDinnerEntry({ ...newDinnerEntry, carbs: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="heading-5-container">
                        <button className="heading-55" type="button" onClick={addNewItemD}>
                          <div className="add-item1">ADD ITEM</div>
                        </button>
                      </div>
                    </div>
                    {dinner?.map((item, index) => (
                      <div className="body3" key={index}>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.name}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.calorie}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.fat}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.protein}</div>
                        </div>
                        <div className="link-vz2107-wrapper1">
                          <div className="link-vz21073">{item.carbs}</div>
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
                  </form>
                  
                </div>
              </div>
            </div>
            <div className="calendar-parent">
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
            </div>
          </div>
        </section>
      </main>
    </div>
    </LocalizationProvider>
  );
};

export default FoodLog;
