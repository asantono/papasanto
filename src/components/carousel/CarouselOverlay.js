import React from "react";
import resumelogo from "../../imgs/resumelogo.png";
import { AiOutlineDown } from "react-icons/ai";

const CarouselOverlay = (props) => {
  const { title, func, funcTwo, dark } = props;
  const overlayStyle = dark
    ? "carousel__image--overlay carousel__image--overlay--dark"
    : "carousel__image--overlay";
  return (
    <div className={overlayStyle}>
      <div className="carousel__large">
        <img className="carousel__logo" src={resumelogo} alt="LOGO" />
        <div className="carousel__image--wrapper">
          <div className="carousel__middle">
            <div className="carousel__left">
              <div className="carousel__left--title">{title}</div>
              <div className="carousel__left--subtitle">Keep Coding</div>
              <div className="carousel__left--tagline">
                I'm always here to help
              </div>
              <div className="carousel__left--story">
                Learn from my youtube courses or hire a pro
              </div>
            </div>
            <div className="carousel__right">
              <div>
                <input
                  className="carousel__right--button"
                  type="submit"
                  value="Let's Talk Today"
                  onClick={() => funcTwo()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel__learn-more--container" onClick={() => func()}>
          <div className="carousel__learn-more">Learn more and keep coding</div>
          <div className="carousel__down-arrow">
            <AiOutlineDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselOverlay;
