import React from "react";
import { useTranslation } from "react-i18next";
import slideShowProjects from "./SlideshowProjects";

export const bodyInfoProject = (info: any): JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [t] = useTranslation("global");

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
          <span className="general-modal-title mb-4">
            {t("AlertVersion.Detected")}
          </span>

          <div className="delete-loc-buttons-position">
            {slideShowProjects(info)}
          </div>
        </div>
      </div>
    </section>
  );
};
