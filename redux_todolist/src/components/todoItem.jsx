import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { todoRemove, todoSetUpdate, todoToggle } from "../modules/todos";
import {
  StyleCheckBox,
  StyleItemBox,
  StyleRemoveButton,
  StyleTextBox,
  StyleUpdateButton,
} from "./todoItem.style";

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  const dispatch = useDispatch();

  

  return (
    <StyleItemBox>
      <StyleCheckBox onClick={() => dispatch(todoToggle(id))} checked={checked}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </StyleCheckBox>
      <StyleTextBox readOnly={true} checked={checked}>
        {text}
      </StyleTextBox>
      <StyleUpdateButton onClick={()=> dispatch(todoSetUpdate(id))}>
        <BiPencil />
      </StyleUpdateButton>
      <StyleRemoveButton onClick={() => dispatch(todoRemove(id))}>
        <MdRemoveCircleOutline />
      </StyleRemoveButton>
    </StyleItemBox>
  );
};

export default TodoItem;
