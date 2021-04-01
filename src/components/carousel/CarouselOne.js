import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import handshake from "../../imgs/handshake.jpg";
import coding from "../../imgs/coding.jpg";
import mobilephone from "../../imgs/mobilephone.jpg";
import CarouselOverlay from "./CarouselOverlay";
import ecommerce from "../../imgs/ecommerce.jpg";

const CarouselOne = ({ func, funcTwo }) => {
  // const goToForm = () => {
  //   document.getElementById("name").focus();
  // };

  return (
    <div className="carousel">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        swipeable
        infiniteLoop
        autoPlay
        stopOnHover
        interval={5000}
      >
        <div>
          <CarouselOverlay
            title="Web Development"
            func={func}
            funcTwo={funcTwo}
          />
          <img
            className="carousel__image"
            key="img"
            src={coding}
            alt="carousel"
          />
        </div>
        <div>
          <CarouselOverlay
            title="IOS + ANDRIOD"
            func={func}
            funcTwo={funcTwo}
          />
          <img
            className="carousel__image"
            key="img2"
            src={mobilephone}
            alt="carousel"
          />
        </div>

        <div>
          <CarouselOverlay
            title="API's + Databases"
            func={func}
            funcTwo={funcTwo}
          />
          <img
            className="carousel__image"
            key="img2"
            src={handshake}
            alt="carousel"
          />
        </div>

        <div>
          <CarouselOverlay
            title="e-commerce apps"
            func={func}
            funcTwo={funcTwo}
          />
          <img
            className="carousel__image"
            key="img2"
            src={ecommerce}
            alt="carousel"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselOne;