import { FC } from "react";
import header from "../header/Header";

const contentProjects = () => {
  return <div>im projects</div>;
};

const Project: FC = (params: any) => {
  return (
    <div className="body">
      {header(params)}
      {contentProjects()}
    </div>
  );
};

export default Project;
