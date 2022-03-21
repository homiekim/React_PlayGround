import Head from "next/head";
import react from "react";
import { useState, useEffect } from "react";
import HeadTitle from "../components/HeadTitle";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const StyleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
`;
const StyleMovie = styled.div`
  img {
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;
  }

  :hover {
    img {
      transform: scale(1.05) translateY(-10px);
    }
  }
  h4 {
    font-size: 18px;
    text-align: center;
  }
`;
const Home = ({ results }) => {
  const router = useRouter();
  const onClick = (id, title, overview, poster_path) => {
    router.push(
      {
        pathname: `/movies/${title}/${id}`,
        query: {
          overview,
          poster_path
        },
      },
      `/movies/${title}/${id}`
    );
  };
  console.log(results);
  return (
    <StyleContainer>
      <HeadTitle title="Home" />
      {results?.map((movie) => (
        <StyleMovie key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movieImg"
            onClick={() =>
              onClick(
                movie.id,
                movie.original_title,
                movie.overview,
                movie.poster_path
              )
            }
          />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </StyleMovie>
      ))}
    </StyleContainer>
  );
};

export default Home;

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
