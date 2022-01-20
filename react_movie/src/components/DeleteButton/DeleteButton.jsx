import React from 'react';
import { StyleDeleteButton } from './DeleteButton.style';

const DeleteButton = ({onClick, disabled}) => {
    return (
        <StyleDeleteButton onClick={onClick} disabled={disabled}>
            삭제
        </StyleDeleteButton>
    );
};

export default DeleteButton;