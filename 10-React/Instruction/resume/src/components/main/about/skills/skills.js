import React from "react";
import Skill from "./skill";
import "./skills.css";
import skills from "./skills.json";

const Skills = () => {
  return (
    <div className="skills">
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6 col-sm-6 col-xs-12 item" key={index}>
            <Skill name={skill.tool} value={skill.rate} />
          </div>
        ) )}
      </div>
    </div>
  );
};

export default Skills;
