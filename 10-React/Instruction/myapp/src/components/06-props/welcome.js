import React from 'react'
import "./welcome.scss";

const Welcome = (props) => {
  return (
    <div className="welcome">
        <h2>Welcome {props.firstName} {props.lastName}</h2>
    </div>
  )
}

export default Welcome