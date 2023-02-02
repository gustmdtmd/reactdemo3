// function reducer(state, action){}

let boardList = [
  { id: 1, todoname: '운동하기', completed: 0 },
  { id: 2, todoname: 'SNS꾸미기', completed: 0 },
  { id: 3, todoname: '사진정리하기', completed: 0 },
];

export const reducer = (todos = boardList, action) => {
  switch (action.type) {
    case 'INSERT': //추가
      return [
        { id: todos.length + 1, todoname: action.todoname, completed: 0 },
        ...todos,
      ];
    case 'UPDATE': //수정
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      );
    case 'DELETE': //삭제
      return todos.filter((todo) => todo.id !== action.id);
    default: //목록
      return todos;
  }
};
