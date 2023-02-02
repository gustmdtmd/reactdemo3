const Input = (props) => {
  // 값이 넘어온게 아닌 주소가 넘어온다.
  const { input, insertTodo, handleChangeText } = props;

  return (
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
  );
};

export default Input;
