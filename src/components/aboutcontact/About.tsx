import React, { FC } from "react";
import header from "../header/Header";
import AboutPhoto from "../../styles/photos/about/about.jpg";

const bodyAbout = () => {
  return (
    <div className="about-pos">
      <div className="info-about">
        My name is Leah and I am a social designer specializing in dementia.
        During my design studies in the Netherlands I developed my interest for
        dealing with age in our modern society. I am particularly concerned with
        geriatric diseases such as dementia as well as loneliness and poverty in
        old age and care. A creative approach is extremely meaningful and
        sustainable when it comes to activating, informing and inspiring people.
        So I like to solve social problems creatively and provide interactive
        opportunities that bring people closer to each other with the help of
        art and design. After an apprenticeship as a dementia assistant, various
        hospitations in dementia establishments, as well as creative works for
        organizations related to dementia, I keep on developing my creative
        practice in this field. My approach is interdisciplinary, empathetic and
        creative. The aims of my work are: offer people with dementia a form of
        expressing themselves, achieve social integration, and raise awareness
        about this disease in particular and about dealing with age in general.
        I am currently giving creative workshops to people suffering from
        dementia in Medellin, Colombia.
      </div>

      <img className="about-photo-div" src={AboutPhoto} alt="About" />
    </div>
  );
};

const About: FC = (params: any) => {
  return (
    <div className="body">
      {header(params)}
      {bodyAbout()}
    </div>
  );
};

export default About;
