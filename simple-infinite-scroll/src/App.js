import React from 'react';
import Header from './components/header';
import { StyleApp, StyleContent } from './App.style';
import MovieContainer from './components/movieContainer';

const App = () =>{
  return (
    <StyleApp>
      <StyleContent>
        <Header/>
        <MovieContainer />
      </StyleContent>
    </StyleApp>
  )
};

export default App;