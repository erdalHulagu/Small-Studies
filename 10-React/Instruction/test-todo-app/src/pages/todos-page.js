import React, { useCallback, useState } from "react";
import { Container } from "reactstrap";
import TodoHeader from "../components/todo-header/todo-header";
import TodoInput from "../components/todo-input/todo-input";
import TodoList from "../components/todo-list/todo-list";
import TodoStatus from "../components/todo-status/todo-status";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: title,
        completed: false,
      },
    ]);
  });

  const removeTodo = useCallback((id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  });

  const setState = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setTodos(newTodos);
  };

  return (
    <Container className="mt-5">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} setState={setState} removeTodo={removeTodo} />
      <TodoStatus count={todos.filter((item) => !item.completed).length} />
    </Container>
  );
};

export default TodosPage;
