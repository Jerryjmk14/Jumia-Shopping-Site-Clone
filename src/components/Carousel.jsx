import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import carouselOne from "../assets/images/carouselOne.png";
import carouselTwo from "../assets/images/carouselTwo.jpg";
import carouselThree from "../assets/images/carouselThree.jpg";
import carouselFour from "../assets/images/carouselFour.png";
import carouselFive from "../assets/images/carouselFive.jpg";
import carouselSix from "../assets/images/carouselSix.jpg";

export default function Carousel() {
  return (
    <div className="carousel-content">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carouselOne} className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={carouselTwo} className="d-block w-100" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={carouselThree} className="d-block w-100" alt="img3" />
          </div>
          <div className="carousel-item">
            <img src={carouselFour} className="d-block w-100" alt="img4" />
          </div>
          <div className="carousel-item">
            <img src={carouselFive} className="d-block w-100" alt="img5" />
          </div>
          <div className="carousel-item">
            <img src={carouselSix} className="d-block w-100" alt="img6" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
