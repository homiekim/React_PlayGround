import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';


const url  = 'https://api.themoviedb.org/3/movie/popular';

export const loadMovie = createAsyncThunk('get/loadMovie', async (data) =>{
  const response = await axios.get(url, {
    params:{
      api_key: '123',
      page : 1,
      language : 'en-US',
    }
  })
  return response.data;
});