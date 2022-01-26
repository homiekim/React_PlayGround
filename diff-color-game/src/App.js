import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import Header from "./components/header";

function getRandomColor() {
  // 1~255 사이 숫자 중에서 난수 생성
  const ran1 = Math.floor(Math.random() * 255 + 1);
  const ran2 = Math.floor(Math.random() * 255 + 1);
  const ran3 = Math.floor(Math.random() * 255 + 1);

  return `rgb(${ran1}, ${ran2}, ${ran3})`;
}

const App = () => {
  const [answer, setAnswer] = useState();
  const [answerColor, setAnswerColor] = useState();
  const [baseColor, setBaseColor] = useState();
  const [isPlaying, setIsPlaying] = useState(true);
  const [score, setSocore] = useState(0);
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(2);
  const [itemList, setItemList] = useState([]);

  const onSelect = (id) => {
    console.log("Board에서 넘어온 id 값 =", id);
    if (id === answer) {
      // 정답일 때
    } else {
      // 아닐 때
      if (time > 3) {
        setTime(time - 3);
      } else {
        setTime(0);
      }
    }
  };

  useEffect(() => {
    setIsPlaying(true);
    // item 갯수
    const itemCnt = Math.pow(Math.floor((stage + 1) / 2 + 1), 2);
    // 0~ itme갯수 -1 사이의 숫자 중에서 난수 생성 -> answer 값으로 사용
    const ans = Math.floor(Math.random() * itemCnt);
    setAnswer(ans);
    const getAnsColor = getRandomColor();
    const getBaseColor = getRandomColor();
    setAnswerColor(getAnsColor);
    setBaseColor(getBaseColor);
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
      console.log(time);
      if (time <= 0) {
        clearInterval(timer);
        setTimeout(() => {
          setTime(5);
          alert("game over");
          setStage(1);
          setIsPlaying(false);
        }, 1000);
      }
      return () => clearInterval(timer);
    }
  }, [time, isPlaying]);

  // 타이머가 바뀌면 실행
  console.log("itemList:", itemList);
  console.log("answer : ", answer);
  console.log("answerColor : ", answerColor);
  console.log("baseColor : ", baseColor);
  return (
    <>
      <Header
        answer={answer}
        answerColor={answerColor}
        baseColor={baseColor}
        isPlaying={isPlaying}
        score={score}
        stage={stage}
        time={time}
      />
      <Board
        itemList={itemList}
        answer={answer}
        answerColor={answerColor}
        baseColor={baseColor}
        isPlaying={isPlaying}
        onSelect={onSelect}
        score={score}
        stage={stage}
        time={time}
      />
    </>
  );
};

export default App;
