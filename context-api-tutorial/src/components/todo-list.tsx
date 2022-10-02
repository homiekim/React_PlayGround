import React, { ChangeEvent, useState } from "react";
import useTodo from '../hooks/use-todo';
import TodoItem from './todo';

const TodoList = () => {
  const [todoInput, setTodoInput] = useState<string>("");

  const {todoList, AddTodo} = useTodo();

  const onChangeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };
  const onAdd = () => {
    const newId = todoList.length !== 0 ? todoList.length + 1 : 0;
    AddTodo({
      id:newId,
      contents:todoInput,
      isDone:false,
    });
    setTodoInput("");
  };
  return (
    <div>
      <section>
        <input value={todoInput} onChange={onChangeTodoInput} />
        <button onClick={onAdd}>등록</button>
        <ul>
          {
            todoList.map((todo) => <TodoItem data={todo}/>)
          }
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
