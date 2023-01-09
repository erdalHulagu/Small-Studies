import React from "react";

const Education = ({title, date, desc}) => {
  return (
    <div className="top-item resume-item">
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{desc}</p>
    </div>
  );
};

export default Education;
