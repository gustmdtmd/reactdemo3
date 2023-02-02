const Label = (props) => {
  const { todo, updateTodo, deleteTodo } = props;

  return (
    <h3>
      <label
        className={todo.completed ? 'completed' : null}
        onClick={() => updateTodo(todo.id, todo.completed)}
      >
        {todo.todoname}
      </label>

      <label
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        &nbsp;&nbsp;&nbsp;삭제
      </label>
    </h3>
  );
};

export default Label;
