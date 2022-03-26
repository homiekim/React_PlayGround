import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from './reducer/counter';
import todoSlice from './reducer/todo';

const App = () => {
  const counter  = useSelector((state) => state.counter);
  const todos = useSelector((state)=> state.todo);
  const [value,setValue] = useState('');
  const dispatch = useDispatch();
  const [id, setId] = useState(2);

  // counter
  const handleIncrease = () =>{
    dispatch(counterSlice.actions.increase());
  }
  const handleDecrease = () => {
    dispatch(counterSlice.actions.decrease());
  }

  
  // todo
  const onChange = (e) => {
    setValue(e.target.value);
  };
  console.log(todoSlice);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(todoSlice.actions.insert({id: id, text: value}));
    setId(id+1);
    setValue('');
  }

  const handleRemoveTodo = (todoId) => {
    dispatch(todoSlice.actions.remove({id : todoId}));
  }  
  const handleToggleTodo = (todoId) => {
    dispatch(todoSlice.actions.toggle({id: todoId}));
  }

  console.log(todos);
  return (
    <>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <hr/>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={value} onChange={onChange}/>
        <button type='submit'>Add</button>
        <ul>
          {
            todos.map((todo) => (
              <div key={todo.id}>
                <li style={{
                  display: 'inline-block',
                  textDecoration : todo.checked? 'line-through' : 'none',
                }}>
                {todo.text}
                </li>
                <input type='checkbox' onClick={() => handleToggleTodo(todo.id)}/>
                <span style={{backgroundColor:'lightgray', cursor:'pointer'}}onClick={()=> handleRemoveTodo(todo.id)}>삭제</span>
              </div>
            ))
          }
        </ul>
      </form>
    </>
  );
};

export default App;
