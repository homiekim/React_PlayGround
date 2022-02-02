import React from 'react';
import styled from '@emotion/styled/macro';
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';

const Tmeplate = styled.div`
    position : relative;
    width : 600px;
    overflow : hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: -3.1rem;
    border-radius: 4px;
`;

const TodoContainer = () => {
    return (
        <Tmeplate>
            <TodoInput />
            <TodoList />
        </Tmeplate>
    );
}

export default TodoContainer;