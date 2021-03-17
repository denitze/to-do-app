import ListItem from "./ListItem";

const List = ({
  todos,
  currentEdit,
  onTodoUpdate,
  onTodoCurrentEdit,
  onTodoDeletion,
  onTodoCompletion,
}) => {
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <ListItem
            todo={todo}
            currentEdit={currentEdit}
            key={todo.id}
            onUpdate={onTodoUpdate}
            onCurrentEdit={() => onTodoCurrentEdit(todo)}
            onDelete={() => onTodoDeletion(todo)}
            onComplete={() => onTodoCompletion(todo)}
          />
        ))}
      </ul>
    </section>
  );
};

export default List;
