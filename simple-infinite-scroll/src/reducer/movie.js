import {createSlice} from '@reduxjs/toolkit';
import { loadMovie } from '../actions/movie';

const initialState ={
  loadMovieLoading : false,
  loadMovieDone: false,
  loadMovieError: false,
  movieList: []
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(loadMovie.pending, (state) =>{
      state.loadMovieLoading = true;
      state.loadMovieDone = false;
      state.loadMovieError = null;
    })
    .addCase(loadMovie.fulfilled, (state, action) =>{
      state.loadMovieLoading = false;
      state.loadMovieDone = true;
      state.movieList = [...state.movieList].concat(action.payload)
    })
    .addCase(loadMovie.rejected, (state, action)=>{
      state.loadMovieLoading = false;
      state.loadMovieError = action.error;
    })

})