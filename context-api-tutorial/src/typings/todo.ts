export type Todo = {
  id:number,
  contents: string,
  isDone:boolean,
}

export type TodoActionString = "ADD_TODO" | "DELETE_TODO" | "TOGGLE_TODO";

export type TodoActionType = {
  type:TodoActionString;
  data?: Todo;
  id?:number;
  error?: Error;
}