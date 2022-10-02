import { Todo, TodoActionType } from "../typings/todo";

export const initialState: Array<Todo> = [];

export const todoReducer = (
  state: Array<Todo>,
  action: TodoActionType
): Array<Todo> => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat(action.data as Todo);
    case "DELETE_TODO" :
      return state.filter((todo)=> todo.id !== action.id);
    case "TOGGLE_TODO" :
      return state.map((todo) => todo.id === action.id ? {...todo, isDone: !todo.isDone}: todo)
    default:
      throw new Error("invalid action type");
  }
};
