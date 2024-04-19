import { useMemo } from "react";

const Divcard1 = ({
  cALORIESBURNT,
  prop,
  group2,
  propMinWidth,
  propPadding,
  propBackgroundColor,
  propHeight,
  propHeight1,
  propWidth,
}) => {
  const divcardStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divdFlexStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const spanavatarTitleStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const beforeStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const groupIconStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    };
  }, [propHeight1, propWidth]);

  return (
    <div
      className="flex-1 rounded bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero shadow-[0px_1px_2px_rgba(56,_65,_74,_0.15)] flex flex-col items-start justify-start pt-4 px-4 pb-[16.5px] box-border gap-[24px] min-w-[234px] text-left text-smi text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee font-raleway"
      style={divcardStyle}
    >
      <div className="w-[210.4px] h-[19.5px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] box-border">
        <div className="relative leading-[20px] uppercase font-semibold inline-block min-w-[122px]">
          {cALORIESBURNT}
        </div>
      </div>
      <div className="w-[70px] h-[17.4px] hidden" />
      <div
        className="self-stretch flex flex-row items-end justify-between gap-[20px] text-3xl text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-abbey font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12"
        style={divdFlexStyle}
      >
        <div className="w-[189px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px] box-border gap-[23.450000762939453px]">
          <div className="self-stretch relative leading-[27px] mq450:text-lg mq450:leading-[21px]">
            <span className="font-semibold">{prop}</span>
            <span className="font-light">kcal</span>
          </div>
          <div className="relative text-smi leading-[20px] text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-east-bay whitespace-pre-wrap inline-block min-w-[95px]">
            View progress
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div
            className="rounded bg-seagreen-200 flex flex-row items-center justify-center pt-[5.2999999999999545px] px-2 pb-[6.100000000000023px]"
            style={spanavatarTitleStyle}
          >
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.3000000000000682px]">
              <div
                className="h-[36.3px] flex flex-row items-start justify-start"
                style={beforeStyle}
              >
                <img
                  className="h-[36.3px] w-[32.3px] relative"
                  loading="lazy"
                  alt=""
                  src={group2}
                  style={groupIconStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divcard1;
