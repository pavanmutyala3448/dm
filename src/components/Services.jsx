import React from "react";
import ServiceImg from "../Images/ServicesImg.png";
import "./componentStyles/service.css";
import services from "./servicesItems";
const Services = () => {
  return (
    <div className="container-fluid Services" id="Services">
      <div className="row services-row">
        <div className="col-md-6 left-service">
          <img src={ServiceImg} alt="service-img" className="services-img" />
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xxl-6 right-service">
          <div className="service-content">
            <p className="top-service">Our Service</p>
            <h3 className="main-service">
              We Provide Wide Range of Web & Bussiness Services
            </h3>
            <p className="service-bottom-heading">
              We've a Strong work History with Different Bussiness Services
            </p>
            <div className="service-items">
              {services.map((item) => {
                return (
                  <div className={item.id}>
                    <i className="far fa-gem diamond-stone"></i>
                    <div className="service-Content-section">
                      <h4 className="service-item-heading">{item.heading}</h4>
                      <p className="service-item-content">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
