import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Hello, My name is John Doe. Lorem ipsum dolor sit amet, usu sumo dicant
        vulputate in. Quando fabellas adipiscing nam an. An vis congue oporteat,
        no eros facer suavitate eos. An debet affert aliquid ius. Veritus
        placerat est ea, est ne nominavi suscipit maluisset.
      </p>

      <ul className="info">
        <li>
          <strong>Birthday:</strong> August 14, 1982
        </li>
        <li>
          <strong>Location:</strong> Central Main Rd, Australia
        </li>
        <li>
          <strong>Email:</strong> contact@yourmail.com
        </li>
        <li>
          <strong>Phone:</strong> +111 1234-1234
        </li>
      </ul>
    </div>
  );
};

export default Intro;
