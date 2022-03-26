import { combineReducers } from 'redux';
import counterSlice from './counter';
import todoSlice from './todo';

const reducer = combineReducers({
  counter : counterSlice.reducer,
  todo : todoSlice.reducer,
});

export default reducer;

