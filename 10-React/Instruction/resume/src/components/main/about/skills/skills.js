import React from "react";
import Skill from "./skill";
import "./skills.css"

const Skills = () => {
  return (
    <div className="skills">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 item">
            <Skill/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
