import React from "react";

const SeeAll = () => {
  return (
    <div
      className="seeAll container row"
      id="WhyUs"
      style={{ margin: "6em auto" }}
    >
      <div className="seeAllLeft col-md-6">
        <h1 style={{ fontSize: "2em", fontFamily: "sans-serif" }}>
          We've done lot's of work, Let's<br></br>
          check some from here
        </h1>
      </div>
      <div className="seeAllRight col-md-6">
        <button
          className="btn"
          style={{
            padding: "1.2em",
            borderColor: "#00d747",
            fontSize: "1em",
            fontWeight: "300"
          }}
        >
          SEE ALL PROJECTS
        </button>
      </div>
    </div>
  );
};

export default SeeAll;
