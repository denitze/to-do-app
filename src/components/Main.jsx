import TodoForm from "./TodoForm";
import React, { useState } from "react";
import List from "./List";
import Buttons from "./Buttons";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState();

  const handleAdd = (myTodo) => {
    const newTodo = {
      task: myTodo,
      id: Date.now(),
      isComplete: false,
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const handleDelete = (myTodo) => {
    const deleteArray = [...todos].filter((todo) => todo !== myTodo);
    setTodos(deleteArray);
  };

  const handleComplete = (myTodo) => {
    const completedArr = todos.map((todo) => {
      if (todo === myTodo) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(completedArr);
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

  //Sorting
  const sortMyTask = (type) => (a, b) => {
    const A = a[type];
    const B = b[type];

    let compare = 0;
    if (A > B) {
      compare = -1;
    } else if (A < B) {
      compare = 1;
    }
    return compare;
  };

  //Delete completed
  const deleteCompleted = () => {
    const completedArr = [...todos].filter((todo) => !todo.isComplete);
    setTodos(completedArr);
  };

  //Delete all

  const deleteAll = () => {
    const allDeleted = [...todos].filter((todo) => !todo);
    setTodos(allDeleted);
  };

  return (
    <section className="main-wrapper">
      <div className="wrapper">
        <h1 className="leading-tight text-600 md:text-650">
          What needs to be done today?
        </h1>
        <TodoForm onSubmit={handleAdd} todos={todos} />
        <List
          todos={todos}
          currentEdit={currentEdit}
          onTodoUpdate={handleUpdate}
          onTodoCurrentEdit={handleCurrentEdit}
          onTodoDeletion={handleDelete}
          onTodoCompletion={handleComplete}
        />
        <Buttons
          onDeleteCompleted={deleteCompleted}
          onDeleteAll={deleteAll}
          setTodos={setTodos}
          todos={todos}
          sortMyTask={sortMyTask}
        />
      </div>
    </section>
  );
};

export default Main;
