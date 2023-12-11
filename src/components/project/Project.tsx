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
import React from "react";

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imgLoad, setImgLoad] = React.useState(false);
  console.log(imgLoad);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    const loadImage = (src: string) =>
      new Promise((resolve, reject) => {
        setImgLoad(true);
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = reject;
        img.src = src;
      });
    loadImage(
      "https://res.cloudinary.com/da9n76ytf/image/upload/v1696520833/BLOOM%20NEW/nooooo_suxdcb.jpg"
    ).then((image: any) => {
      setTimeout(() => {
        setImgLoad(false);
      }, 2000);
      return image;
    });
  }, []);

  return workInfo?.map((info: any, indx: any) => (
    <li key={indx} className="cards_item">
      <div className="card-item">
        <div className="card_image">
          <img
            src={info.projectPhoto}
            onClick={() => setProject(info)}
            className="card-img-project"
            alt=".."
          />
        </div>
        <div className="info-project">
          <span>{info.projectTitle}</span>
        </div>
      </div>
    </li>
  ));
};

const contentProjects = (isProjectActive: boolean) => {
  const workInfo = [
    {
      projectTitle: "Where everything is blooming",
      description:
        "Every year a flower fair takes place in Medellín, Colombia. Inspired by this tradition, I had the chance to design flower workshops for people with dementia in various elderly homes in Medellín. As the majority of my clients were from Medellín, flowers played a vivid role in their past due to the fair. Even though the clients suffer from memory loss, often specific cultural traditions stay in the brain. The workshops were a great way of activation and stimulation of fine motor skills as well as connecting to old memories. During the workshop beautiful art pieces made of flowers emerged. We finally exhibited these pieces during the week of the fair, aiming to raise awareness about dementia as well as giving people with dementia a podium. With this work I want to show how diseases, which affect the brain, do not at all exclude the creation of stunning art. Working with people with dementia on a different continent has been a rewarding experience, which essentially supported me developing as a social designer. ",
      projectPhoto: `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520836/BLOOM%20NEW/%C3%BC%C3%BC%C3%BC%C3%BC%C3%BC%C3%BC_izsvc9.jpg`,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520836/BLOOM%20NEW/%C3%BC%C3%BC%C3%BC%C3%BC%C3%BC%C3%BC_izsvc9.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520833/BLOOM%20NEW/nooooo_suxdcb.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520830/BLOOM%20NEW/M3-min_m8rbyw.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520827/BLOOM%20NEW/M2-min_iceiiu.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520826/BLOOM%20NEW/B2-min_fxd1ba.jpg`,
      ],
    },
    {
      projectTitle: "What I can create with my hands ",
      description: `As part of the "Young Art and New Paths" scholarship program of the Bavarian State Ministry for Art and Culture, everyday objects were created of clay with people with dementia, during a three-month creative project. The workshop participants mainly created vases, cutlery and bowls. The everyday objects ensured a maximum relation to the participant’s life. In a final exhibition, the artworks, written experiences and photographs of the workshops were presented. An important part of the project was the exchange and cooperation with nurses. They were interviewed about dementia and also presented with quotes and short portraits. The aim of the project was creative support geared towards dementia. The ones affected should be stimulated and given access to their creative power. I wanted to support them in creating objects that fill them with pride and which also give them recognition from the outside. Some of the artists were present at the vernissage of the exhibition. This was a great opportunity to raise awareness about  dementia. With this project I want to point out how individual the course of dementia can be. I want to break common stigmas and show how exciting it is to work with people with dementia. I'm fascinated by the wonderful people behind the label "dementia". The exhibition is intended to offer those affected a podium and thus contribute to their social integration. `,
      projectPhoto: `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521046/HANDS%20NEW/Herr_k%C3%A4ser1-min_ss1hyr.jpg`,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521046/HANDS%20NEW/Herr_k%C3%A4ser1-min_ss1hyr.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521376/HANDS%20NEW/blume33_rnhmtl.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521050/HANDS%20NEW/SCHMAD-min_ejfpqc.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521363/HANDS%20NEW/blume1_w9ryox.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521048/HANDS%20NEW/SCHINDEL_____Kopie-min_u2jez3.jpg`,
      ],
    },
    {
      projectTitle: "CLINK",
      description: `Approximately more than 50 million people are affected by dementia worldwide. Dementia brings a painful loss of verbal communication and interaction. Clink is an interactive communication tool that offers people with dementia and their families a new and playful way to interact with each other. Clink works without any pressure to succeed - but with the chance to provide a feeling of achievement and joy. By attaching the pieces made of wood and steel to each other with magnets, fanciful new forms can be created endlessly. This can happen freely or with the help of a playful instruction booklet. While Clink does not aim to cure dementia, it offers an innovative and lively approach to handling the brain‘s maladies. It is designed to experience ease, playfulness and encouraging entertainment. While cognitive stimulation is critical for the therapy of people suffering from dementia, Clink helps create precious moments for all parties involved. Playing with the Clink products works cross-generationally, creating a bond between the old and the young. It is an approach on how future societies can integrate the elderly and fragile into a well-functioning society prospectively. `,
      projectPhoto: `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521508/CLINK%20NEW/CMYK_2-min_xw9ccg.jpg`,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521508/CLINK%20NEW/CMYK_2-min_xw9ccg.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521518/CLINK%20NEW/CMYK_6-min_f56ote.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521506/CLINK%20NEW/CMYK_1-min_hryv19.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521515/CLINK%20NEW/CMYK_5-min_pllak6.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1692293931/Fotos/Fotos%20Clink%201.0/compressjpeg-3/CMYK_5-min_rav1b1.jpghttps://res.cloudinary.com/da9n76ytf/image/upload/v1696521511/CLINK%20NEW/CMYK_3-min_ltswqt.jpg/ facecard6`,
      ],
    },
    {
      projectTitle: "Artist Residency - Narva, Estonia ",
      description: `The city of Narva, located in northern part of Estonia, has been one of the capitals of textile production during the times of the Soviet Union. Like this a high percentage of the elderly population has been dedicating their professional life to working with textiles. As part of an artist in residency program I had the chance to work with people with dementia on a three months textile project. Together we have been exploring the world of textiles in various workshops. These workshops were aiming to integrate techniques such as weaving and cutting to stimulate the muscle memory as well as activating the brain with a known material. Cooperating with the nurses helped to create a vivid exchange of knowledge and experience`,
      projectPhoto: `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520546/NARVA%20NEW/neu_neu_l5hl6s.jpg`,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520546/NARVA%20NEW/neu_neu_l5hl6s.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520544/NARVA%20NEW/NEU_Kopie_nxkrlp.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520541/NARVA%20NEW/narvaaaaaaa_ucathw.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520540/NARVA%20NEW/DSC00847_bzvvz4.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696520537/NARVA%20NEW/bearbeitet_3_cf6qya.jpg`,
      ],
    },

    {
      projectTitle: "Turnit",
      description: `Turnit Games are one of the easiest ways to bring joy and happiness to people. Turnit is a toolkit designed for people with dementia. It is made of screwable aluminium pieces as well as bendable rope. The pieces can be combined endlessly. Interesting color combinations as well as fanciful forms and objects can be created in cooperation with a partner. The toolkit is designed to work nonverbally, thus replacing verbal communication with a new way of interaction. The toys can be used by anyone - irrespective of one’s age, fitness or cultural background. Dementia is agonizing for everyone involved. This is why Turnit is meant to be enjoyed by both parties equally. While stimulating the senses, it is designed to bring focus to the little happy moments of cohesion and love when needed most.`,
      projectPhoto: `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521630/TURNIT%20NEW/Leah_210614_58-min_kqlhrk.jpg`,
      photos: [
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521630/TURNIT%20NEW/Leah_210614_58-min_kqlhrk.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521627/TURNIT%20NEW/Leah_210614_42-min_egiaxq.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521623/TURNIT%20NEW/clink_2.0_comp2_rqqhmi.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521620/TURNIT%20NEW/Clink_2.0_comp_wjuaol.jpg`,
        `https://res.cloudinary.com/da9n76ytf/image/upload/v1696521618/TURNIT%20NEW/clink_2.0_comp_3_v1hdok.jpg`,
      ],
    },
  ];
  const bodyModal = bodyInfoProject(workInfo);

  return (
    <div className="">
      <ul className="project-cards"> {mediaCard(workInfo)}</ul>
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
