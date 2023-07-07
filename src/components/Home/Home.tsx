import React, { FC } from "react";

import { State } from "../../redux/index";

import { useDispatch, useSelector } from "react-redux";
import { setHome } from "../../redux/actions/home/home";
import { useTranslation } from "react-i18next";

const SetActions = () => {
    const dispatch = useDispatch();
    return {
      setHome: (visible: boolean) => dispatch(setHome(visible)),
    };
  };
const Home: FC = () => {
    
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
  return <div className="App">
  <header className="App-header">
    {home ? 'pipissssss' : "caca"}
    <div>
      <button onClick={() => setHomie()}>{t("Home.hello")}</button>
    </div>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
    </a>
  </header>
</div>;
};

export default Home;
