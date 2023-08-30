import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideSHowPhoto2 from "../../styles/photos/slideshow/2.jpg";
import slideSHowPhoto3 from "../../styles/photos/slideshow/3.jpg";
import slideSHowPhoto4 from "../../styles/photos/slideshow/4.jpg";
import slideSHowPhoto5 from "../../styles/photos/slideshow/5.jpg";

const images = [
  slideSHowPhoto2,
  slideSHowPhoto3,
  slideSHowPhoto4,
  slideSHowPhoto5,
];

const slideShow = () => {
  return (
    <div>
      <Slide arrows={false}>
        {images.map((images) => (
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${images})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default slideShow;
