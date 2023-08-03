import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideShowProjects = (info: any) => {
  console.log(info.map((hh: any) => hh.photos.map((h: any) => h)));
  return <div></div>;
};

export default slideShowProjects;
