import React from "react";
import "./welcome.scss";

/*
 // 1.yontem

const Welcome = (props) => {
  return (
    <div className="welcome">
      <h2>
        Welcome {props.firstName} {props.lastName}
      </h2>
    </div>
  );
};

*/

/*
    // 2.yontem
const Welcome = (props) => {
    const { firstName, lastName } = props; //destructing
    return (
      <div className="welcome">
        <h2>
          Welcome {firstName} {lastName}
        </h2>
      </div>
    );
  };

*/

// 3.yontem
const Welcome = ({ firstName, lastName }) => {
  return (
    <div className="welcome">
      <h2>
        Welcome {firstName} {lastName}
      </h2>
    </div>
  );
};

export default Welcome;
