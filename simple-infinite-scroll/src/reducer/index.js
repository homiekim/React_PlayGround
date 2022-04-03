import { combineReducers } from 'redux';
import { movieSlice } from './movie';

const reducer = combineReducers({
  movie : movieSlice.reducer,
});

export default reducer;