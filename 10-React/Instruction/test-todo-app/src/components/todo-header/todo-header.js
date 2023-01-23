import React from "react";
import { Link } from "react-router-dom";
import "./todo-header.css";

const TodoHeader = ({title}) => {
  return (
    <div className="header">
          <h1>{title}</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/comments">Comments</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>  
          </nav>

    </div>
  );
};

export default React.memo(TodoHeader);
