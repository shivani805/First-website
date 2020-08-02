import React, { Component } from "react";
import Projects from "../components/Projects";

export default class ProjectsPage extends Component {
  render() {
    return (
      <>
        <div className="heading">My Projects !</div>
        <Projects id="1" name="Desktop-Application" img="comp.png" />
        <Projects id="2" name="ELibrary-Application" img="logo-black.png" />
        <Projects
          id="3"
          name="Hotel-Management-Application"
          img="City-Hotel-icon.png"
        />
      </>
    );
  }
}
