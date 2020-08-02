import React, { Component } from "react";

export default class FindMe extends Component {
  render() {
    return (
      <div className="center">
        <div className="left-contact">
          <div className="media cont-line">
            <i className="fa fa-location-arrow"></i>

            <div class="media-body dit-right">
              <p>Address :</p>
              <p>Near New Nagar Palika Birgaon Raipur, India</p>
            </div>
          </div>
          <div class="media cont-line">
            <i class="fa fa-envelope" aria-hidden="true"></i>

            <div class="media-body dit-right">
              <p>Email :</p>
              <a href="/#">shivanipanda30@gmail.com</a>
              <br />
              <a href="/#">demoinfo@gmail.com</a>
            </div>
          </div>
          <div class="media cont-line">
            <i class="fa fa-volume-control-phone" aria-hidden="true"></i>

            <div class="media-body dit-right">
              <p>Contact Number :</p>
              <a href="/#">12345 67890</a>
              <br />
              <a href="/#">12345 67890</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
