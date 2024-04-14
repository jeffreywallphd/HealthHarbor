import React, { FunctionComponent, useMemo, type CSSProperties } from "react";
import "../../../Assets/styles/Divcard1.css";

export type Divcard1Type = {
  cALORIESBURNT?: string;
  prop?: string;
  group2?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const Divcard1: FunctionComponent<Divcard1Type> = ({
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
  const divcardStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divdFlexStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const spanavatarTitleStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const beforeStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    };
  }, [propHeight1, propWidth]);

  return (
    <div className="divcard8" style={divcardStyle}>
      <div className="ptext-uppercase2">
        <div className="calories-burnt1">{cALORIESBURNT}</div>
      </div>
      <div className="divflex-shrink-02" />
      <div className="divd-flex4" style={divdFlexStyle}>
        <div className="divh2d-b5ca5c8">
          <div className="heading-4-container4">
            <span className="span3">{prop}</span>
            <span className="kcal3">kcal</span>
          </div>
          <div className="link-view2">View progress</div>
        </div>
        <div className="divavatar-sm2">
          <div className="spanavatar-title2" style={spanavatarTitleStyle}>
            <div className="ibx-shopping-bag1">
              <div className="before5" style={beforeStyle}>
                <img
                  className="before-child"
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
