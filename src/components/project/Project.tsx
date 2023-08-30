import { FC } from "react";
import header from "../header/Header";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Modal } from "@mui/material";
import { bodyInfoProject } from "./BodyModal";

import facecard1 from "../../styles/photos/projects/project1/1p1.jpg";
import facecard1p2 from "../../styles/photos/projects/project2/1p2.jpg";

import { useDispatch, useSelector } from "react-redux";

import {
  setInfoProject,
  setModalProject,
} from "../../redux/actions/projects/projects";
import { State } from "../../redux/reducers";

const SetActions = () => {
  const dispatch = useDispatch();
  return {
    setProject: (info: any) => {
      dispatch(setInfoProject(info));
      dispatch(setModalProject(true));
    },
  };
};

const mediaCard = (workInfo: any) => {
  const { setProject } = SetActions();

  return workInfo?.map((info: any, indx: any) => (
    <div key={indx} className="card-work">
      <Card sx={{ height: 300, width: 450, marginLeft: "30px" }}>
        <CardActionArea onClick={() => setProject(info)}>
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

const contentProjects = (isProjectActive: boolean) => {
  const workInfo = [
    {
      projectTitle: "Where everything is blooming",
      description:
        "Every year a flower fair takes place in Medellín, Colombia. Inspired by this tradition, I had the chance to design flower workshops for people with dementia in various elderly homes in Medellín. As the majority of my clients were from Medellín, flowers played a vivid role in their past due to the fair. Even though the clients suffer from memory loss, often specific cultural traditions stay in the brain. The workshops were a great way of activation and stimulation of fine motor skills as well as connecting to old memories. During the workshop beautiful art pieces made of flowers emerged. We finally exhibited these pieces during the week of the fair, aiming to raise awareness about dementia as well as giving people with dementia a podium. With this work I want to show how diseases, which affect the brain, do not at all exclude the creation of stunning art. Working with people with dementia on a different continent has been a rewarding experience, which essentially supported me developing as a social designer. ",
      projectPhoto: facecard1,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296776/Fotos/Bloom/hand_Kopie_svsgpz.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296772/Fotos/Bloom/leute_2_tabt33.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296771/Fotos/Bloom/IMG_0052_uygyvs.jpg`,
        // `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296765/Fotos/Bloom/IMG_0364_kggnj4.heic`,
        // `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296762/Fotos/Bloom/IMG_0273_g78mol.heic`,
      ],
    },
    {
      projectTitle: "What I can create with my hands ",
      description: `As part of the "Young Art and New Paths" scholarship program of the Bavarian State Ministry for Art and Culture, everyday objects were created of clay with people with dementia, during a three-month creative project. The workshop participants mainly created vases, cutlery and bowls. The everyday objects ensured a maximum relation to the participant’s life. In a final exhibition, the artworks, written experiences and photographs of the workshops were presented. An important part of the project was the exchange and cooperation with nurses. They were interviewed about dementia and also presented with quotes and short portraits. The aim of the project was creative support geared towards dementia. The ones affected should be stimulated and given access to their creative power. I wanted to support them in creating objects that fill them with pride and which also give them recognition from the outside. Some of the artists were present at the vernissage of the exhibition. This was a great opportunity to raise awareness about  dementia. With this project I want to point out how individual the course of dementia can be. I want to break common stigmas and show how exciting it is to work with people with dementia. I'm fascinated by the wonderful people behind the label "dementia". The exhibition is intended to offer those affected a podium and thus contribute to their social integration. `,
      projectPhoto: facecard1p2,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296685/Fotos/Hands/SCHINDEL_____Kopie-min_mz4zit.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296684/Fotos/Hands/Herr_k%C3%A4ser1-min_jwqdg9.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296684/Fotos/Hands/_DSF8396_oyvgyc.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296681/Fotos/Hands/SCHMAD-min_enawzr.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692296686/Fotos/Hands/_DSF8386_mxhmok.jpg`,
      ],
    },
    {
      projectTitle: "CLINK",
      description: `Approximately more than 50 million people are affected by dementia worldwide. Dementia brings a painful loss of verbal communication and interaction. Clink is an interactive communication tool that offers people with dementia and their families a new and playful way to interact with each other. Clink works without any pressure to succeed - but with the chance to provide a feeling of achievement and joy. By attaching the pieces made of wood and steel to each other with magnets, fanciful new forms can be created endlessly. This can happen freely or with the help of a playful instruction booklet. While Clink does not aim to cure dementia, it offers an innovative and lively approach to handling the brain‘s maladies. It is designed to experience ease, playfulness and encouraging entertainment. While cognitive stimulation is critical for the therapy of people suffering from dementia, Clink helps create precious moments for all parties involved. Playing with the Clink products works cross-generationally, creating a bond between the old and the young. It is an approach on how future societies can integrate the elderly and fragile into a well-functioning society prospectively. `,
      projectPhoto: `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294093/Fotos/Fotos%20Clink%201.0/compressjpeg-3/CMYK_6-min_id0dnk.jpg`,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294093/Fotos/Fotos%20Clink%201.0/compressjpeg-3/CMYK_6-min_id0dnk.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294026/Fotos/Fotos%20Clink%201.0/compressjpeg-3/CMYK_3-min_vrgept.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692293999/Fotos/Fotos%20Clink%201.0/compressjpeg-3/CMYK_2-min_bgjtha.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692293964/Fotos/Fotos%20Clink%201.0/compressjpeg-3/CMYK_1-min_p17xfd.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692293931/Fotos/Fotos%20Clink%201.0/compressjpeg-3/CMYK_5-min_rav1b1.jpg`,
        // facecard6,
        // facecard7,
        // facecard8,
      ],
    },
    {
      projectTitle: "Artist Residency - Narva, Estonia ",
      description: `The city of Narva, located in northern part of Estonia, has been one of the capitals of textile production during the times of the Soviet Union. Like this a high percentage of the elderly population has been dedicating their professional life to working with textiles. As part of an artist in residency program I had the chance to work with people with dementia on a three months textile project. Together we have been exploring the world of textiles in various workshops. These workshops were aiming to integrate techniques such as weaving and cutting to stimulate the muscle memory as well as activating the brain with a known material. Cooperating with the nurses helped to create a vivid exchange of knowledge and experience`,
      projectPhoto: `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294086/Fotos/Narva/bearbeitet_3_oftwq3.jpg`,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294089/Fotos/Narva/NEW_tqqwgp.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294086/Fotos/Narva/bearbeitet_3_oftwq3.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294079/Fotos/Narva/New_new_new_ckihqq.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294069/Fotos/Narva/DSC00847_cxacg4.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294061/Fotos/Narva/NEU_Kopie_qgjl29.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692294052/Fotos/Narva/neu_neu_qgxsyq.jpg`,
        // facecard7,
        // facecard8,
      ],
    },
  ];
  const bodyModal = bodyInfoProject(workInfo);
  return (
    <div className="work-container">
      <div className="work-cards-pos">{mediaCard(workInfo)}</div>
      <Modal open={isProjectActive}>{bodyModal}</Modal>
    </div>
  );
};

const Project: FC = (params: any) => {
  const { isProjectActive } = useSelector((state: State) => state.Home);
  return (
    <div className="body">
      {header(params)}
      {contentProjects(isProjectActive)}
    </div>
  );
};

export default Project;
