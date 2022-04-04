import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

function getRandNumber() {
  const ranNum = Math.floor(Math.random() * 50+1);
  return ranNum;
}

const url  = 'https://api.themoviedb.org/3/movie/popular';

export const loadMovie = createAsyncThunk('get/loadMovie', async (data) =>{
  const response = await axios.get(url, {
    params:{
      api_key: '8ea4bd18073fca9860a9d642ad94921b',
      page : getRandNumber(),
      language : 'en-US',
    }
  })
  return response.data;
});