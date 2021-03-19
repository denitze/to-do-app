import { ImArrowDown } from "react-icons/im";
import { FiTrash2 } from "react-icons/fi";

const Buttons = ({
  todos,
  setTodos,
  sortMyTask,
  onDeleteCompleted,
  onDeleteAll,
}) => {
  return (
    <section className=" text-400 md:text-450 buttons-sec">
      <button
        className="bg-primary br-m"
        onClick={() => setTodos([...todos].sort(sortMyTask("task")).reverse())}
      >
        <span>A - Z </span> <ImArrowDown />
      </button>
      <button
        className="bg-primary br-m"
        onClick={() => setTodos([...todos].sort(sortMyTask("id")))}
      >
        Sort by Date <ImArrowDown />
      </button>
      <button className="bg-primary br-m" onClick={() => onDeleteCompleted()}>
        Delete Completed
      </button>
      <button className="bg-secondary br-m" onClick={() => onDeleteAll()}>
        <FiTrash2 /> Delete All!
      </button>
    </section>
  );
};

export default Buttons;
