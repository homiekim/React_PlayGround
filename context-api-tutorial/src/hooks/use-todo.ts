import { useCallback } from "react";
import { Todo } from "../typings/todo";
import { useTodoDispatch, useTodoState } from "../utils/custom-context";

interface ReturnType {
  todoList: Array<Todo>;
  AddTodo: (todo: Todo) => void;
  DeleteTodo: (id: number) => void;
  ToggleTodo: (id: number) => void;
}

const useTodo = () : ReturnType=> {
  const todoList = useTodoState();
  const dispatch = useTodoDispatch();

  const AddTodo = useCallback(
    (todo: Todo) => {
      dispatch({ type: "ADD_TODO", data: todo });
    },
    [dispatch]
  );

  const DeleteTodo = useCallback(
    (id: number) => {
      dispatch({ type: "DELETE_TODO", id });
    },
    [dispatch]
  );

  const ToggleTodo = useCallback(
    (id: number) => {
      dispatch({ type: "TOGGLE_TODO", id });
    },
    [dispatch]
  );

  return {
    todoList,
    AddTodo,
    DeleteTodo,
    ToggleTodo,
  };
};

export default useTodo;
