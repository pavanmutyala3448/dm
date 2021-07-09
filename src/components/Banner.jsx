import React from "react";
import hero from "../Images/hero.png";
import "./componentStyles/Banner.css";
const Banner = () => {
  return (
    <div className="container Banner">
      <div className="row banner-row">
        <div className="left-section  col-md-6 ">
          <h4 className="banner-top-heading">We'r Awesome</h4>
          <h2 className="banner-main-heading">
            Digital Agencies That Help Your To Go A Head
          </h2>
          <button className="btn btn-success banner-btn">Contact Us</button>
        </div>
        <div className="col-md-6 right-section">
          <img className="banner-img" src={hero} alt="Img-1" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
