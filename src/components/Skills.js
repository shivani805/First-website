import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="skillbar">
        <div className="skillbar-title" style={{ background: "#4e342e" }}>
          <span>{this.props.name}</span>
        </div>

        <div className="skillbar-bar" style={{ background: "#4e342e" }}></div>
        <div className="skill-bar-percent">{this.props.value}</div>
      </div>
    );
  }
}
