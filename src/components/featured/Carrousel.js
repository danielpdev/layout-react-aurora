import React from "react";
import Slider from "react-slick";
import aurora1 from "../../resources/images/aurora1.jpg";
import aurora2 from "../../resources/images/aurora2.jpg";
import aurora3 from "../../resources/images/aurora3.jpg";

const Carrousel = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        {[aurora1, aurora2, aurora3].map((image, index) => {
          return (
            <div key="image" key={index}>
              <div
                className="carrousel_image"
                style={{
                  backgroundImage: `url(${image})`,
                  height: `${window.innerHeight}px`
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carrousel;
