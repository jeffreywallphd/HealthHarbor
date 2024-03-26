const Header = () => {
  return (
    <header className="self-stretch bg-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero flex flex-row items-start justify-start pt-[13px] px-[35px] pb-[13.699999999999989px] box-border top-[0] z-[99] sticky max-w-full text-left text-base text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-manatee font-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-poppins-regular-12">
      <img
        className="h-[70px] w-[1440px] relative hidden max-w-full"
        alt=""
        src="/rectangle-4012.svg"
      />
      <div className="h-[43.3px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
        <img
          className="w-[45px] h-[42.3px] relative object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/healthify-logo-1@2x.png"
        />
      </div>
      <div className="w-36 flex flex-col items-start justify-start py-0 pr-[23px] pl-0 box-border text-midnightblue font-raleway">
        <b className="self-stretch h-[42px] relative flex items-center shrink-0 whitespace-nowrap z-[3]">
          Health Harbor
        </b>
      </div>
      <div className="h-[42px] w-[997px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full text-smi">
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
      </div>
      <div className="w-16 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border relative">
        <div className="h-5 rounded overflow-hidden shrink-0 flex flex-col items-start justify-start z-[2]">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/ussvg.svg"
          />
          <img
          className="w-4 h-5 absolute !m-[0] right-[-5px] bottom-[0px] z-[2]"
          loading="lazy"
          alt=""
          src="/vector.svg"
          />
        </div>
        
      </div>
      <div className="w-[37px] flex flex-col items-start justify-start pt-[1.1000000000000227px] pb-0 pr-[19px] pl-0 box-border text-center text-3xs text-themesbrand-com-velzon-html-default-1519199951171875x6775999755859375-default-nero">
        <div className="self-stretch h-[16.9px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-full h-full z-[3]" />
          <div className="absolute top-[3.9px] left-[6px] leading-[10px] font-semibold flex items-center justify-center w-1.5 h-2.5 min-w-[6px] z-[4]">
            3
          </div>
        </div>
      </div>
      <div className="w-[66px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-lgi font-abeezee mq1300:w-0">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1300:hidden">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <h3 className=" mt-[21px] relative text-inherit leading-[19.9px] font-normal font-inherit inline-block min-w-[16px] z-[1]">    
              <img
              className="w-4 h-5 absolute right-[-5px] bottom-[0px] z-[2]"
              loading="lazy"
              alt=""
              src="/profile-icon.svg"
              />
            </h3>
          </div>
          <h3 className="mt-[1px] h-[22.1px] relative text-inherit leading-[17px] font-normal font-inherit flex items-center min-w-[19px] z-[1]">
              <img
              className="w-4 h-5 absolute right-[-5px] bottom-[0px] z-[2]"
              loading="lazy"
              alt=""
              src="/logout.svg"
              />
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
