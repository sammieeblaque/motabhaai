import React from "react";
import c1 from "../images/c1.jpg";

export default function Carousel() {
  return (
    <div>
      <div className="slider">
        <figure>
          {/* Using one image for all sliders because of limited time to find pictures of the same size */}
          <img src={c1} alt="hala" />
          <img src={c1} alt="hala" />
          <img src={c1} alt="hala" />
          <img src={c1} alt="hala" />
          <img src={c1} alt="hala" />
        </figure>
      </div>
    </div>
  );
}
