import React, { Component } from "react";

import { Redirect } from "react-router-dom";

export default class MainPart extends Component {
  state = { redirect: false };
  setRedirect = () => {
    this.setState({ redirect: true });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/about" />;
    }
  };
  render() {
    return (
      <>
        <main className="line anim-typewriter">
          <div className="anim-text">
            SHIVANI PANDA<p>" Developer \ Coder "</p>
          </div>
        </main>
        {this.renderRedirect()}
        <button style={{ margin: "200px" }} onClick={this.setRedirect}>
          About Me
        </button>
      </>
    );
  }
}
