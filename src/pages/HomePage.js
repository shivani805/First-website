import React, { Component } from "react";
import LastPart from "../components/LastPart";
import MainPart from "../components/MainPart";
export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="imgg">
          <img
            src="Untitled3 (2).png"
            alt="myimage"
            height="536px"
            width="297px"
          ></img>
        </div>
        <div className="App-body" style={{ flexDirection: "column" }}>
          <div style={{ height: "31vh" }}>
            <MainPart />
          </div>
          <div style={{ height: "31vh" }}>
            <LastPart />
          </div>
        </div>
      </>
    );
  }
}
