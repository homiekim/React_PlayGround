import { createSlice } from '@reduxjs/toolkit';


const initialState = 0;

const counterSlice = createSlice({
  name: 'couter',
  initialState,
  reducers:{
    increase : (state, action) => state+1,
    decrease : (state, action) => state-1,
  }
});

export default counterSlice;