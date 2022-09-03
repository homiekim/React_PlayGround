import React from "react";
import { useRecoilValue } from "recoil";
import { todoAtom } from "../../recoil/atoms";
import TodoItem from '../todo-item';
const TodoList = () => {
  const todoList = useRecoilValue(todoAtom);
  return <ul>{
      todoList.map((v) => (
        <TodoItem key={v.id} item={v} />
      ))
    }</ul>;
};

export default TodoList;
