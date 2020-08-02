import React, { Component } from "react";
import Skills from "../components/Skills";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <div className="heading">a whole page just about me!</div>
        <p>
          HEY !<br></br>
          This is shivani a enthusiastic developer living in Raipur.I have a
          degree in BE(CSE) from CSVTU University.Currently i am doing
          internship on React programmming language and enjoyed very much when
          working on projects and trying to upgrade my skills more to more . I
          have done some projects that's created by myself based on Core Java
          and Advance Java and also on Reactjs programming languages."
        </p>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="hl">Skills :</div>

          <div className="hl" style={{ marginLeft: "800px" }}>
            Experience :
          </div>
        </div>
        <br></br>
        <Skills value="85%" name="java" />
        <Skills value="70%" name="html" />
        <Skills value="75%" name="javascript" />
        <Skills value="80%" name="mysql" />
      </>
    );
  }
}
