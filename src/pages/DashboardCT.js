import { useState, useCallback } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Divcard1 from "../components/Divcard1";
import Divcard from "../components/Divcard";

const DashboardCT = () => {
  const [
    divcardHeaderDateTimePickerValue,
    setDivcardHeaderDateTimePickerValue,
  ] = useState(null);
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/food-log");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/exercise-log");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[108.70000000000005px] box-border tracking-[normal] text-left text-base text-black font-raleway">
        <Header />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-7 box-border max-w-full">
          <div className="flex-1 flex flex-row items-end justify-start py-0 px-[89px] box-border relative gap-[11.5px] max-w-full mq800:flex-wrap mq800:pl-11 mq800:pr-11 mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden"
              alt=""
              src="/header.svg"
            />
            <div className="w-[148px] bg-ghostwhite flex flex-row items-start justify-start pt-[7.5px] px-2.5 pb-[2.5px] box-border z-[1]">
              <div className="h-12 w-[148px] relative bg-ghostwhite hidden" />
              <div className="h-[38px] w-[37px] relative min-w-[28px] z-[1]">
                <img
                  className="absolute top-[0px] left-[0px] w-[39px] h-[38px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/icon-1.svg"
                />
              </div>
              <div className="w-[86px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border">
                <div className="self-stretch h-[23px] relative font-medium inline-block shrink-0 z-[1]">
                  Dashboard
                </div>
              </div>
            </div>
            <div
              className="w-[129px] flex flex-row items-start justify-start pt-1.5 pb-[3px] pr-0.5 pl-0 box-border gap-[9px] cursor-pointer z-[1]"
              onClick={onGroupContainer1Click}
            >
              <div className="w-[33px] flex flex-row items-start justify-start py-0 px-0 box-border min-w-[28px]">
                <div className="h-[38px] w-12 relative overflow-hidden shrink-0 [debug_commit:f6aba90]">
                  <img
                    className="absolute top-[9px] left-[13px] w-[22px] h-[22px] object-contain"
                    loading="lazy"
                    alt=""
                    src="/bitten-apple@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                <div className="self-stretch relative font-medium">
                  Food Log
                </div>
              </div>
            </div>
            <div
              className="flex flex-row items-start justify-start pt-[5.5px] px-0 pb-[3.5px] cursor-pointer z-[1]"
              onClick={onGroupContainer2Click}
            >
              <div className="h-[38px] w-10 relative min-w-[28px] shrink-0 [debug_commit:f6aba90]">
                <img
                  className="absolute top-[0px] left-[0px] w-[39px] h-[38px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/icon-2.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[97px] shrink-0 [debug_commit:f6aba90]">
                  Exercise Log
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full">
          <section className="w-[1264px] flex flex-row flex-wrap items-start justify-start gap-[81.60000000000002px] max-w-full text-left text-base text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey font-raleway mq800:gap-[41px] mq450:gap-[20px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[41px] mq800:gap-[20px_41px]">
                <div className="flex flex-col items-start justify-start gap-[1px]">
                  <div className="relative leading-[20px] font-medium">
                    Good Morning, Nithish!
                  </div>
                  <div className="relative text-smi leading-[20px] text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee">
                    Here's what's happening with your body today.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[31.600000000000023px] mq800:gap-[31.6px_16px] mq1125:flex-wrap">
                  <Divcard1
                    cALORIESBURNT="CALORIES BURNT "
                    prop="2,894 "
                    group2="/group-2.svg"
                  />
                  <Divcard1
                    cALORIESBURNT="CALORIES GAINED"
                    prop="3,568 "
                    group2="/muscle@2x.png"
                    propMinWidth="234px"
                    propPadding="0px 0px 0px 0px"
                    propBackgroundColor="rgba(0, 142, 205, 0.24)"
                    propHeight="40px"
                    propHeight1="40px"
                    propWidth="42px"
                  />
                  <Divcard />
                </div>
              </div>
              <div className="self-stretch rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-center text-base-3 font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
                <div className="flex w-full">
                    <p className="ml-3">PROGRESS STATISTICS</p>
                    <div className="ml-auto mr-0">
                      <DatePicker
                        value={divcardHeaderDateTimePickerValue}
                        onChange={(newValue) => {
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
                            textAlign: "left",
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
                        //   textField: {
                        //     size: "medium",
                        //     fullWidth: false,
                        //     required: false,
                        //     autoFocus: false,
                        //     error: false,
                        //     color: "primary",
                        //     placeholder: "PROGRESS  STATISTICS",
                        //   },
                          openPickerIcon: {
                            component: () => (
                              <img width="15px" height="15px" src="/vector-2.svg" />
                            ),
                          },
                        }}
                      />
                    </div>
                </div>
                <div className="self-stretch h-[447.7px] relative max-w-full mq1125:h-auto mq1125:min-h-[447.69999999999993]">
                  <div className="absolute top-[0px] left-[0px] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white w-full flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[63.39999999999999px] pl-[63.39999999999998px] mq1125:pl-[31px] mq1125:pr-[31px] mq1125:box-border">
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[87px] max-w-[873px] mq1125:max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start pt-[16.799999999999955px] px-4 pb-[16.899999999999977px] gap-[3.450000047683716px] border-t-[0.8px] border-dashed border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain border-r-[0.8px] border-b-[0.8px]">
                          <div className="flex flex-col items-center justify-start pt-0 pb-[0.10000000000002274px] pr-[67px] pl-[67.80000000000007px]">
                            <div className="relative leading-[20px] font-medium inline-block min-w-[50px] max-w-[185.47999572753906px]">
                              12,585
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[0.5px] pr-[47px] pl-[47.30000000000007px] text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee">
                            <div className="w-full relative leading-[20px] inline-block min-w-[91px] max-w-[185.47999572753906px] whitespace-nowrap">
                              Calories Burnt
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[87px] max-w-[873px] mq1125:max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start pt-[16.799999999999955px] px-4 pb-[16.899999999999977px] gap-[3.450000047683716px] border-t-[0.8px] border-dashed border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain border-r-[0.8px] border-b-[0.8px]">
                          <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[0.10000000000002274px] pr-[66px] pl-[66.79999999999995px]">
                            <div className="w-full relative leading-[20px] font-medium inline-block min-w-[52px] max-w-[185.47999572753906px]">
                              16,568
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[0.5px] pr-10 pl-[40.799999999999955px] text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee">
                            <div className="w-full relative leading-[20px] inline-block min-w-[104px] max-w-[185.47999572753906px]">
                              Calories Gained
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[87px] max-w-[873px] z-[1] mq1125:max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start pt-[16.799999999999955px] px-4 pb-[16.899999999999977px] gap-[3.450000047683716px] border-t-[0.8px] border-dashed border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain border-r-[0.8px] border-b-[0.8px]">
                          <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[0.10000000000002274px] pr-[77px] pl-[77.19999999999999px]">
                            <div className="w-full relative leading-[20px] font-medium inline-block min-w-[31px] max-w-[185.47999572753906px]">
                              983
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[0.5px] pr-[53px] pl-[53.19999999999999px] text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee">
                            <div className="w-full relative leading-[20px] inline-block min-w-[79px] max-w-[185.47999572753906px]">
                              Net Calories
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[87px] max-w-[873px] z-[2] text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-niagara mq1125:max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start pt-[16.799999999999955px] px-4 pb-[16.899999999999977px] gap-[3.450000047683716px] border-t-[0.8px] border-dashed border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain border-b-[0.8px]">
                          <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[0.10000000000002274px] pr-[58px] pl-[58.6px]">
                            <div className="w-full relative leading-[20px] font-medium inline-block min-w-[69px] max-w-[186.27999877929688px]">{`+ 18.92% `}</div>
                          </div>
                          <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[0.5px] pr-8 pl-[32.60000000000001px] text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee">
                            <div className="w-full relative leading-[20px] inline-block min-w-[121px] max-w-[186.27999877929688px]">
                              Performance Stats
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[77.7px] left-[0px] w-full flex flex-col items-start justify-start pt-0 px-[63.5px] pb-[46.09999999999991px] box-border gap-[48.69999999999997px] min-h-[10px] max-w-full z-[1] text-right text-2xs text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee mq800:gap-[24px_48.7px] mq1125:pl-[31px] mq1125:pr-[31px] mq1125:box-border">
                    <div className="w-[100px] flex flex-col items-end justify-start pt-[20.5px] pb-0 pr-[49.799999999999955px] pl-[17.200000000000045px] box-border relative gap-[48.700000000000045px]">
                      {/* <img
                        className="w-full h-[100px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
                        alt=""
                      /> */}
                      <div className="self-stretch relative inline-block min-w-[33px] z-[1]">
                        120.00
                      </div>
                      <div className="w-[30px] relative inline-block min-w-[30px] z-[1]">
                        90.00
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-[19px] pl-[19.200000000000045px]">
                      <div className="w-[31px] relative inline-block min-w-[31px]">
                        60.00
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[20.200000000000045px]">
                      <div className="w-[30px] relative inline-block min-w-[30px]">
                        30.00
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[26.200000000000045px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                        <div className="w-[810.4px] !m-[0] absolute top-[-254.3px] right-[-6.7px] flex flex-row items-start justify-start max-w-full">
                          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                            <img
                              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
                              alt=""
                              src="/svgjsg2199@2x.png"
                            />
                            <img
                              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[3]"
                              alt=""
                              src="/svgjsg2205@2x.png"
                            />
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-px pb-[1.2000000000000457px] pr-[3.099999999999909px] pl-[3.1000000000000227px] box-border relative max-w-full">
                            <img
                              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[4]"
                              alt=""
                              src="/svgjsg2234@2x.png"
                            />
                            <div className="self-stretch h-0 flex flex-col items-start justify-start">
                              {/* <img
                                className="self-stretch h-0 relative max-w-full overflow-hidden shrink-0 z-[5] bg-red"
                                loading="lazy"
                                alt=""
                              /> */}
                              {/* <img
                                className="self-stretch h-0 relative max-w-full overflow-hidden shrink-0 z-[6]"
                                loading="lazy"
                                alt=""
                              /> */}
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[19.59999999999991px] box-border max-w-full">
                              <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1125:flex-wrap">
                                <img
                                  className="h-[262.8px] w-0 relative min-h-[263px] z-[1] mq1125:w-full mq1125:h-0"
                                  loading="lazy"
                                  alt=""
                                />
                                <div className="h-[262.8px] flex-1 relative min-w-[497px] max-w-full mq800:min-w-full">
                                  <img
                                    className="absolute top-[0px] left-[0px] w-[765px] h-[262.8px] z-[1]"
                                    alt=""
                                    src="/svgjsg2239.svg"
                                  />
                                  {/* <div className="absolute top-[0px] left-[0px] w-[100px] h-[100px]">
                                    <img
                                      className="absolute top-[0px] left-[0px] w-[100px] h-[100px] z-[7]"
                                      alt=""
                                    />
                                    <img
                                      className="absolute top-[0px] left-[0px] w-[100px] h-[100px] z-[8]"
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[5.600000000000136px] max-w-full">
                          <div className="w-6 relative inline-block min-w-[24px]">
                            0.00
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-center text-xs">
                            <div className="w-[795.5px] flex flex-row items-start justify-between py-0 pr-[7px] pl-0 box-border gap-[20px] max-w-full mq800:flex-wrap">
                              <div className="w-8 relative inline-block min-w-[32px]">
                                01/24
                              </div>
                              <div className="w-[35px] relative inline-block min-w-[35px]">
                                02/24
                              </div>
                              <div className="w-[35px] relative inline-block min-w-[35px]">
                                03/24
                              </div>
                              <div className="w-9 relative inline-block min-w-[36px]">
                                04/24
                              </div>
                              <div className="w-9 relative inline-block min-w-[36px]">
                                05/24
                              </div>
                              <div className="w-9 relative inline-block min-w-[36px]">
                                06/24
                              </div>
                              <div className="w-[35px] relative inline-block min-w-[35px]">
                                07/24
                              </div>
                              <div className="w-9 relative inline-block min-w-[36px]">
                                08/24
                              </div>
                              <div className="w-[39.1px] flex flex-col items-start justify-start py-0 pr-[3.1000000000000085px] pl-0 box-border">
                                <div className="self-stretch relative inline-block min-w-[36px]">
                                  09/24
                                </div>
                              </div>
                              <div className="w-[38px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
                                <div className="self-stretch relative inline-block min-w-[32px]">
                                  10/24
                                </div>
                              </div>
                              <div className="w-[36.1px] flex flex-col items-start justify-start py-0 pr-[8.099999999999994px] pl-0 box-border">
                                <div className="self-stretch relative inline-block min-w-[28px]">
                                  11/24
                                </div>
                              </div>
                              <div className="w-[31px] relative inline-block min-w-[31px]">
                                12/24
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
              <div className="rounded-8xs bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero flex flex-row items-start justify-start pt-[9px] pb-2 pr-[11px] pl-3 whitespace-nowrap z-[1]">
                <div className="h-[37px] w-36 relative rounded-8xs bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero hidden" />
                <div className="relative leading-[20px] inline-block min-w-[121px] z-[1]">
                  12th January, 2024
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[4.800000190734863px] pr-[11px] pl-7 bg-black h-[37px] rounded-8xs flex flex-row items-center justify-start box-border ml-[-18px]">
                <img
                  className="h-[18px] w-[17px] relative"
                  alt=""
                  src="/vector-3.svg"
                />
              </button>
            </div>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default DashboardCT;
