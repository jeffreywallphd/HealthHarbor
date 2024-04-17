import { useMemo } from "react";

const Divcard = ({
  propFlex,
  propMinWidth,
  propAlignSelf,
  propAlignSelf1,
  propDebugCommit,
  propWidth,
  propDebugCommit1,
}) => {
  const divcard1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const divdFlex1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const spanavatarTitle1Style = useMemo(() => {
    return {
      width: propWidth,
      debugCommit: propDebugCommit1,
    };
  }, [propWidth, propDebugCommit1]);

  return (
    <div
      className="flex-1 rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start pt-4 px-4 pb-[16.5px] box-border gap-[24px] min-w-[234px] text-left text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee font-raleway"
      style={divcard1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="h-[19.5px] flex-1 overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] box-border">
          <div className="w-[122px] relative leading-[20px] uppercase font-semibold flex items-center shrink-0">
            CALORIES GOAL
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-sm text-seagreen-100 font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start pt-0 px-0 pb-[0.39999999999997726px]">
              <div className="flex flex-row items-start justify-start">
                <div className="h-[12.8px] flex flex-row items-start justify-start">
                  <img
                    className="h-[12.8px] w-[13px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-3.svg"
                  />
                </div>
              </div>
              <div className="relative leading-[17px] font-medium inline-block min-w-[57px]">
                {" "}
                +3.57 %
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-end justify-start gap-[43.400000000000006px] text-3xl text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12 mq450:gap-[43.4px_22px]"
        style={divdFlex1Style}
      >
        <div className="w-[189px] flex flex-col items-start justify-start gap-[23.5px]">
          <div className="self-stretch relative leading-[27px] mq450:text-lg mq450:leading-[21px]">
            <span className="font-semibold">{`2,614 `}</span>
            <span className="font-light">kcal</span>
          </div>
          <div className="relative text-smi leading-[20px] text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay whitespace-pre-wrap inline-block min-w-[95px]">
            View progress
          </div>
        </div>
        <div
          className="h-12 rounded bg-red flex flex-row items-center justify-center pt-[11.829999923706055px] pb-[12.619999885559082px] pr-2 pl-[7px] box-border w-12"
          style={spanavatarTitle1Style}
        >
          <img
            className="h-[33px] w-[33px] relative"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Divcard;
