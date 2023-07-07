import React, { FC } from "react";

import { State } from "../../redux/index";

import { useDispatch, useSelector } from "react-redux";
import { setHome } from "../../redux/actions/home/home";
import { useTranslation } from "react-i18next";
import header from "../header/Header";
import slideShow from "../slideShow/SlideShow";

const SetActions = () => {
  const dispatch = useDispatch();
  return {
    setHome: (visible: boolean) => dispatch(setHome(visible)),
  };
};
const Home: FC = (params: any) => {
  const [t, i18n] = useTranslation("global");
  const { setHome } = SetActions();
  const { home } = useSelector((state: State) => state.Home);

  const setHomie = () => {
    if (home) {
      setHome(false);
      i18n.changeLanguage("de");
    } else {
      setHome(true);
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className="body">
      {header(params)}
      {slideShow()}
    </div>
  );
};

export default Home;
