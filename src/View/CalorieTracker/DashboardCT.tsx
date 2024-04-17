import React, { FunctionComponent, useState, useCallback } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { NavLink, useNavigate } from "react-router-dom";
import Divcard1 from "./components/Divcard1";
import Divcard from "./components/Divcard";
import "../../Assets/styles/DashboardCT.css";
import icon1 from '../../Assets/Images/icon-1.png';
import icon2 from '../../Assets/Images/icon-2.png';
import apple from '../../Assets/Images/bitten-apple@2x.png';
import burnt from '../../Assets/Images/group-2.png';
import gain from '../../Assets/Images/muscle@2x.png';
import calendar from '../../Assets/Images/vector-2.png';
import calendar3 from '../../Assets/Images/calendar3.png';
import g1 from '../../Assets/Images/svgjsg2239.png';
import g2 from '../../Assets/Images/svgjsg2234@2x.png';
import g3 from '../../Assets/Images/svgjsg2205@2x.png';
import g4 from '../../Assets/Images/svgjsg2199@2x.png';

const DashboardCT: FunctionComponent = () => {
  const [
    divcardHeaderDateTimePickerValue,
    setDivcardHeaderDateTimePickerValue,
  ] = useState(null); 
  const [
    currentDate,
    setCurrentDate,
  ] = useState<Date>(new Date);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="dashboard-ct">
        {/* <Header /> */}
        <div className="assignment-statement">
          <div className="nav2">
            {/* <img className="header-icon" alt="" src="../Assets/Images.header.png" /> */}
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="iri-dashboard-2-line">
                <img className="icon" loading="lazy" alt="" src={icon1} />
              </div>
              <div className="instance-creation">
                <div className="dashboard">Dashboard</div>
              </div>
            </div>
            <NavLink to='/diet-foodLog'>
            <div
              className="iri-dashboard-2-line-parent"
            >

              <div className="iri-dashboard-2-line1">
                <div className="icon1">
                  <img
                    className="bitten-apple-icon"
                    loading="lazy"
                    alt=""
                    src={apple}
                    />
                </div>
              </div>
              <div className="abstract-class">
                <div className="food-log">Food Log</div>
              </div>
            </div>
            </NavLink>
            <NavLink to='/diet-exerciseLog'>
            <div
              className="iri-dashboard-2-line-group"
            >
              <div className="iri-dashboard-2-line2">
                <img
                  className="icon2"
                  loading="lazy"
                  alt=""
                  src={icon2}
                />
              </div>
              <div className="connected-components">
                <div className="exercise-log">Exercise Log</div>
              </div>
            </div>
        </NavLink>
          </div>
        </div>
        <main className="dashboard-ct-inner">
          <section className="frame-parent">
            <div className="frame-group">
              <div className="frame-container">
                <div className="good-morning-nithish-parent">
                  <div className="good-morning-nithish">
                    Good Morning, Nithish!
                  </div>
                  <div className="heres-whats-happening">
                    Here's what's happening with your body today.
                  </div>
                </div>
                <div className="logic-branch">
                  <Divcard1
                    cALORIESBURNT="CALORIES BURNT "
                    prop="2,894 "
                    group2={burnt}
                  />
                  <Divcard1
                    cALORIESBURNT="CALORIES GAINED"
                    prop="3,568 "
                    group2={gain}
                    propMinWidth="234px"
                    propPadding="unset"
                    propBackgroundColor="rgba(0, 142, 205, 0.24)"
                    propHeight="unset"
                    propHeight1="40px"
                    propWidth="42px"
                  />
                  <Divcard />
                </div>
              </div>
              <div className="divcard">
                <div className="divcard-header">
                      <div>
                        <p className="progress-title">PROGRESS STATISTICS</p>
                      </div>
                    <div>
                      <DatePicker
                        value={divcardHeaderDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDivcardHeaderDateTimePickerValue(newValue);
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
                            textAlign: "right",
                            fontWeight: "600",
                          },
                          "& .MuiInputBase-root": {
                            backgroundColor: "#fff",
                            height: 56.60000000000002,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: false,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                            placeholder: "Select Date",
                          },
                          openPickerIcon: {
                            component: () => (
                              <img width="15px" height="15px" src={calendar} />
                            ),
                          },
                        }}
                        />
                    </div>
                </div>
                <div className="divcard-header-parent">
                  <div className="divcard-header1">
                    <div className="divrow">
                      <div className="divcol-6">
                        <div className="divp-3">
                          <div className="heading-5">
                            <div className="div">12,585</div>
                          </div>
                          <div className="ptext-muted">
                            <div className="calories-burnt">Calories Burnt</div>
                          </div>
                        </div>
                      </div>
                      <div className="divcol-61">
                        <div className="divp-31">
                          <div className="heading-51">
                            <div className="div1">16,568</div>
                          </div>
                          <div className="ptext-muted1">
                            <div className="calories-gained">
                              Calories Gained
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divcol-61">
                        <div className="divp-31">
                          <div className="heading-51">
                            <div className="div1">983</div>
                          </div>
                          <div className="ptext-muted1">
                            <div className="calories-gained">
                              Net Calories
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divcol-63">
                        <div className="divp-33">
                          <div className="heading-53">
                            <div className="div3">{`+ 18.92% `}</div>
                          </div>
                          <div className="ptext-muted3">
                            <div className="performance-stats">
                              Performance Stats
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divcustomer-impression-charts">
                    <div className="svgjsrect2195-parent">
                      <div className="svgjstext2300">120.00</div>
                      <div className="svgjstext2303">90.00</div>
                    </div>
                    <div className="svgjstext2306-wrapper">
                      <div className="svgjstext2306">60.00</div>
                    </div>
                    <div className="svgjstext2309-wrapper">
                      <div className="svgjstext2309">30.00</div>
                    </div>
                    <div className="divcustomer-impression-charts-inner">
                      <div className="frame-div">
                        <div className="frame-parent1">
                          <div className="svgjsg2199-parent">
                            <img
                              className="svgjsg2199-icon"
                              alt=""
                              src={g4}
                            />
                            <img
                              className="svgjsg2205-icon"
                              alt=""
                              src={g3}
                            />
                          </div>
                          <div className="svgjsg2234-parent">
                            <img
                              className="svgjsg2234-icon"
                              alt=""
                              src={g2}
                            />
                            <div className="svgjsline2257-parent">
                              <img
                                className="svgjsline2257-icon"
                                loading="lazy"
                                alt=""
                              />
                              <img
                                className="svgjsline2258-icon"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                            <div className="image-processor-wrapper">
                              <div className="image-processor">
                                <img
                                  className="svgjsline2196-icon"
                                  loading="lazy"
                                  alt=""
                                />
                                <div className="value-transformer">
                                  <img
                                    className="svgjsg2239-icon"
                                    alt=""
                                    src={g1}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="error-handler">
                          <div className="link-connector">0.00</div>
                          <div className="input-field">
                            <div className="progress-bar">
                              <div className="svgjstext2262">01/24</div>
                              <div className="svgjstext2265">02/24</div>
                              <div className="svgjstext2268">03/24</div>
                              <div className="svgjstext2271">04/24</div>
                              <div className="svgjstext2274">05/24</div>
                              <div className="svgjstext2277">06/24</div>
                              <div className="svgjstext2280">07/24</div>
                              <div className="svgjstext2283">08/24</div>
                              <div className="svgjstext2286-wrapper">
                                <div className="svgjstext2286">09/24</div>
                              </div>
                              <div className="svgjstext2289-wrapper">
                                <div className="svgjstext2289">10/24</div>
                              </div>
                              <div className="svgjstext2292-wrapper">
                                <div className="svgjstext2292">11/24</div>
                              </div>
                              <div className="svgjstext2295">12/24</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
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
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default DashboardCT;
