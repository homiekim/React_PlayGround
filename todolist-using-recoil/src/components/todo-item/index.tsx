import React from "react";
import { todoType } from "../../typings/todo";
import useTodo from '../../hooks/todo-hooks';
const TodoItem = ({ item }: { item: todoType }) => {
  const {DeleteTodo, ToggleDone} = useTodo();

  const onDeleteHandler = () => {
    DeleteTodo(item.id);
  };
  const onChangeHandler = () => {
    ToggleDone(item.id);
  }
  return (
    <li>
      <input type="checkbox" checked={item.isDone} onChange={onChangeHandler} />
      <span>{item.contents}</span>
      <button onClick={onDeleteHandler}>삭제</button>
    </li>
  );
};

export default TodoItem;
