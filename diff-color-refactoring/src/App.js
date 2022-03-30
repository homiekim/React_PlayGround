import React from "react";
import Board from "./components/board";
import Header from "./components/header";
import useGame from "./hooks/useGame";

const App = () => {
  const {gameState, action} = useGame();
  console.log("App state : ", gameState);
  return (
    <>
      <Header {...gameState}  />
      <Board {...gameState} onSelect={action.clickHandler} />
    </>
  );
};

export default App;
