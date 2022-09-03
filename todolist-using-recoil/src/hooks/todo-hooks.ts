import { todoAtom } from "./../recoil/atoms";
import { SetterOrUpdater, useRecoilState } from "recoil";
import React from "react";
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

  const AddTodo = (todo: todoType) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const DeleteTodo = (id:number) => {
    setTodoList((prev) => prev.filter(v => v.id !== id));
  };
  
  const ToggleDone = (id:number) =>{
    setTodoList((prev) => prev.map(v =>{
      if(v.id === id){
        return {...v, isDone: !v.isDone};
      }else {
        return v;
      }
    }))
  }

  return {
    todoList,
    setTodoList,
    AddTodo,
    DeleteTodo,
    ToggleDone,
  };
};

export default useTodo;
