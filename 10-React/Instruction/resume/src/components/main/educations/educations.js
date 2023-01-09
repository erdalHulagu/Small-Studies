import React from "react";
import SectionHeader from "../section-header/section-header";
import Education from "./education";
import educations from "./educations.json";

const Educations = () => {
  return (
    <section id="education" className="resume">
      <SectionHeader title="Educations" isButtonVisible={false} />
      <div className="row">
        {educations.map((edu, i) => (
          <div className="col-md-12 col-sm-12 col-xs-12" key={i}>
            <Education {...edu}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
