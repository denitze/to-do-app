import TodoForm from "./TodoForm";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const ListItem = ({
  todo,
  currentEdit,
  onCurrentEdit,
  onUpdate,
  onDelete,
  onComplete,
}) => {
  const disabled = currentEdit && currentEdit !== todo;
  const submitUpdate = (newText) => {
    onUpdate(todo, newText);
  };

  if (currentEdit === todo) {
    return (
      <TodoForm currentEdit={currentEdit} todo={todo} onSubmit={submitUpdate} />
    );
  }
  return (
    <li className="list-item text-400 md:text-450">
      <button
        onClick={onComplete}
        className={`pd-200 list-item__second ${
          todo.isComplete ? "complete" : ""
        }`}
      >
        <span style={todo.isComplete ? { textDecoration: "line-through" } : {}}>
          {todo.task}
        </span>
      </button>
      <div className="list-icons">
        {!todo.isComplete && (
          <button
            disabled={disabled}
            onClick={onCurrentEdit}
            style={disabled ? { opacity: 0.5 } : {}}
            className="color-primary"
          >
            <FiEdit />
          </button>
        )}
        <button onClick={onDelete} className="color-secondary">
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
