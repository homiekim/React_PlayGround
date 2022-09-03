import React, { ChangeEvent, useState } from "react";
import { todoAtoms } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
const TodoInput = () => {
  const [todoList, setTodoList] = useRecoilState(todoAtoms);
  const [todoInput, setTodoInput] = useState<string>("");

  const onChangeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const onClickHnadler = () => {
    const newId = todoList.length !== 0 ? todoList.length + 1 : 0;
    setTodoList((prev) => [
      ...prev,
      {
        id: newId,
        contents: todoInput,
        isDone: false,
      },
    ]);
    setTodoInput('');
  };
  
  return (
    <section>
      <input value={todoInput} onChange={onChangeTodoInput} />
      <button onClick={onClickHnadler}>등록</button>
    </section>
  );
};

export default TodoInput;
