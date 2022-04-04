import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovie } from "../actions/movie";
import styled from "@emotion/styled";
import { useInView } from 'react-intersection-observer';

const StyleMovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px 100px;
  text-align: center;
`;

const StyleMovieCard = styled.div`
  margin-bottom: 20px;
  img {
    margin : 0 auto;
    display: block;
    max-width: 100%;
  }
`;

const StyleButton = styled.button`
  margin-top : 12px;
  border: none;
  color: white;
  padding: 8px 12px;
  background-color: #21c7fa;
  font-size: 1.2em;
  border-radius: 12px;
  font-family: sans-serif;
  font-weight: bold;
  cursor: pointer;
`;


const MoiveContent = ({ movie }) => {
  return (
    <StyleMovieCard>
      <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="poster"
        />
        <StyleButton>Show Detail</StyleButton>
    </StyleMovieCard>
  );
};

const MovieContainer = () => {
  const { movieList } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(movieList.length === 0){
      console.log('첫 포스트 로딩');
      dispatch(loadMovie());
      return;
    }
    
  }, []);

  useEffect(()=>{
    if(movieList.length !==0 && inView) {
        console.log('첫 로딩 이후 무한 스크롤');
        dispatch(loadMovie());
      }
  },[inView]);
 
  return (
    <StyleMovieContainer>
      {movieList.map((item) => (
        <MoiveContent key={item.id} movie={item} />
      ))}
      <div ref={ref} />
    </StyleMovieContainer>
  );
};

export default MovieContainer;
