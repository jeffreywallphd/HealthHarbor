import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Divcard from "../components/Divcard";
import Divcard1 from "../components/Divcard1";
import Header from "../components/Header";

const ExerciseLog = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/food-log");
  }, [navigate]);


  const [ExerCalorie,setExerCalorie] = useState();

  const handleChangeEC = (e) => {
    setExerCalorie(e.target.value)  
  }

  const [ExerName,setExerName] = useState();

  const handleChangeEN = (e) => {
    setExerName(e.target.value)  
  }

  const [ExerTime,setExerTime] = useState();

  const handleChangeET = (e) => {
    setExerTime(e.target.value)  
  }



  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[509.2000000000001px] box-border tracking-[normal]">
      <header className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-left text-base text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
        <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero flex flex-row items-start justify-start box-border relative gap-[19px] max-w-full">
          <Header></Header>
          {/* <Header></Header>
          <img
            className="h-[70px] w-[1440px] relative hidden max-w-full z-[0]"
            alt=""
            src="/rectangle-4012.svg"
          />
          <div className="h-[43.3px] w-[170px] relative text-midnightblue font-raleway">
            <div className="absolute top-[1px] left-[0px] w-[153px] h-[42.3px]">
              <div className="absolute top-[0px] left-[0px] w-full h-full z-[2]" />
              <img
                className="absolute top-[0px] left-[0px] w-[45px] h-[42.3px] object-cover z-[3]"
                loading="lazy"
                alt=""
                src="/healthify-logo-1@2x.png"
              />
            </div>
            <b className="absolute top-[0px] left-[45px] flex items-center w-[121px] h-[42px] whitespace-nowrap z-[3]">
              Health Harbor
            </b>
          </div>
          <div className="h-[42px] w-[978px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full text-smi">
            <div className="w-[231.6px] flex-1 flex flex-row items-start justify-start py-0 px-[13px] box-border relative gap-[9px] z-[2]">
              <div className="relative w-[161.6px] [border:none] bg-[transparent] h-[29.6px] flex flex-col items-start justify-start box-border">
                <input
                  className="[outline:none] pt-[8.800000000000011px] px-0 pb-[0.8000000000000114px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee [border:none] w-full h-full [background:transparent] relative z-[3]"
                  placeholder="Search..."
                  type="text"
                />
                <div className="w-full h-[21.6px] rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-whisper flex flex-row items-start justify-start absolute z-[1] left-[0px] bottom-[0px] [pointer-events:none]">
                  <div className="h-[21.6px] w-[161.6px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.8000000000000114px] px-0 box-border [debug_commit:f6aba90]">
                    <div className="h-5 w-[54px] relative flex items-center">
                      Search...
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[38px] !m-[0] absolute top-[0px] left-[13px] flex flex-row items-start justify-start">
                <img
                  className="h-[38px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pr-[25px] pl-0">
            <div className="h-5 rounded overflow-hidden shrink-0 flex flex-col items-start justify-start z-[2]">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/ussvg.svg"
              />
            </div>
          </div>
          <div className="w-[18px] flex flex-col items-start justify-start pt-[1.1000000000000227px] px-0 pb-0 box-border text-center text-3xs text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero">
            <div className="self-stretch h-[16.9px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-full h-full z-[3]" />
              <div className="absolute top-[3.9px] left-[6px] leading-[10px] font-semibold flex items-center justify-center w-1.5 h-2.5 min-w-[6px] z-[4]">
                3
              </div>
            </div>
          </div>
          <img
            className="h-5 w-4 absolute !m-[0] right-[150px] bottom-[24px] z-[2]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="w-[66px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-lgi font-abeezee mq1250:w-0">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1250:hidden">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <h3 className="m-0 relative text-inherit leading-[19.9px] font-normal font-inherit inline-block min-w-[16px] z-[1]">
                  
                </h3>
              </div>
              <h3 className="m-0 h-[22.1px] relative text-inherit leading-[17px] font-normal font-inherit flex items-center min-w-[19px] z-[1]">
                
              </h3>
            </div>
          </div> */}
        </div>
      </header>
      <section className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full text-left text-base text-black font-raleway">
        <div className="self-stretch flex flex-row items-end justify-start py-0 px-[99px] relative gap-[6px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pl-[49px] mq750:pr-[49px] mq750:box-border">
          <img
            className="h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden"
            alt=""
            src="/header.svg"
          />
          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
            <div
              className="flex flex-row items-start justify-start pt-[6.5px] pb-[2.5px] pr-[11px] pl-0 cursor-pointer z-[1]"
              onClick={onGroupContainerClick}
            >
              <div className="h-[38px] w-[37px] relative min-w-[28px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[39px] h-[38px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/icon-1.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <div className="h-[23px] relative font-medium inline-block shrink-0 min-w-[86px]">
                  Dashboard
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[134px] flex flex-row items-start justify-start cursor-pointer z-[1]"
            onClick={onGroupContainer2Click}
          >
            <div className="flex-1 flex flex-row items-center justify-start pt-1.5 pb-[3px] pr-[5px] pl-0">
              <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[28px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="h-[38px] w-[39px] relative overflow-hidden shrink-0">
                    <img
                      className="absolute top-[7px] left-[13px] w-[22px] h-[22px] object-contain"
                      loading="lazy"
                      alt=""
                      src="/bitten-apple@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 relative font-medium">Food Log</div>
            </div>
          </div>
          <div className="bg-ghostwhite flex flex-row items-start justify-start pt-[6.5px] pb-[3.5px] pr-[7px] pl-0 z-[1]">
            <div className="h-12 w-36 relative bg-ghostwhite hidden" />
            <div className="h-[38px] w-10 relative min-w-[28px] z-[1]">
              <img
                className="absolute top-[0px] left-[0px] w-[39px] h-[38px] overflow-hidden"
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
              <div className="relative font-medium inline-block min-w-[97px] z-[1]">
                Exercise Log
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5 box-border max-w-full text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
          <div className="w-[1255px] flex flex-col items-end justify-start gap-[22px] max-w-full">
            <div className="flex flex-row items-start justify-start">
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
            <div className="self-stretch flex flex-row items-start justify-start max-w-full text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee font-raleway">
              <div className="w-[994px] flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px_35px]">
                <div className="w-[652.4px] flex flex-row flex-wrap items-start justify-start gap-[27.59999999999991px] max-w-full">
                  <Divcard
                    propFlex="1"
                    propMinWidth="203px"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                    propWidth="unset"
                    propDebugCommit1="unset"
                  />
                  <Divcard1
                    cALORIESBURNT="CALORIES BURNT "
                    prop="2,894 "
                    group2="/group-2.svg"
                    propMinWidth="203px"
                    propPadding="unset"
                    propBackgroundColor="rgba(11, 121, 51, 0.26)"
                    propHeight="36.3px"
                    propHeight1="36.3px"
                    propWidth="32.3px"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[46px] max-w-full mq750:gap-[46px_23px] mq1100:flex-wrap">
                  <form className="m-0 flex-1 rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start pt-0 px-0 pb-[16.799999999999955px] box-border max-w-full mq750:min-w-full">
                    <div className="self-stretch rounded-t rounded-b-none bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero flex flex-row items-start justify-start pt-4 px-4 pb-[16.799999999999955px] border-b-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain">
                      <input
                        className="w-[85px] [border:none] [outline:none] font-semibold font-raleway text-base bg-[transparent] h-5 relative leading-[19.2px] text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey text-left flex items-center max-w-[715.4400024414062px] p-0 mq750:max-w-full"
                        placeholder="EXERCISES"
                        type="text"
                      />
                    </div>
                    <div className="w-[525px] overflow-hidden flex flex-col items-start justify-center max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mq750:flex-wrap">
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.2445] flex flex-col items-start justify-end py-3 px-4 box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[131px] mq450:flex-1"
                            placeholder="NAME"
                            type="text"
                          />
                          <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 flex flex-col items-start justify-end py-3 pr-2.5 pl-[9.599999999999907px] box-border min-w-[131px]">
                            <div className="relative text-smi leading-[20px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee text-left inline-block pl-[45px] min-w-[30px]">
                              TIME
                            </div>
                          </div>
                          <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 flex flex-col items-start justify-end py-3 pr-2.5 pl-[9.599999999999907px] box-border min-w-[131px] whitespace-nowrap">
                            <div className="relative text-smi leading-[20px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee text-left inline-block pl-[20px] min-w-[97px]">
                              CALORIES LOST
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-11 h-8 hidden" />
                    <div className="w-11 h-8 hidden" />
                    <div className="w-11 h-8 hidden" />
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[16.90000000000009px] box-border max-w-full">
                      <div className="w-[634px] flex flex-row items-start justify-start gap-[27px] max-w-full mq750:flex-wrap">
                        <div className="flex-1 box-border overflow-x-auto flex flex-row items-start justify-start pt-[11.600000000000025px] px-4 pb-[12.399999999999975px] gap-[31px] min-w-[372px] max-w-full border-t-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain mq450:min-w-full mq750:gap-[31px_15px]">
                          <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
                            <div className="flex flex-col items-start justify-start pt-[5.899999999999977px] px-0 pb-0">
                              <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left whitespace-nowrap">
                                <input
                                className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[120px]"
                                placeholder="Enter Exercise"
                                type="text" 
                                value={ExerName}
                                required
                                onChange={handleChangeEN}
                              />
                              </div>
                            </div>
                            <div className="h-8 w-[41.2px] flex flex-row items-center justify-start [transform:_rotate(180deg)] z-[1] ml-[-50.2px]">
                              <div className="h-8 w-[57px] hidden" />
                            </div>
                          </div>
                          <div className="w-[146px] shrink-0 flex flex-col items-start justify-start pt-[5.600000000000023px] px-0 pb-0 box-border">
                            <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[69px]">
                                <input
                                className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[120px]"
                                placeholder="Enter Time"
                                type="text" 
                                value={ExerTime}
                                required
                                onChange={handleChangeET}
                              />
                            </div>
                          </div>
                          <div className="w-[134px] shrink-0 flex flex-col items-start justify-start pt-[5.600000000000023px] px-0 pb-0 box-border">
                            <div className="self-stretch relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left">
                                <input
                                className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[125px]"
                                placeholder="Enter Caloie Value"
                                type="text" 
                                value={ExerCalorie}
                                required
                                onChange={handleChangeEC}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[15.200000000000044px] px-0 pb-0">
                          <button className="cursor-pointer [border:none] pt-1.5 px-[6.800000000000182px] pb-[7px] bg-seagreen-100 rounded flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-mediumseagreen">
                            <div className="w-[61px] relative text-smi leading-[10px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero text-center flex items-center justify-center min-w-[61px]">
                              ADD ITEM
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-between pt-[15.200000000000044px] pb-[16.799999999999955px] pr-[29px] pl-4 gap-[20px] border-t-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-end pt-0 pb-[1.7000000000000457px] pr-4 pl-0">
                          <div className="flex flex-row items-start justify-start relative">
                            <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay text-left inline-block min-w-[57px]">
                              CYCLING
                            </div>
                            <div className="h-8 w-[105px] !m-[0] absolute top-[25.7px] right-[-172px] flex flex-row items-center justify-start [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]">
                              <div className="self-stretch w-[325px] hidden max-w-full" />
                            </div>
                          </div>
                        </div>
                        <div className="h-[56.5px] w-[83.6px] hidden" />
                        <div className="w-[85px] flex flex-col items-start justify-end pt-0 pb-1 pr-4 pl-0 box-border">
                          <div className="self-stretch relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                            2 hrs
                          </div>
                        </div>
                        <div className="w-[113px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.5px] box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                            600 kcal
                          </div>
                        </div>
                        <div className="h-[22px] w-[57px] relative">
                          <img
                            className="absolute top-[0px] left-[0px] w-[22px] h-[22px] overflow-hidden z-[2]"
                            loading="lazy"
                            alt=""
                            src="/delete1.svg"
                          />
                          <img
                            className="absolute top-[3px] left-[39px] w-[18px] h-[17px] overflow-hidden z-[2]"
                            loading="lazy"
                            alt=""
                            src="/edit-square1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[639px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[33.700000000000045px] max-w-full mq750:gap-[17px_33.7px]">
                        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
                          <div className="w-[168px] flex flex-col items-start justify-start">
                            <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay text-left inline-block min-w-[59px]">
                              WALKING
                            </div>
                          </div>
                          <div className="w-44 flex flex-col items-start justify-start py-0 px-0 box-border">
                            <div className="mr-[-86px] w-[262px] relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left flex items-center">
                              1 hrs
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start min-w-[134px]">
                            <div className="w-[113px] relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left flex items-center">
                              256 kcal
                            </div>
                          </div>
                          <div className="h-[22px] w-[57px] relative">
                            <img
                              className="absolute top-[0px] left-[0px] w-[22px] h-[22px] overflow-hidden z-[2]"
                              loading="lazy"
                              alt=""
                              src="/delete1.svg"
                            />
                            <img
                              className="absolute top-[3px] left-[39px] w-[18px] h-[17px] overflow-hidden z-[2]"
                              loading="lazy"
                              alt=""
                              src="/edit-square1.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                          <div className="flex flex-col items-start justify-start gap-[36px]">
                            <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay text-left inline-block min-w-[59px]">
                              RUNNING
                            </div>
                            <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay text-left inline-block min-w-[100px]">
                              WEIGHT LIFTING
                            </div>
                          </div>
                          <div className="w-[108px] flex flex-col items-start justify-start py-0 pr-[39px] pl-0 box-border gap-[36px]">
                            <div className="self-stretch relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left z-[1]">
                              2 hrs
                            </div>
                            <div className="self-stretch relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left z-[1]">
                              0.5 hrs
                            </div>
                          </div>
                          <div className="w-[138px] flex flex-col items-start justify-start py-0 pr-[25px] pl-0 box-border gap-[36.5px]">
                            <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                              1620 kcal
                            </div>
                            <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                              110 kcal
                            </div>
                          </div>
                          <div className="w-[57px] flex flex-col items-start justify-start gap-[34px]">
                            <div className="self-stretch h-[22px] relative">
                              <img
                                className="absolute top-[0px] left-[0px] w-[22px] h-[22px] overflow-hidden z-[2]"
                                loading="lazy"
                                alt=""
                                src="/delete1.svg"
                              />
                              <img
                                className="absolute top-[3px] left-[39px] w-[18px] h-[17px] overflow-hidden z-[2]"
                                loading="lazy"
                                alt=""
                                src="/edit-square1.svg"
                              />
                            </div>
                            <div className="self-stretch h-[22px] relative">
                              <img
                                className="absolute top-[0px] left-[0px] w-[22px] h-[22px] overflow-hidden"
                                loading="lazy"
                                alt=""
                                src="/delete-3.svg"
                              />
                              <img
                                className="absolute top-[3px] left-[39px] w-[18px] h-[17px] overflow-hidden"
                                loading="lazy"
                                alt=""
                                src="/edit-square-3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="h-[368px] flex flex-col items-start justify-start gap-[22px] min-w-[296px] mq1100:flex-1">
                    <div className="flex-1 rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start pt-4 pb-[13.5px] pr-0 pl-4 gap-[24px]">
                      <div className="w-[194px] h-[19.5px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] box-border">
                        <div className="w-[122px] relative leading-[20px] uppercase font-semibold flex items-center shrink-0">
                          STEP COUNT
                        </div>
                      </div>
                      <div className="w-[70px] h-[17.4px] hidden" />
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-2 pl-0 relative text-3xl text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
                        <div className="w-[170.5px] flex flex-col items-start justify-start py-0 px-0 box-border">
                          <div className="mr-[-18.5px] w-[189px] relative leading-[27px] flex items-center shrink-0 [debug_commit:f6aba90] mq450:text-lg mq450:leading-[21px]">
                            <span className="w-full">
                              <span className="font-semibold">{`10,652 `}</span>
                              <span className="font-light">steps</span>
                            </span>
                          </div>
                        </div>
                        <div className="h-[74px] absolute !m-[0] bottom-[-24.5px] left-[0px] text-smi leading-[19.5px] text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay whitespace-pre-wrap flex items-center min-w-[95px]">
                          View progress
                        </div>
                        <button className="cursor-pointer [border:none] pt-[17.600000000000023px] pb-[18.399999999999977px] pr-[9.5px] pl-[28.5px] bg-orange self-stretch rounded flex flex-row items-start justify-start shrink-0 [debug_commit:f6aba90]">
                          <div className="h-[62px] w-[19px] hidden" />
                          <img
                            className="h-16 w-[63px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/directions-run.svg"
                          />
                        </button>
                        <div className="h-12 w-12 hidden z-[3]" />
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start pt-4 pb-[13.5px] pr-0 pl-4 gap-[24px]">
                      <div className="w-[194px] h-[19.5px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] box-border">
                        <div className="w-[122px] relative leading-[20px] uppercase font-semibold flex items-center shrink-0">
                          SLEEP TIME
                        </div>
                      </div>
                      <div className="w-[70px] h-[17.4px] hidden" />
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-2 pl-0 relative text-3xl text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
                        <div className="w-[170.5px] flex flex-col items-start justify-start py-0 px-0 box-border">
                          <div className="mr-[-18.5px] w-[189px] relative leading-[27px] flex items-center shrink-0 [debug_commit:f6aba90] mq450:text-lg mq450:leading-[21px]">
                            <span className="w-full">
                              <span className="font-semibold">{`6 `}</span>
                              <span className="font-light">{`hrs `}</span>
                              <span className="font-semibold">{`54 `}</span>
                              <span className="font-light">{`hrs `}</span>
                            </span>
                          </div>
                        </div>
                        <div className="h-[74px] absolute !m-[0] bottom-[-24.5px] left-[0px] text-smi leading-[19.5px] text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay whitespace-pre-wrap flex items-center min-w-[95px]">
                          View progress
                        </div>
                        <button className="cursor-pointer [border:none] pt-[11.829999923706055px] pb-[12.619999885559082px] pr-[12.630000114440918px] pl-[12.619999885559082px] bg-lightsteelblue self-stretch w-[101px] rounded flex flex-row items-center justify-center box-border shrink-0 [debug_commit:f6aba90]">
                          <img
                            className="h-[58px] w-[58px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/sleep.svg"
                          />
                        </button>
                        <div className="h-12 w-12 hidden z-[3]" />
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
  );
};

export default ExerciseLog;
