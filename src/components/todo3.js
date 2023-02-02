import { useDispatch, useSelector } from 'react-redux';
import Label from './label3';

const Todo = () => {
  const todos = useSelector((todos) => todos);
  const dispatch = useDispatch();

  const updateTodo = (id, completed) => {
    dispatch({ type: 'UPDATE', id: id, completed: completed });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE', id: id });
  };
  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label
                  todo={todo}
                  updateTodo={() => updateTodo(todo.id, todo.completed)}
                  deleteTodo={() => deleteTodo(todo.id)}
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
