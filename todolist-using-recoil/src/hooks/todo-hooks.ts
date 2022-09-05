import { todoAtom } from "./../recoil/atoms";
import { SetterOrUpdater, useRecoilState } from "recoil";
import  { useCallback } from "react";
import { todoType } from "../typings/todo";
interface ReturnType {
  todoList: Array<todoType>;
  setTodoList: SetterOrUpdater<Array<todoType>>;
  AddTodo: (todo: todoType) => void;
  DeleteTodo: (id:number) => void;
  ToggleDone:(id:number) => void;
}
const useTodo = (): ReturnType => {
  const [todoList, setTodoList] = useRecoilState(todoAtom);

  const AddTodo = useCallback((todo: todoType) => {
    setTodoList((prev) => [...prev, todo]);
  },[setTodoList]);

  const DeleteTodo = useCallback((id:number) => {
    setTodoList((prev) => prev.filter(v => v.id !== id));
  },[setTodoList]);
  
  const ToggleDone = useCallback((id:number) =>{
    setTodoList((prev) => prev.map(v => v.id === id ? {...v, isDone: !v.isDone} : v))
  },[setTodoList]);

  return {
    todoList,
    setTodoList,
    AddTodo,
    DeleteTodo,
    ToggleDone,
  };
};

export default useTodo;
