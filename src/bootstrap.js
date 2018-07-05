import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {
  BrowserRouter,
  Route,
  IndexRoute,
  hashHistory
} from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";

import Home from "./components/pages/home";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter history={hashHistory}>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
