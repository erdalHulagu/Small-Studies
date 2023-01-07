import React from "react";
import "./section-header.css";

const SectionHeader = ({ title, isButtonVisible }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {isButtonVisible && (
        <a
          href="#"
          className="resume-download"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Download"
        >
          <i className="fa fa-download" aria-hidden="true">
            {" "}
          </i>{" "}
          Download Resume
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
