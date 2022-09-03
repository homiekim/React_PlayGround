import { atom } from "recoil";
import { todoType } from '../typings/todo';

export const todoAtoms = atom<Array<todoType>>({
  key:'todolist',
  default:[],
});
