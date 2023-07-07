import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideSHowPhoto2 from "../../styles/photos/slideshow/2.jpg";
import slideSHowPhoto3 from "../../styles/photos/slideshow/3.jpg";
import slideSHowPhoto4 from "../../styles/photos/slideshow/4.jpg";
import slideSHowPhoto5 from "../../styles/photos/slideshow/5.jpg";


const slideShow = () => {

  return (
    <div>
      <Fade duration={4000} arrows={false}>
        <div className="each-slide">
          <div>
            <img src={slideSHowPhoto4} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={slideSHowPhoto3} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={slideSHowPhoto5} />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={slideSHowPhoto2} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default slideShow;
