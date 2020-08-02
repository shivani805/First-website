import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class Mylayout extends Component {
  render() {
    return (
      <>
        <div className="Border">
          <Navbar />

          {this.props.children}
        </div>
      </>
    );
  }
}
