import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";

const StyleBackground = styled.div`
  position: fixed;
  z-index: 300;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
`;
const StyleHeader = styled.div`
  padding: 8px 4px;
  background-color: white;
  text-align: center;
  & span {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Open Sans";
  }
`;

const StyleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0);
  img {
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
`;
const StyleModal = styled.div`
  border: 3px solid grey;
  display: flex;
  background-color: white;
  position: absolute;
  z-index: 400;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyleDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 500px;
  padding: 20px;
`;
const ImageWrapper = styled.div`
  width: 300px;
  img {
    opacity: 1;
    width: 100%;
  }
`;
const DetailMovie = ({ movieId, onClose }) => {
  const movie = useSelector((state) =>
    state.movie.movieList.find((item) => item.id === movieId)
  );
  console.log("getMoive : ", movie);

  return (
    <StyleBackground>
      <StyleHeader>
        <span>Detail Moive Id : {movieId}</span>
        <button onClick={onClose}>close</button>
      </StyleHeader>
      <StyleWrapper>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="backdrop"
        />
        <StyleModal>
          <ImageWrapper>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt="poster"
            />
          </ImageWrapper>
          <StyleDescription>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <div>Release Date : {movie.release_date}</div>
          </StyleDescription>
        </StyleModal>
      </StyleWrapper>
    </StyleBackground>
  );
};

export default DetailMovie;
