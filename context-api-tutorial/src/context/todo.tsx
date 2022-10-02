import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todo";
import { Todo, TodoActionType } from "../typings/todo";

interface Props {
  children: ReactNode;
}
export const TodoStateContext = createContext<null | Array<Todo>>(null);
export const TodoDispatchContext = createContext<null | Dispatch<TodoActionType>>(
  null
);

const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;
