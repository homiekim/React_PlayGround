import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovie } from '../actions/movie';

const MovieContainer = () => {
  const { movieList } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovie());
  }, []);
  return <div>Movie Container</div>;
};

export default MovieContainer;
