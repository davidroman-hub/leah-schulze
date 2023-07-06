import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { State } from "./redux/index";
import { useDispatch, useSelector } from "react-redux";
import { setHome } from "./redux/actions/home/home";

const SetActions = () => {
  const dispatch = useDispatch();
  return {
    setHome: (visible: boolean) => dispatch(setHome(visible)),
  };
};

function App() {
  const { home } = useSelector((state: State) => state.Home);
  const { setHome } = SetActions();

  const setHomie = () => {
    if (home) {
      setHome(false);
    } else {
      setHome(true);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {home ? <img src={logo} className="App-logo" alt="logo" /> : "caca"}
        <p>
          {home}
          <button onClick={() => setHomie()}>{home}</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {home}
        </a>
      </header>
    </div>
  );
}

export default App;
