import React from "react";
import { todoAtoms } from "../../recoil/atoms";
import { todoType } from "../../typings/todo";
import { useSetRecoilState } from "recoil";
const TodoItem = ({ item }: { item: todoType }) => {
  const setTodoList = useSetRecoilState(todoAtoms);

  const onDeleteHandler = () => {
    setTodoList((prev) => prev.filter(v => v.id !== item.id));
  };
  return (
    <li>
      <input type="checkbox" checked={item.isDone} />
      <span>{item.contents}</span>
      <button onClick={onDeleteHandler}>삭제</button>
    </li>
  );
};

export default TodoItem;
