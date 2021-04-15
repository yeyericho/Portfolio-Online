import React, { Component } from "react";
import "./Sidebar.css";
import foto from "./user-rounded-icon.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <img src={foto} alt="Bapak" width="80%" height="80%" ></img>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skill">Skill</a>
        <a href="#awards">Awards</a>
        <a href="#experience">Experience</a>
        <a href="#interest">Interest</a>
        <a href="www.github.com"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    );
  }
}

export default Sidebar;