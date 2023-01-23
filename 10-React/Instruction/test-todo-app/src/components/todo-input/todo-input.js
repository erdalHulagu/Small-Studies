import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);


  

  const handleAdd =  () => {
    if(!todo) return;
    addTodo(todo);
    setTodo("");
    setFocus();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const setFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    setFocus();
  }, []);

  return (
    <InputGroup>
      <Input
        onChange={(e) => setTodo(e.target.value)}
        onKeyUp={handleEnter}
        value={todo}
        innerRef={inputRef}
        placeholder="Type some text"
      />
      <Button onClick={handleAdd} disabled={!todo}>
        Add
      </Button>
    </InputGroup>
  );
};

export default TodoInput;
