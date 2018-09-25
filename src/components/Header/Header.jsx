import React from "react";
import "./index.css";
import logo from "./../../img/logo.svg";

export default props => (
  <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
    <a href="/">
      <img className="logo" src={logo} alt="logo" />
    </a>
    <h4 className="label">{props.text}</h4>
  </div>
);
