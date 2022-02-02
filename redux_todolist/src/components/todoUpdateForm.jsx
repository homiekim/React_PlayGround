import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { todoSetUpdate, todoUpdate } from '../modules/todos';

const TodoUpdateForm = ({ id }) => {
  const [value, setValue] = useState("");
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
    <form onSubmit={onSubmit}>
      <span>Edit : </span>
      <input 
        type="text"
        value={value}
        onChange={onChange}
      />
      <button type='submit'>SAVE</button>
    </form>
  );
};

export default TodoUpdateForm;
