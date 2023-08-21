import React, { FC } from "react";
import header from "../header/Header";

const bodyAbout = () => {
  return (
    <div>
      <div>About</div>
      <div>Photo</div>
    </div>
  );
};

const About: FC = (params: any) => {
  return (
    <div className="body">
      {header(params)}
      {bodyAbout()}{" "}
    </div>
  );
};

export default About;
