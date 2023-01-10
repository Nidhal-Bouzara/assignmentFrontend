import React from "react";
import { createRoot } from "react-dom/client";
import ModalContainer from './containers/Modal';
import Plans from './modules/Plans';
import Modals from './modules/Modals';
import "./styles.css";
import {Provider} from 'react-redux'
import store from "./store/store";

const container = document.getElementById("root") as Element;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <h1>Zenfit Meal [v2]</h1>
      <ModalContainer.Provider>
        <Plans/>
        <Modals/>
      </ModalContainer.Provider>
  </Provider>
);
