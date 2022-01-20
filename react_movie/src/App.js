import styled from "@emotion/styled/macro";
import React from "react";
import MovieContainer from "./containers/MovieContainer";

const StyleApp = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #ebebeb;
`;

const StyleAppContent = styled.article`
  width: 600px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

const App = () => {
  return (
    <StyleApp>
      <StyleAppContent>
        <MovieContainer />
      </StyleAppContent>
    </StyleApp>
  );
};

export default App;
