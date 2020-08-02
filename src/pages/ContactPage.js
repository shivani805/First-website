import React, { Component } from "react";
import Message from "../components/Message";
import FindMe from "../components/FindMe";

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <div
          className="App-body"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Message />
          <FindMe />
        </div>
      </>
    );
  }
}
