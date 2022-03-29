import React, { useEffect } from "react";
import Board from "./components/board";
import Header from "./components/header";
import useGame from "./hooks/useGame";

const App = () => {
  const {
    gameState: { stage, score, remainSecond, answerColor, worongColor, answerIndex },
    clickHandler,
    start
  } = useGame();
  useEffect(()=>{
    start();
  },[]);
  return (
    <>
      <Header stage={stage} remainSecond={remainSecond} score={score} />
      <Board
        stage={stage}
        clickHandler={clickHandler}
        answerColor={answerColor}
        worongColor={worongColor}
        answerIndex={answerIndex}
      />
    </>
  );
};

export default App;
