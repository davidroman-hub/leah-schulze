import React from "react";
import { useTranslation } from "react-i18next";
import slideShowProjects from "./SlideshowProjects";
import { useDispatch } from "react-redux";
import { setModalProject } from "../../redux/actions/projects/projects";
import AnimatedCursor from "react-animated-cursor";

const SetActions = () => {
  const dispatch = useDispatch();
  return {
    closeOpenModal: () => dispatch(setModalProject(false)),
  };
};

export const bodyInfoProject = (info: any): JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [t] = useTranslation("global");
  const { closeOpenModal } = SetActions();
  return (
    <section>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#e3dbe0",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "24px 24px  24px",
        }}
      >
        <div className="container-modal">
          <span
            className="general-modal-title mb-4"
            onClick={() => closeOpenModal()}
          >
            {"X"}
          </span>

          <div className="delete-loc-buttons-position">
            {slideShowProjects(info)}
          </div>
        </div>
      </div>
    </section>
  );
};
