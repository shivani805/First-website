import React from "react";

const Projects = (props) => {
  return (
    <div>
      <div className="transbox1">
        <img src={props.img} alt="/#" height="100px"></img>
        <div className="hl">{props.name}</div>
      </div>
    </div>
  );
};
export default Projects;
