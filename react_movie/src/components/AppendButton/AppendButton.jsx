import { useCallback } from 'react';
import { StyleAppendButton } from "./AppendButton.style";

const AppendButton = ({ onClick }) => {
  return <StyleAppendButton onClick={onClick}>추가</StyleAppendButton>;
}; 

export default AppendButton;