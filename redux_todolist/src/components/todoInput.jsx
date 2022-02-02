import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { todoInsert } from '../modules/todos';
import { InputForm, StyleButton, StyleTodoInput, TodoTitle } from './todoInput.style';

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  let nextId = useRef(2);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = (e) => {
    if (value.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }
    dispatch(todoInsert(nextId.current, value));
    nextId.current += 1;
    setValue("");
    e.preventDefault();
  };
  return (
    <InputForm onSubmit={onSubmit}>
      <TodoTitle>New Todo: </TodoTitle>
      <StyleTodoInput
        value={value}
        onChange={onChange}
        placeholder="Add your To Do..!"
      />
      <StyleButton type="submit">Add</StyleButton>
    </InputForm>
  );
};

export default TodoInput;
