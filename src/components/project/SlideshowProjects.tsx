import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideSHowPhoto2 from "../../styles/photos/slideshow/2.jpg";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducers";

const slideShowProjects = (info: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { projectInfo } = useSelector((state: State) => state.Home);

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const nextArrow = (
    <button
      style={{
        background: "none",
        border: "0px",
        width: "30px",
      }}
    >
      <svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  );

  const prevArrow = (
    <button
      style={{
        background: "none",
        border: "0px",
        width: "30px",
      }}
    >
      <svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  );

  return (
    <div className="slide-show-position">
      <Slide autoplay={false} nextArrow={nextArrow} prevArrow={prevArrow}>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${slideSHowPhoto2})` }}></div>
        </div>
      </Slide>

      <div className="project-description">
        <div className="project-title">{projectInfo.projectTitle}</div>
        <div className="description-text">{projectInfo.description}</div>
      </div>
    </div>
  );
};

export default slideShowProjects;
