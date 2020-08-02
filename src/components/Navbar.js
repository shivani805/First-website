import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/home" className="App-link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="App-link">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/projects" className="App-link">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/blog" className="App-link">
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/contact" className="App-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </header>
      </nav>
    );
  }
}

export default Navbar;
