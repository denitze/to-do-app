import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [taskInput, setTaskInput] = useState(
    props.currentEdit ? props.todo.task : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!taskInput || /^\s*$/.test(taskInput)) {
      return;
    }
    props.onSubmit(taskInput);
    setTaskInput("");
  };

  return (
    <form action="" onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        name="task"
        id=""
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="What needs to be done today?"
        ref={inputRef}
        className="text-400 md:text-450 br-m bg-light-gray"
      />
      <button
        className={`text-400 md:text-450 br-m ${
          props.currentEdit ? "bg-secondary edit-btn" : "bg-primary"
        }`}
      >
        {" "}
        {props.currentEdit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
