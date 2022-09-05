import React, { ChangeEvent, useState } from "react";

import useTodo from '../../hooks/todo-hooks';
const TodoInput = () => {
  const {todoList, AddTodo} = useTodo();
  //const [todoList, setTodoList] = useRecoilState(todoAtom);
  const [todoInput, setTodoInput] = useState<string>("");

  const onChangeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const onClickHnadler = () => {
    const newId = todoList.length !== 0 ? todoList.length + 1 : 0;
    // setTodoList((prev) => [
    //   ...prev,
    //   {
    //     id: newId,
    //     contents: todoInput,
    //     isDone: false,
    //   },
    // ]);
    AddTodo({
      id:newId,
      contents:todoInput,
      isDone:false,
    })
    setTodoInput("");
  };

  return (
    <section>
      <input value={todoInput} onChange={onChangeTodoInput} />
      <button onClick={onClickHnadler}>등록</button>
    </section>
  );
};

export default TodoInput;
