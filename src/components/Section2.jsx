import React from "react";
import "./componentStyles/section2.css";
import About from "../Images/About.png";
const AboutUs = ({ title, heading, subTitle, content, icon, btnTitle, id }) => {
  return (
    <div className="container-fluid AboutUs" id={id}>
      <div className="row">
        <div className="col-md-6 col-sm-6 About-left-section">
          <img className="AboutUs-img" src={About} alt="About us" />
        </div>
        <div className=" col-md-6 About-right-section">
          <h5 className="AboutUs-top-Heading">{title}</h5>
          <h3 className="AboutUs-main-Heading">{heading}</h3>
          <div className="AboutUs-content">
            <div className="content-box">
              <i className={icon}></i>
              <p className="AboutUs-head-content">{subTitle}</p>
            </div>
            <p className="AboutUs-main-content">{content} </p>
            <button
              className={
                btnTitle ? "btn btn-success About-btn" : "btn  disabled"
              }
            >
              {btnTitle}
            </button>
            {title === "About Us" ? (
              ""
            ) : (
              <div className="Customer">
                <div className="profile"></div>
                <div className="customerDetails">
                  <h2>Zubayer Hasan</h2>
                  <p>Uttara</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
