import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div style={{ flexDirection: "column" }}>
        <div className="heading">Leave a message </div>
        <br></br>
        <form action="">
          <label className="tl">Your Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="type here"
            required
            data-error="Please enter your name"
          ></input>

          <br />
          <label className="tl">Your City</label>
          <br />
          <input
            type="text"
            name="city"
            placeholder="type here"
            required
            data-error="Please enter your city"
          ></input>
          <br />
          <label className="tl">Your Message</label>
          <br />
          <div style={{ flexDirection: "row" }}>
            <input
              type="text"
              name="message"
              placeholder="type here"
              style={{ height: "130px" }}
              required
              data-error="Please enter your message"
            ></input>
            <input
              type="submit"
              className="button2"
              value="Send"
              style={{ marginLeft: "350px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}
