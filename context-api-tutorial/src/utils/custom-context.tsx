import { useContext } from 'react';
import { TodoDispatchContext, TodoStateContext } from '../context/todo';
import { UserDispatchContext, UserStateContext } from '../context/uset';

export function useUsersState() {
  const state = useContext(UserStateContext);
  if(!state){
      throw new Error('Connot find UsersProvider');
  }
  return state;
}

export function useUserDispatch(){
  const dispatch = useContext(UserDispatchContext);
  if(!dispatch){
      throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}

export function useTodoState() {
  const state = useContext(TodoStateContext);
  if(!state){
      throw new Error('Connot find TodoProvider');
  }
  return state;
}

export function useTodoDispatch(){
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch){
      throw new Error('Cannot find TodoProvider');
  }
  return dispatch;
}