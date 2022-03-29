import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducer/reducer';


const getBaseColor = () => {
  const ran1 = Math.floor(Math.random() * 255 + 1);
  const ran2 = Math.floor(Math.random() * 255 + 1);
  const ran3 = Math.floor(Math.random() * 255 + 1);

  return `rgb(${ran1}, ${ran2}, ${ran3})`;
}

const randomCalc = (ranNum, baseNum) => {
  const flag = Math.round(Math.random());
  if(flag == 1){
    return baseNum + ranNum;
  }else{
    return baseNum - ranNum;
  }
}

const getAnswerColor = (stage, baseColor)=> {
  const colorArr = baseColor.slice(4,-1).split(',');
  const num = Math.floor(Math.random() * (100-stage)+10);

  const ran1 = randomCalc(num, parseInt(colorArr[0]));
  const ran2 = randomCalc(num, parseInt(colorArr[1]));
  const ran3 = randomCalc(num, parseInt(colorArr[2]));
  console.log('num : ', num);
  return `rgb(${ran1}, ${ran2}, ${ran3})`;
  
}

const useGame = (props) => {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  const start = () => {
    const itemCnt = Math.pow(Math.floor((gameState.stage + 1) / 2 + 1), 2);
    const ans = Math.floor(Math.random() * itemCnt);
    const baseColor = getBaseColor();
    const getAnsColor = getAnswerColor(gameState.stage, baseColor);
    dispatch({
      type: 'START_GAME',
      answerColor: getAnsColor,
      worongColor: baseColor,
      answerIndex: ans,
    });
  }
  const clickHandler = () => {

  };
  return {
    gameState,
    clickHandler,
    start,
  }
}

export default useGame;