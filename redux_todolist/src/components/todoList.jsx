import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todoItem";
import styled from "@emotion/styled/macro";
import TodoUpdateForm from './todoUpdateForm';

const StyleList = styled.div`
  max-width: 600px;
  max-height: 300px;
  overflow-y: auto;
  background : #fff;
  border: 1.4px solid rgba(0, 0, 0, 0.1);
  border-radius : 3px;

`;

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <StyleList>
      {todos.map((todo) => (
        todo.updated ?
        (<TodoUpdateForm key={todo.id} todo={todo} />):( <TodoItem key={todo.id} todo={todo} />)
      ))}
    </StyleList>
  );
};

export default TodoList;
