import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Label = ({ todo }) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);

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
