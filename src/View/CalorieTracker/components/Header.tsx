import React, { FunctionComponent } from "react";
import "../../../Assets/styles/Header.css";

const Header: FunctionComponent = () => {
  return (
    <header className="header2">
      <img className="header-inner" alt="" src="/rectangle-4012.svg" />
      <div className="healthify-logo-1-wrapper">
        <img
          className="healthify-logo-1-icon2"
          loading="lazy"
          alt=""
          src="/healthify-logo-1@2x.png"
        />
      </div>
      <div className="health-harbor-wrapper">
        <b className="health-harbor2">Health Harbor</b>
      </div>
      <div className="divposition-relative-container">
        <div className="divposition-relative2">
          <div className="wrapper-frame-7">
            <input
              className="wrapper-frame-7-child"
              placeholder="Search..."
              type="text"
            />
            <div className="input2">
              <div className="divplaceholder2">
                <div className="search2">Search...</div>
              </div>
            </div>
          </div>
          <div className="before4">
            <img className="icon11" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <div className="variable-holder">
        <div className="ussvg2">
          <img className="ussvg-icon2" loading="lazy" alt="" src="/ussvg.svg" />
        </div>
        <img
          className="if-statement-icon"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="else-statement">
        <div className="elif-statement">
          <div className="for-loop" />
          <div className="while-loop">3</div>
        </div>
      </div>
      <div className="break-statement">
        <div className="continue-statement">
          <div className="return-statement">
            <h3 className="profile-icon2"></h3>
          </div>
          <h3 className="logout-icon2"></h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
