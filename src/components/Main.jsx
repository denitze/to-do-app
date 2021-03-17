import TodoForm from "./TodoForm";
import React, { useState } from "react";
import List from "./List";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState();

  const handleAdd = (incomingTodo) => {
    const newTodo = {
      task: incomingTodo,
      id: Date.now(),
      isComplete: false,
    };
    const newTodos = [newTodo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const handleDelete = (myTodo) => {
    const deleteArray = [...todos].filter((todo) => todo !== myTodo);
    setTodos(deleteArray);
  };

  const handleComplete = (myTodo) => {
    const completeArray = todos.map((todo) => {
      if (todo.id === myTodo.id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(completeArray);
  };

  const handleCurrentEdit = (myTodo) => {
    setCurrentEdit(myTodo);
  };

  const handleUpdate = (myTodo, newText) => {
    let updateTodos = todos.map((todo) => {
      if (todo === myTodo) {
        todo.task = newText;
      }
      return todo;
    });
    console.log(updateTodos);
    setTodos(updateTodos);
    setCurrentEdit();
  };

  return (
    <section className="main-wrapper">
      <h1>Hallo neue Todoliste! </h1>
      <TodoForm onSubmit={handleAdd} todos={todos} />
      <List
        todos={todos}
        currentEdit={currentEdit}
        onTodoUpdate={handleUpdate}
        onTodoCurrentEdit={handleCurrentEdit}
        onTodoDeletion={handleDelete}
        onTodoCompletion={handleComplete}
      />
    </section>
  );
};

export default Main;
