import React from "react";

const Skill = () => {
  return (
    <>
      <div className="skill-info clearfix">
        <h3 className="pull-left">Photoshop</h3>
        <span className="pull-right">90%</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "90%" }}
        ></div>
      </div>
    </>
  );
};

export default Skill;
