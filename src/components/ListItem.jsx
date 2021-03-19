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
        className={`pd-200 list-item--second ${
          todo.isComplete ? "complete" : ""
        }`}
      >
        <span>
          {todo.task}
          <svg
            preserveAspectRatio="none"
            vector-effect="non-scaling-stroke"
            viewBox="0 0 154 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="line"
              d="M5 7c46.8-.5 141.1-3.7 141.5 1.5.4 5.2-97.3 6.8-144.5 9.5l150.5 5"
              stroke="#5B2929"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
