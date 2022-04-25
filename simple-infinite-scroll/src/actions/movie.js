import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

function getRandNumber() {
  const ranNum = Math.floor(Math.random() * 50 + 1);
  return ranNum;
}

const url = "https://api.themoviedb.org/3/movie/popular";
const my_api_key = process.env.REACT_APP_MOVIE_API_KEY;

export const loadMovie = createAsyncThunk(
  "get/loadMovie",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(url, {
        params: {
          api_key: my_api_key,
          page: getRandNumber(),
          language: "en-US",
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
