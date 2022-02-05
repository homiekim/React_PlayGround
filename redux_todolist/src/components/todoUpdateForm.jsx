import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { todoSetUpdate, todoUpdate } from "../modules/todos";
import {
  StyleContainer,
  StyleEditText,
  StyleSaveButton,
  StyleUpdateForm,
  StyleUpdateinput,
} from "./todoUpdateForm.style";

const TodoUpdateForm = ({ todo }) => {
  const [value, setValue] = useState(todo.text);
  const { id } = todo;
  const dispatch = useDispatch();
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = (e) => {
    if (value.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }
    dispatch(todoUpdate(id, value));
    dispatch(todoSetUpdate(id));
    setValue("");
    e.preventDefault();
  };
  return (
    <StyleContainer>
      <StyleUpdateForm onSubmit={onSubmit}>
        <StyleEditText>Edit : </StyleEditText>
        <StyleUpdateinput type="text" value={value} onChange={onChange} />
        <StyleSaveButton type="submit">SAVE</StyleSaveButton>
      </StyleUpdateForm>
    </StyleContainer>
  );
};

export default TodoUpdateForm;
