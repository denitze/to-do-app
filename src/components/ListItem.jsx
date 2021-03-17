import TodoForm from "./TodoForm";

const ListItem = ({
  todo,
  currentEdit,
  onCurrentEdit,
  onUpdate,
  onDelete,
  onComplete,
}) => {
  const submitUpdate = (todo, newText) => {
    onUpdate(todo, newText);
  };

  if (currentEdit === todo) {
    return (
      <TodoForm currentEdit={currentEdit} todo={todo} onSubmit={submitUpdate} />
    );
  }
  return (
    <li>
      <button onClick={onComplete}>
        <span style={todo.isComplete ? { textDecoration: "line-through" } : {}}>
          {todo.task}
        </span>
      </button>
      <div>
        <button onClick={onCurrentEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default ListItem;
