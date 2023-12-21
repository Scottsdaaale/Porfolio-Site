import "bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
