import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Divcard from "../components/Divcard";
import Divcard1 from "../components/Divcard1";
import Header from "../components/Header";

const FoodLog = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/exercise-log");
  }, [navigate]);

  const [bfastCalorie,setBfastCalorie] = useState();

  const handleChangeBC = (e) => {
    setBfastCalorie(e.target.value)  
  }

  const [bfastName,setBfastName] = useState();

  const handleChangeBN = (e) => {
    setBfastName(e.target.value)  
  }

  const [bfastFat,setBfastFat] = useState();

  const handleChangeBF = (e) => {
    setBfastFat(e.target.value)  
  }

  const [bfastProtein,setBfastProtein] = useState();

  const handleChangeBP = (e) => {
    setBfastProtein(e.target.value)  
  }

  const [bfastCarbs,setBfastCarbs] = useState();

  const handleChangeBCa = (e) => {
    setBfastCarbs(e.target.value)  
  }



  const [LunchCalorie,setLunchCalorie] = useState();

  const handleChangeLC = (e) => {
    setLunchCalorie(e.target.value)  
  }

  const [LunchName,setLunchName] = useState();

  const handleChangeLN = (e) => {
    setLunchName(e.target.value)  
  }

  const [LunchFat,setLunchFat] = useState();

  const handleChangeLF = (e) => {
    setLunchFat(e.target.value)  
  }

  const [LunchProtein,setLunchProtein] = useState();

  const handleChangeLP = (e) => {
    setLunchProtein(e.target.value)  
  }

  const [LunchCarbs,setLunchCarbs] = useState();

  const handleChangeLCa = (e) => {
    setLunchCarbs(e.target.value)  
  }




  const [DinnerCalorie,setDinnerCalorie] = useState();

  const handleChangeDC = (e) => {
    setDinnerCalorie(e.target.value)  
  }

  const [DinnerName,setDinnerName] = useState();

  const handleChangeDN = (e) => {
    setDinnerName(e.target.value)  
  }

  const [DinnerFat,setDinnerFat] = useState();

  const handleChangeDF = (e) => {
    setDinnerFat(e.target.value)  
  }

  const [DinnerProtein,setDinnerProtein] = useState();

  const handleChangeDP = (e) => {
    setDinnerProtein(e.target.value)  
  }

  const [DinnerCarbs,setDinnerCarbs] = useState();

  const handleChangeDCa = (e) => {
    setDinnerCarbs(e.target.value)  
  }

  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[52.200000000000045px] box-border tracking-[normal]">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border top-[0] z-[99] sticky max-w-full">
        <header className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero flex flex-row items-start justify-start box-border relative gap-[19px] max-w-full text-left text-base text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
          <Header></Header>
          {/* <img
            className="h-[70px] w-[1440px] relative hidden max-w-full z-[0]"
            alt=""
            src="/rectangle-4012.svg"
          /> */}
          {/* <div className="h-[43.3px] w-[170px] relative text-midnightblue font-raleway">
            <div className="absolute top-[1px] left-[0px] w-[153px] h-[42.3px]">
              <div className="absolute top-[0px] left-[0px] w-full h-full z-[2]" />
              <img
                className="absolute top-[0px] left-[0px] w-[45px] h-[42.3px] object-cover z-[3]"
                loading="lazy"
                alt=""
                src="/healthify-logo-1@2x.png"
              />
            </div>
            <b className="absolute top-[0px] left-[45px] flex items-center w-[121px] h-[42px] whitespace-nowrap z-[4]">
              Health Harbor
            </b>
          </div> */}
          {/* <div className="h-[42px] w-[978px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full text-smi">
            <div className="w-[231.6px] flex-1 flex flex-row items-start justify-start py-0 px-[13px] box-border relative gap-[9px] z-[2]">
              <div className="relative w-[161.6px] [border:none] bg-[transparent] h-[29.6px] flex flex-col items-start justify-start box-border">
                <input
                  className="[outline:none] pt-[8.800000000000011px] px-0 pb-[0.8000000000000114px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee [border:none] w-full h-full [background:transparent] relative z-[3]"
                  placeholder="Search..."
                  type="text"
                />
                <div className="w-full h-[21.6px] rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-whisper flex flex-row items-start justify-start absolute z-[1] left-[0px] bottom-[0px] [pointer-events:none]">
                  <div className="h-[21.6px] w-[161.6px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.8000000000000114px] px-0 box-border">
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
          </div> */}
          {/* <div className="flex flex-col items-start justify-start pt-[13px] pb-0 pr-[25px] pl-0">
            <div className="h-5 rounded overflow-hidden shrink-0 flex flex-col items-start justify-start z-[2]">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/ussvg.svg"
              />
            </div>
          </div> */}
          {/* <div className="w-[18px] flex flex-col items-start justify-start pt-[1.1000000000000227px] px-0 pb-0 box-border text-center text-3xs text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero">
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
        </header>
      </div>
      <main className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full text-left text-base text-black font-raleway mq750:gap-[17px_34px]">
        <div className="self-stretch flex flex-row items-end justify-start py-0 px-[99px] relative gap-[6px] z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pl-[49px] mq750:pr-[49px] mq750:box-border">
          <img
            className="h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden"
            alt=""
            src="/header.svg"
          />
          <div
            className="flex flex-row items-start justify-start pt-[6.5px] pb-[2.5px] pr-[11px] pl-0 cursor-pointer z-[1]"
            onClick={onGroupContainerClick}
          >
            <div className="h-[38px] w-[37px] relative min-w-[28px]">
              <img
                className="absolute top-[0px] left-[0px] w-[39px] h-[38px] overflow-hidden"
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
          <div className="w-36 bg-ghostwhite flex flex-row items-start justify-start pt-px pb-0 pr-0.5 pl-2 box-border z-[1]">
            <div className="h-12 w-36 relative bg-ghostwhite hidden" />
            <div className="flex-1 flex flex-row items-center justify-start pt-1.5 pb-[3px] pr-[5px] pl-0 z-[1]">
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
          <div
            className="flex flex-row items-start justify-start pt-[5.5px] px-0 pb-[3.5px] cursor-pointer z-[1]"
            onClick={onGroupContainer2Click}
          >
            <div className="h-[38px] w-10 relative min-w-[28px] shrink-0 [debug_commit:f6aba90]">
              <img
                className="absolute top-[0px] left-[0px] w-[39px] h-[38px] overflow-hidden"
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
        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5 box-border max-w-full text-left text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee font-raleway">
          <div className="w-[1255px] flex flex-row flex-wrap items-start justify-start gap-[54px] max-w-full mq750:gap-[27px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full mq750:gap-[21px_42px]">
                <div className="w-[801px] flex flex-row items-start justify-start gap-[36.60000000000002px] max-w-full mq450:gap-[36.6px_18px] mq750:flex-wrap">
                  <div className="w-[313.4px] flex flex-col items-start justify-start gap-[9px] min-w-[313.4px] mq750:flex-1">
                    <Divcard
                      propFlex="unset"
                      propMinWidth="unset"
                      propAlignSelf="stretch"
                      propAlignSelf1="unset"
                      propWidth="48px"
                      propDebugCommit1="unset"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                      <Divcard1
                        cALORIESBURNT="CALORIES GAINED"
                        prop="3,568 "
                        group2="/muscle@2x.png"
                        propMinWidth="unset"
                        propPadding="unset"
                        propBackgroundColor="rgba(0, 142, 205, 0.24)"
                        propHeight="40px"
                        propHeight1="40px"
                        propWidth="42px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start pt-[9px] px-3 pb-[25px] box-border gap-[19.200000000000045px] min-w-[293px] max-w-full">
                    <div className="w-[311.8px] h-[229.8px] flex flex-col items-start justify-start gap-[13px]">
                      <div className="relative leading-[20px] uppercase font-semibold shrink-0 [debug_commit:f6aba90] z-[1]">
                        TODAY’S CALORIE BREAKDOWN
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-end">
                        <img
                          className="h-[196.8px] w-[196.8px] relative shrink-0 [debug_commit:f6aba90] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/svgjsg2327.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 px-[41px] box-border max-w-full text-2xs font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
                      <div className="w-[325px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-row items-start justify-start py-0 pr-[27px] pl-0 gap-[2px]">
                          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                            <div className="w-[19px] h-2.5 relative bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay z-[1]" />
                          </div>
                          <div className="relative leading-[20px] uppercase font-semibold inline-block min-w-[24px] z-[1]">
                            Fat
                          </div>
                        </div>
                        <div className="w-[78px] flex flex-row items-start justify-start gap-[2px]">
                          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                            <div className="w-[19px] h-2.5 relative bg-goldenrod z-[1]" />
                          </div>
                          <div className="flex-1 relative leading-[20px] uppercase font-semibold z-[1]">
                            PROTEIN
                          </div>
                        </div>
                        <div className="w-[65px] flex flex-row items-start justify-start gap-[2px]">
                          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                            <div className="w-[19px] h-2.5 relative bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-niagara z-[1]" />
                          </div>
                          <div className="flex-1 relative leading-[20px] uppercase font-semibold z-[1]">
                            CARBS
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[33.200000000000045px] max-w-full mq750:gap-[17px_33.2px]">
                  <form className="m-0 self-stretch rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                    <div className="self-stretch rounded-t rounded-b-none bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero flex flex-row items-start justify-start pt-4 px-4 pb-[16.799999999999955px] border-b-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain">
                      <input
                        className="w-[92px] [border:none] [outline:none] font-semibold font-raleway text-base bg-[transparent] h-5 relative leading-[19.2px] text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey text-left flex items-center max-w-[715.4400024414062px] p-0 mq750:max-w-full"
                        placeholder="BREAKFAST"
                        type="text"
                      />
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-center max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div className="w-[876px] flex flex-row items-end justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                          <div className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.2445] flex flex-col items-start justify-end py-3 px-4 box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[175px] mq450:flex-1">NAME</div>
                          <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 flex flex-col items-start justify-end py-3 pr-2.5 pl-[9.600000000000025px] box-border min-w-[172px] max-w-[175px]">
                            <div className="relative text-smi leading-[20px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee text-left inline-block min-w-[55px]">
                              CALORIE
                            </div>
                          </div>
                          <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 flex flex-col items-start justify-end py-3 pr-2.5 pl-[9.600000000000025px] box-border min-w-[172px] max-w-[175px]">
                            <div className="relative text-smi leading-[20px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee text-left inline-block min-w-[24px]">
                              FAT
                            </div>
                          </div>
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.3539] flex flex-col items-start justify-end py-3 px-[9.599999999999907px] box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[175px] mq450:flex-1"
                            placeholder="PROTEIN"
                            type="text"
                          />
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.2813] flex flex-col items-start justify-end py-3 px-[9.599999999999907px] box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[176px] mq450:flex-1"
                            placeholder="CARBS"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[991px] flex flex-row items-start justify-start gap-[37px] max-w-full mq750:gap-[37px_18px] mq1100:flex-wrap">
                      <div className="flex-1 box-border overflow-x-auto flex flex-row items-end justify-between pt-[17.300000000000068px] pb-[18.399999999999977px] pl-4 pr-[53px] min-w-[612px] max-w-full gap-[20px] border-t-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain mq750:min-w-full mq1100:pr-[26px] mq1100:box-border">
                        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                          <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[109px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[120px]"
                            placeholder="Enter Food Name"
                            type="text" 
                            value={bfastName}
                            required
                            onChange={handleChangeBN}
                          />
                          </div>
                        </div>
                        <div className="h-[56.5px] w-[83.6px] shrink-0 hidden" />
                        <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
                          <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[109px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Calorie Value"
                            type="text" 
                            value={bfastCalorie}
                            required
                            onChange={handleChangeBC}
                          />
                          </div>
                        </div>
                        <div className="w-[121px] shrink-0 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left z-[1]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[120px]"
                            placeholder="Enter Fat Value"
                            type="text" 
                            value={bfastFat}
                            required
                            onChange={handleChangeBF}
                          />
                          </div>
                        </div>
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[125px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Protein Value"
                            type="text" 
                            value={bfastProtein}
                            required
                            onChange={handleChangeBP}
                          />
                        </div>
                        <div className="h-8 w-10 shrink-0 hidden" />
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[119px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Carbs Value"
                            type="text" 
                            value={bfastCarbs}
                            required
                            onChange={handleChangeBCa}
                          />
                        </div>
                      </div>
                      <div className="w-[79px] flex flex-col items-start justify-start pt-[15.200000000000044px] px-0 pb-0 box-border">
                        <button className="cursor-pointer [border:none] pt-1.5 px-[6.7999999999999545px] pb-[7px] bg-seagreen-100 self-stretch rounded flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-mediumseagreen">
                          <div className="w-[61px] relative text-smi leading-[10px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero text-center flex items-center justify-center min-w-[61px]">
                            ADD ITEM
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="self-stretch box-border flex flex-row items-start justify-start pt-[15.200000000000044px] px-4 pb-[15.799999999999956px] gap-[44px] max-w-[102%] shrink-0 border-t-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain mq750:gap-[44px_22px] mq1100:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[2.2999999999999545px] px-0 pb-0">
                        <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay text-left inline-block min-w-[124px]">
                          Cookie and Cream
                        </div>
                      </div>
                      <div className="h-[56.5px] w-[83.6px] hidden" />
                      <div className="h-8 w-11 hidden" />
                      <div className="w-[132px] flex flex-col items-start justify-start pt-[2.1000000000000227px] px-0 pb-0 box-border">
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block min-w-[69px]">
                          2356 kcal
                        </div>
                      </div>
                      <div className="w-[627px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                        <div className="w-[113px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                            56 gms
                          </div>
                        </div>
                        <div className="w-[110px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-7 pl-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                            654 gms
                          </div>
                        </div>
                        <div className="w-[150px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                          <div className="w-[82.1px] relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left flex items-center">
                            235 gms
                          </div>
                        </div>
                        <div className="h-[25px] flex flex-row items-end justify-start gap-[20px]">
                          <img
                            className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                            loading="lazy"
                            alt=""
                            src="/delete.svg"
                          />
                          <div className="h-[22px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                            <img
                              className="w-5 h-5 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/edit-square.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form className="m-0 self-stretch rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                    <div className="self-stretch rounded-t rounded-b-none bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero flex flex-row items-start justify-start pt-4 px-4 pb-[16.799999999999955px] border-b-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain">
                      <div className="relative text-base leading-[20px] font-semibold font-raleway text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey text-left inline-block min-w-[57px] max-w-[715.4400024414062px] mq750:max-w-full">
                        LUNCH
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-center max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div className="w-[876px] flex flex-row items-end justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.2445] flex flex-col items-start justify-end py-3 px-4 box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[175px] mq450:flex-1"
                            placeholder="NAME"
                            type="text"
                          />
                          <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 flex flex-col items-start justify-end py-3 pr-2.5 pl-[9.600000000000025px] box-border min-w-[172px] max-w-[175px]">
                            <div className="relative text-smi leading-[20px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee text-left inline-block min-w-[55px]">
                              CALORIE
                            </div>
                          </div>
                          <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 flex flex-col items-start justify-end py-3 pr-2.5 pl-[9.600000000000025px] box-border min-w-[172px] max-w-[175px]">
                            <div className="relative text-smi leading-[20px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee text-left inline-block min-w-[24px]">
                              FAT
                            </div>
                          </div>
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.3539] flex flex-col items-start justify-end py-3 px-[9.599999999999907px] box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[175px] mq450:flex-1"
                            placeholder="PROTEIN"
                            type="text"
                          />
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.2813] flex flex-col items-start justify-end py-3 px-[9.599999999999907px] box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[176px] mq450:flex-1"
                            placeholder="CARBS"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[991px] flex flex-row items-start justify-start gap-[37px] max-w-full mq750:gap-[37px_18px] mq1100:flex-wrap">
                      <div className="flex-1 box-border overflow-x-auto flex flex-row items-end justify-between pt-[17.299999999999955px] pb-[18.399999999999864px] pr-[53px] pl-4 min-w-[612px] max-w-full gap-[20px] border-t-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain mq750:min-w-full mq1100:pr-[26px] mq1100:box-border">
                        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                          <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[109px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[120px]"
                            placeholder="Enter Food Name"
                            type="text" 
                            value={LunchName}
                            required
                            onChange={handleChangeLN}
                          />
                          </div>
                        </div>
                        <div className="h-[56.5px] w-[83.6px] shrink-0 hidden" />
                        <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
                          <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[124px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Calorie Value"
                            type="text" 
                            value={LunchCalorie}
                            required
                            onChange={handleChangeLC}
                          />
                          </div>
                        </div>
                        <div className="w-[121px] shrink-0 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left z-[1]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[120px]"
                            placeholder="Enter Fat Value"
                            type="text" 
                            value={LunchFat}
                            required
                            onChange={handleChangeLF}
                          />
                          </div>
                        </div>
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[125px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Protein Value"
                            type="text" 
                            value={LunchProtein}
                            required
                            onChange={handleChangeLP}
                          />
                        </div>
                        <div className="h-8 w-10 shrink-0 hidden" />
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[119px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Carbs Value"
                            type="text" 
                            value={LunchCarbs}
                            required
                            onChange={handleChangeLCa}
                          />
                        </div>
                      </div>
                      <div className="w-[79px] flex flex-col items-start justify-start pt-[15.200000000000044px] px-0 pb-0 box-border">
                        <button className="cursor-pointer [border:none] pt-1.5 px-[6.7999999999999545px] pb-[7px] bg-seagreen-100 self-stretch rounded flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-mediumseagreen">
                          <div className="w-[61px] relative text-smi leading-[10px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero text-center flex items-center justify-center min-w-[61px]">
                            ADD ITEM
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="self-stretch box-border flex flex-row items-start justify-start pt-[15.200000000000044px] px-4 pb-[15.799999999999956px] gap-[44px] max-w-[102%] shrink-0 border-t-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain mq750:gap-[44px_22px] mq1100:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[2.2999999999999545px] px-0 pb-0">
                        <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay text-left inline-block min-w-[124px]">
                          Cookie and Cream
                        </div>
                      </div>
                      <div className="h-[56.5px] w-[83.6px] hidden" />
                      <div className="h-8 w-11 hidden" />
                      <div className="w-[132px] flex flex-col items-start justify-start pt-[2.099999999999909px] px-0 pb-0 box-border">
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block min-w-[69px]">
                          2356 kcal
                        </div>
                      </div>
                      <div className="w-[627px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                        <div className="w-[113px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                            56 gms
                          </div>
                        </div>
                        <div className="w-[110px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-7 pl-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                            654 gms
                          </div>
                        </div>
                        <div className="w-[150px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                          <div className="w-[82.1px] relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left flex items-center">
                            235 gms
                          </div>
                        </div>
                        <div className="h-[25px] flex flex-row items-end justify-start gap-[20px]">
                          <img
                            className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                            alt=""
                            src="/delete.svg"
                          />
                          <div className="h-[22px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                            <img
                              className="w-5 h-5 relative overflow-hidden shrink-0"
                              alt=""
                              src="/edit-square.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form className="m-0 self-stretch rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
                    <div className="self-stretch rounded-t rounded-b-none bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero flex flex-row items-start justify-start pt-4 px-4 pb-[16.799999999999955px] border-b-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain">
                      <div className="relative text-base leading-[20px] font-semibold font-raleway text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey text-left inline-block min-w-[61px] max-w-[715.4400024414062px] mq750:max-w-full">
                        DINNER
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-center max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div className="w-[876px] flex flex-row items-end justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.2445] flex flex-col items-start justify-end py-3 px-4 box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[175px] mq450:flex-1"
                            placeholder="NAME"
                            type="text"
                          />
                          <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 flex flex-col items-start justify-end py-3 pr-2.5 pl-[9.600000000000025px] box-border min-w-[172px] max-w-[175px]">
                            <div className="relative text-smi leading-[20px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee text-left inline-block min-w-[55px]">
                              CALORIE
                            </div>
                          </div>
                          <div className="flex-1 bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 flex flex-col items-start justify-end py-3 pr-2.5 pl-[9.600000000000025px] box-border min-w-[172px] max-w-[175px]">
                            <div className="relative text-smi leading-[20px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee text-left inline-block min-w-[24px]">
                              FAT
                            </div>
                          </div>
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.3539] flex flex-col items-start justify-end py-3 px-[9.599999999999907px] box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[175px] mq450:flex-1"
                            placeholder="PROTEIN"
                            type="text"
                          />
                          <input
                            className="w-full [border:none] [outline:none] bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-catskill-white1 h-11 flex-[0.2813] flex flex-col items-start justify-end py-3 px-[9.599999999999907px] box-border font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 font-semibold text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee min-w-[172px] max-w-[176px] mq450:flex-1"
                            placeholder="CARBS"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <footer className="w-[991px] flex flex-row items-start justify-start gap-[37px] max-w-full mq750:gap-[37px_18px] mq1100:flex-wrap">
                      <div className="flex-1 box-border overflow-x-auto flex flex-row items-end justify-between pt-[17.299999999999955px] pb-[18.399999999999864px] pr-[53px] pl-4 min-w-[612px] max-w-full gap-[20px] border-t-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain mq750:min-w-full mq1100:pr-[26px] mq1100:box-border">
                        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                          <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[109px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[120px]"
                            placeholder="Enter Food Name"
                            type="text" 
                            value={DinnerName}
                            required
                            onChange={handleChangeDN}
                          />
                          </div>
                        </div>
                        <div className="h-[56.5px] w-[83.6px] shrink-0 hidden" />
                        <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
                          <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[124px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Calorie Value"
                            type="text" 
                            value={DinnerCalorie}
                            required
                            onChange={handleChangeDC}
                          />
                          </div>
                        </div>
                        <div className="w-[121px] shrink-0 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left z-[1]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[120px]"
                            placeholder="Enter Fat Value"
                            type="text" 
                            value={DinnerFat}
                            required
                            onChange={handleChangeDF}
                          />
                          </div>
                        </div>
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[125px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Protein Value"
                            type="text" 
                            value={DinnerProtein}
                            required
                            onChange={handleChangeDP}
                          />
                        </div>
                        <div className="h-8 w-10 shrink-0 hidden" />
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-gainsboro text-left inline-block min-w-[119px]">
                            <input
                            className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block max-w-[128px]"
                            placeholder="Enter Carbs Value"
                            type="text" 
                            value={DinnerCarbs}
                            required
                            onChange={handleChangeDCa}
                          />
                        </div>
                      </div>
                      <div className="w-[79px] flex flex-col items-start justify-start pt-[15.200000000000044px] px-0 pb-0 box-border">
                        <button className="cursor-pointer [border:none] pt-1.5 px-[6.7999999999999545px] pb-[7px] bg-seagreen-100 self-stretch rounded flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-mediumseagreen">
                          <div className="w-[61px] relative text-smi leading-[10px] font-semibold font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero text-center flex items-center justify-center min-w-[61px]">
                            ADD ITEM
                          </div>
                        </button>
                      </div>
                    </footer>
                    <div className="self-stretch box-border flex flex-row items-start justify-start pt-[15.200000000000044px] px-4 pb-[15.799999999999956px] gap-[44px] max-w-[102%] shrink-0 border-t-[0.8px] border-solid border-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-porcelain mq750:gap-[44px_22px] mq1100:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[2.2999999999999545px] px-0 pb-0">
                        <div className="relative text-smi leading-[20px] font-medium font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay text-left inline-block min-w-[124px]">
                          Cookie and Cream
                        </div>
                      </div>
                      <div className="h-[56.5px] w-[83.6px] hidden" />
                      <div className="h-8 w-11 hidden" />
                      <div className="w-[132px] flex flex-col items-start justify-start pt-[2.099999999999909px] px-0 pb-0 box-border">
                        <div className="relative text-smi leading-[20px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left inline-block min-w-[69px]">
                          2356 kcal
                        </div>
                      </div>
                      <div className="w-[627px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                        <div className="w-[113px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                            56 gms
                          </div>
                        </div>
                        <div className="w-[110px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-7 pl-0 box-border">
                          <div className="self-stretch relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left">
                            654 gms
                          </div>
                        </div>
                        <div className="w-[150px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                          <div className="w-[82.1px] relative text-smi leading-[19.5px] font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark text-left flex items-center">
                            235 gms
                          </div>
                        </div>
                        <div className="h-[25px] flex flex-row items-end justify-start gap-[20px]">
                          <img
                            className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                            alt=""
                            src="/delete.svg"
                          />
                          <div className="h-[22px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                            <img
                              className="w-5 h-5 relative overflow-hidden shrink-0"
                              alt=""
                              src="/edit-square.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-shark font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default FoodLog;
