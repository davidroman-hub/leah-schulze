import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';

import { I18nextProvider } from 'react-i18next';
import i18next from './translate';
import './index.css';

import "./styles/GlobalStyles.scss";
import "./styles/fonts/HelveticaLeah-regular.ttf"

const { store, persistor } = configureStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </PersistGate>
  </Provider>
);

