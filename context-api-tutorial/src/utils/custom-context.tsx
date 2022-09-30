import { useContext } from 'react';
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