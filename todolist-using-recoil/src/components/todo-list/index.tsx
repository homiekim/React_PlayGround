import React from "react";
import { useRecoilValue } from "recoil";
import { todoAtoms } from "../../recoil/atoms";
import TodoItem from '../todo-item';
const TodoList = () => {
  const todoList = useRecoilValue(todoAtoms);
  return <ul>{
      todoList.map((v) => (
        <TodoItem key={v.id} item={v} />
      ))
    }</ul>;
};

export default TodoList;
