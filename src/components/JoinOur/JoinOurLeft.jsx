import React, { useState } from "react";
import inputbg from "../../assets/img/inputbg.webp";
import DashedLine from "../../assets/img/dashed-line.svg";

function JoinOurLeft() {
  const [width, setWidth] = useState(true);
  const [span1, setSpan1] = useState(false);
  const [span2, setSpan2] = useState(false);
  const changeWidth = () => {
    if (window.screen.width >= 1024) {
      setWidth(false);
    } else {
      setWidth(true);
    }
  };
  window.addEventListener("scroll", changeWidth);
  const onFocuss1 = () => {
    setSpan1(true);
  };
  const outOfFocuss1 = () => {
    setSpan1(false);
  };
  const onFocuss2 = () => {
    setSpan2(true);
  };
  const outOfFocuss2 = () => {
    setSpan2(false);
  };
  return (
    <div data-aos={width ? "zoom-in" : "fade-right"} className="joinLeft">
      <div className="joinLeftHeading">
        <h2>Join to our</h2>
      </div>

      <div className="joinLeftForm">
        <form>
          <label>
            <p>name</p>

            <img className="inputbg" src={inputbg} alt="uk-print-workshop" />

            <div>
              <input
                onFocus={onFocuss1}
                onBlur={outOfFocuss1}
                type="text"
                placeholder="Name"
              />
              <div>
                <span className={span1 ? "span" : ""}></span>
              </div>
            </div>
          </label>

          <label>
            <p>email</p>

            <img className="inputbg" src={inputbg} alt="meshroom" />

            <div>
              <input
                onFocus={onFocuss2}
                onBlur={outOfFocuss2}
                type="email"
                placeholder="email"
              />
              <div>
                <span className={span2 ? "span" : ""}></span>
              </div>
            </div>
          </label>

          <div className="mainButtonBack joinButton">
            <button type="submit" className="mainButton">
              <div className="mainButtonInside joinButtonInside">
                <span className="btn-paint-main"></span>
                <span className="btn-paint-main"></span>
                <span className="btn-paint-main"></span>
                <span className="btn-paint-main"></span>
                <span className="btn-paint-main"></span>
                <span className="btn-paint-main"></span>
                <p className="btn-label-p jointext">Join</p>
              </div>
            </button>
          </div>
        </form>
      </div>

      <div className="joinLeftDashedLine">
        <img src={DashedLine} alt="sublimation-printing" />
      </div>
    </div>
  );
}

export default JoinOurLeft;
