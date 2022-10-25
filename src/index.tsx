import './styles/index.scss'
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './app/App'
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../src/store/index"

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
