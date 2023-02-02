import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './commonApi/todoApi';

function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  //const baseUrl = 'http://localhost:8090';

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    console.log('input:' + input);
  }, [input]);

  const handleChangeText = (e) => {
    //입력을 위해선 아래와 같이 작성해주어야한다.
    setInput(e.target.value);
  };

  async function getTodos() {
    // axios가 다 실행될때까지 기다리게 하기 위해 await를 사용
    // 요청할 url, .then()은 요청한 url의 리턴 결과값
    await axios
      .get(baseUrl + '/todo/all')
      .then((response) => {
        //console.log(response.data);
        //console.log('11111111111111111111111');
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log('www22222222222222');
  }

  const insertTodo = async (e) => {
    e.preventDefault();
    // DB에 저장되게 설정
    await axios
      .post(baseUrl + '/todo', { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput('');
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('할일 추가');
  };

  const updateTodo = async (id, completed) => {
    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((response) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
              : todo
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        // setTodos(todos.filter((todo) => {return todo.id !== id}));
        // return 이 처리해주는 문장이 하나면 return을 생략 가능하다.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type='text'
          required={true}
          value={input}
          onChange={handleChangeText}
        />
        {/* 입력 */}
        <input type='submit' value='Create' />
      </form>
      {/* 리스트 */}
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
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
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
