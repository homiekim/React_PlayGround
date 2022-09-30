import {  User, userActionType } from "./../typings/user";
import { userReducerType } from "../typings/user";

export const initialState: userReducerType = {
  users: {
    isLoading: false,
    data: null,
    error: null,
  },
  user: {
    isLoading: false,
    data: null,
    error: null,
  },
};

export const userReducer = (
  state: userReducerType,
  action: userActionType
): userReducerType => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: true,
        },
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: {
          ...state.users,
          data: action.data as Array<User>,
          isLoading: false,
        },
      };
    case "GET_USERS_FAILURE":
      return {
        ...state,
        users: {
          ...state.users,
          error: action.error as Error,
          isLoading: false,
        },
      };
    case "GET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: true,
        },
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          data: action.data as User,
          isLoading: false,
        },
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        user: {
          ...state.user,
          error: action.error as Error,
          isLoading: false,
        },
      };
    default:
      throw new Error("invalid action type");
  }
};
