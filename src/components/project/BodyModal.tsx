import React from "react";
import { useTranslation } from "react-i18next";
import slideShowProjects from "./SlideshowProjects";
import { useDispatch } from "react-redux";
import { setModalProject } from "../../redux/actions/projects/projects";

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
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "95vh",
          backgroundColor: "red",
          border: `2px solid blue`,
          borderRadius: "4px",
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
