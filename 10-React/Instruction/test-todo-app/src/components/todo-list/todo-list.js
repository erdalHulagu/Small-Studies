import React from "react";
import "./todo-list.css";

const TodoList = ({ todos, setState, removeTodo }) => {

  const handleRemove = (e, id) => { 
    e.stopPropagation();
    const result = window.confirm("Are you sure to delete");
    if(result) removeTodo(id);
   }

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li
          key={item.id}
          onClick={() => setState(item.id)}
          className={item.completed ? "completed" : ""}
        >
          {item.title}{" "}
          <button className="del" onClick={(e) => handleRemove(e,item.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
