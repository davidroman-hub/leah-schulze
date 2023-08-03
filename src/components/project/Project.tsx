import { FC } from "react";
import header from "../header/Header";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Modal } from "@mui/material";
import { bodyInfoProject } from "./BodyModal";

import facecard1 from "../../styles/photos/projects/project1/1p1.jpg";
import facecard2 from "../../styles/photos/projects/project1/2p1.jpg";
import facecard3 from "../../styles/photos/projects/project1/3p1.jpg";
import facecard4 from "../../styles/photos/projects/project1/4p1.jpg";
import facecard5 from "../../styles/photos/projects/project1/5p1.jpg";
import facecard6 from "../../styles/photos/projects/project1/6p1.jpg";
import facecard7 from "../../styles/photos/projects/project1/7p1.jpg";
import facecard8 from "../../styles/photos/projects/project1/8p1.jpg";

const mediaCard = (workInfo: any) => {
  return workInfo.map((info: any, indx: any) => (
    <div key={indx} className="card-work">
      <Card sx={{ height: 300, width: 450, marginLeft: "30px" }}>
        <CardActionArea onClick={() => console.log("holiii")}>
          <CardMedia
            sx={{ height: 300 }}
            image={info.projectPhoto}
            title={info.projectTitle}
          />
        </CardActionArea>
      </Card>
      <div className="info-project">
        <span>{info.projectTitle}</span>
      </div>
    </div>
  ));
};

const contentProjects = () => {
  const workInfo = [
    {
      projectTitle: "title P 1",
      projectPhoto: facecard1,
      photos: [
        facecard1,
        facecard2,
        facecard3,
        facecard4,
        facecard5,
        facecard6,
        facecard7,
        facecard8,
      ],
    },
    {
      projectTitle: "title P 2",
      projectPhoto: facecard1,
      photos: [
        facecard1,
        facecard2,
        facecard3,
        facecard4,
        facecard5,
        facecard6,
        facecard7,
        facecard8,
      ],
    },
    {
      projectTitle: "title P 3",
      projectPhoto: facecard1,
      photos: [
        facecard1,
        facecard2,
        facecard3,
        facecard4,
        facecard5,
        facecard6,
        facecard7,
        facecard8,
      ],
    },
    {
      projectTitle: "title P 4",
      projectPhoto: facecard1,
      photos: [
        facecard1,
        facecard2,
        facecard3,
        facecard4,
        facecard5,
        facecard6,
        facecard7,
        facecard8,
      ],
    },
  ];
  const bodyModal = bodyInfoProject(workInfo);
  return (
    <div className="work-container">
      <div className="work-cards-pos">{mediaCard(workInfo)}</div>
      <Modal open={true}>{bodyModal}</Modal>
    </div>
  );
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
