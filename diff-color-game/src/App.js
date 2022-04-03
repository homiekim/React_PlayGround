import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import Header from "./components/header";

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


const App = () => {
  const [answer, setAnswer] = useState();
  const [answerColor, setAnswerColor] = useState();
  const [baseColor, setBaseColor] = useState();
  const [isPlaying, setIsPlaying] = useState(true);
  const [score, setSocore] = useState(0);
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [itemList, setItemList] = useState([]);

  const onSelect = useCallback((id) => {
    if (id === answer) {
      // 정답일 때
      const newScore = score+(stage * stage * time);
      const newStage = stage + 1;
      setSocore(newScore);
      setStage(newStage);
      setTime(15);
    } else {
      // 아닐 때
      if (time > 3) {
        setTime(time - 3);
      } else {
        setTime(0);
      }
    }
  },[time, itemList]);

  useEffect(() => {
    setIsPlaying(true);
    // item 갯수
    const itemCnt = Math.pow(Math.floor((stage + 1) / 2 + 1), 2);
    // 0~ itme갯수 -1 사이의 숫자 중에서 난수 생성 -> answer 값으로 사용
    const ans = Math.floor(Math.random() * itemCnt);
    setAnswer(ans);
    const baseColor = getBaseColor();
    const getAnsColor = getAnswerColor(stage, baseColor);
    console.log('baseColor : ', baseColor);
    console.log('answerColor : ', getAnsColor);
    setAnswerColor(getAnsColor);
    setBaseColor(baseColor);
    const tmpList = [];
    for (let i = 0; i < itemCnt; i++) {
      tmpList.push(i);
    }
    setItemList(tmpList);
  }, [stage, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      let timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      if (time <= 0) {
        clearInterval(timer);
        setTimeout(() => {
          setTime(15);
          alert(`GAME OVER! \n스테이지 : ${stage}, 점수 : ${score}` );
          setStage(1);
          setIsPlaying(false);
        }, 1000);
      }
      return () => clearInterval(timer);
    }
  }, [time, isPlaying]);

  return (
    <>
      <Header
        score={score}
        stage={stage}
        time={time}
      />
      <Board
        itemList={itemList}
        answer={answer}
        answerColor={answerColor}
        baseColor={baseColor}
        onSelect={onSelect}
        stage={stage}
      />
    </>
  );
};

export default App;
