import React from "react";
import useTodo from '../hooks/use-todo';
import { Todo } from "../typings/todo";
interface Props {
  data: Todo;
}
const TodoItem = ({ data }: Props) => {
  const {DeleteTodo, ToggleTodo} = useTodo();

  const onDeleteHandler = () =>{
    DeleteTodo(data.id);
  }

  const onChangeHandler = () => {
    ToggleTodo(data.id);
  }

  return (
    <li>
      <input type="checkbox" checked={data.isDone} onChange={onChangeHandler} />
      <span>{data.contents}</span>
      <button onClick={onDeleteHandler}>삭제</button>
    </li>
  );
};

export default TodoItem;
