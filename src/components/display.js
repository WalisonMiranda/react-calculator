import React, { Component } from "react";
import Battery from "./battery";
import "./display.css";

export default class Display extends Component {
  render() {
    return (
      <div className={"display"}>
        <Battery />
        {this.props.value}
      </div>
    );
  }
}
