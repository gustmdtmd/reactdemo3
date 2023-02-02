const Label = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <h3>
      <label
        className={todo.completed ? 'completed' : null}
        onClick={updateTodo}
      >
        {todo.todoname}
      </label>

      <label onClick={deleteTodo}>&nbsp;&nbsp;&nbsp;삭제</label>
    </h3>
  );
};

export default Label;
