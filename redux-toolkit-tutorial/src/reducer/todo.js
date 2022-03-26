import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  id: 1,
  text: 'learn-redux-toolkit',
  checked: false,
}];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    insert: (state, action) =>  state.concat({
      id: action.payload.id,
      text: action.payload.text,
      checked: false, 
    }),
    remove: (state, action) => state.filter((todo)=> todo.id !== action.payload.id),
    toggle: (state, action) => state.map((todo) => todo.id === action.payload.id ? {...todo, checked: !todo.checked}: todo),
  }
});

export default todoSlice;