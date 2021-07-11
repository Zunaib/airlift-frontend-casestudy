import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles/main.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
