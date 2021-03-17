import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [incomingTodo, setIncomingTodo] = useState(
    props.currentEdit ? props.todo.task : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!incomingTodo || /^\s*$/.test(incomingTodo)) {
      return;
    }
    props.onSubmit(incomingTodo);
    setIncomingTodo("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        id=""
        value={incomingTodo}
        onChange={(e) => setIncomingTodo(e.target.value)}
        placeholder="What needs to be done today?"
        ref={inputRef}
      />
      <button> {props.currentEdit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
