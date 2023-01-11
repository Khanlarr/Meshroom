import React, { useState } from "react";
import inputbg from "../../assets/img/Blackborderinput.svg";

function HaveLeft() {
  const [width, setWidth] = useState(true);
  const [span1, setSpan1] = useState(false);
  const [span2, setSpan2] = useState(false);
  const [span3, setSpan3] = useState(false);
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
  const onFocuss3 = () => {
    setSpan3(true);
  };
  const outOfFocuss3 = () => {
    setSpan3(false);
  };
  return (
    <div data-aos={width ? "zoom-in" : "fade-right"} className="haveLeft">
      <div className="haveLeftHeading">
        <div>
          <h2>have a project in mind?</h2>
        </div>
        <div>
          <p>Talk a little bit about your project and we will contact you</p>
        </div>
      </div>

      <div className="haveLeftForm">
        <form>
          <label>
            <p>name</p>
            <img src={inputbg} alt="fashion-printing" />
            <div>
              <input
                onFocus={onFocuss1}
                onBlur={outOfFocuss1}
                type="text"
                placeholder="name"
              />
              <div>
                <span className={span1 ? "span" : ""}></span>
              </div>
            </div>
          </label>

          <label>
            <p>email</p>
            <img src={inputbg} alt="embroidery" />
            <div>
              <input  onFocus={onFocuss2}
                onBlur={outOfFocuss2} type="email" placeholder="email" />
             <div>
                <span className={span2 ? "span" : ""}></span>
              </div>
            </div>
          </label>

          <label>
            <p>message</p>
            <img src={inputbg} alt="textile" />
            <div>
              <input  onFocus={onFocuss3}
                onBlur={outOfFocuss3} type="text" placeholder="message" />
              <div>
                <span className={span3 ? "span" : ""}></span>
              </div>
            </div>
          </label>

          <div class="seeAll blackbutton haveButton">
            <button class="seeAllBtn" type="submit">
              <div class="request_quote seeAllInside raq">
                <span class="btn-paint-s"></span>
                <span class="btn-paint-s"></span>
                <span class="btn-paint-s"></span>
                <span class="btn-paint-s"></span>
                <span class="btn-paint-s"></span>
                <span class="btn-label-s">Request a Quote</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HaveLeft;
