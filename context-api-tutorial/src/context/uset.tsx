import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { initialState, userReducer } from "../reducers/user";
import { userActionType, userReducerType } from "../typings/user";

interface Props {
  children: ReactNode;
}
export const UserStateContext = createContext<null | userReducerType>(null);
export const UserDispatchContext = createContext<null | Dispatch<userActionType>>(null);

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};
