import React from "react";
import Carousel from "react-multi-carousel";
import portfolio1 from "../Images/portfolio1.png";
import portfolio2 from "../Images/portfolio2.png";
import portfolio3 from "../Images/portfolio3.png";
import portfolio4 from "../Images/portfolio4.png";
import "react-multi-carousel/lib/styles.css";
import "./componentStyles/carousel.css";

const MultiCarousel = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="carousel">
      <Carousel
        arrows={true}
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px margin-left-40-px"
        // centerMode={true}
      >
        <div>
          <img className="pro pro-1" src={portfolio1} alt="por-1"></img>
        </div>
        <div>
          <img className="pro pro-1" src={portfolio2} alt="por-2"></img>
        </div>
        <div>
          <img className="pro pro-1" src={portfolio3} alt="por-3"></img>
        </div>
        <div>
          <img className="pro pro-1" src={portfolio4} alt="por-4"></img>
        </div>
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
