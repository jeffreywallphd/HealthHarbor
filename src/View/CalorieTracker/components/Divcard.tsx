import React, { FunctionComponent, useMemo, type CSSProperties } from "react";
import "../../../Assets/styles/Divcard.css";
import vector from '../../../Assets/Images/vector-1.png'

export type DivcardType = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const Divcard: FunctionComponent<DivcardType> = ({
  propFlex,
  propMinWidth,
  propAlignSelf,
  propAlignSelf1,
  propWidth,
}) => {
  const divcard1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const divdFlex1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const spanavatarTitle1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="divcard9" style={divcard1Style}>
      <div className="ptext-uppercase-parent">
        <div className="ptext-uppercase3">
          <div className="calories-goal">CALORIES GOAL</div>
        </div>
        <div className="divflex-shrink-0-wrapper">
          <div className="divflex-shrink-03">
            <div className="heading-58">
              <div className="iri-arrow-right-down-line">
                <div className="before6">
                  {/* <img
                    className="icon3"
                    loading="lazy"
                    alt=""
                    src={icon3}
                  /> */}
                </div>
              </div>
              <div className="div4"> +3.57 %</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divd-flex5" style={divdFlex1Style}>
        <div className="heading-4-36894-parent">
          <div className="heading-4-container5">
            <span className="span4">{`2,614 `}</span>
            <span className="kcal4">kcal</span>
          </div>
          <div className="link-view3">View progress</div>
        </div>
        <div className="spanavatar-title3" style={spanavatarTitle1Style}>
          <img
            className="vector-icon2"
            loading="lazy"
            alt=""
            src={vector}
          />
        </div>
      </div>
    </div>
  );
};

export default Divcard;
