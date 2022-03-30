import React from "react";
import styled from "styled-components";

const BoardContainer = styled.div`
  width: 360px;
  height: 360px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const BoardItem = styled.div`
  width: ${(props) => props.len}px;
  height: ${(props) => props.len}px;
  background-color: ${(props) => props.backColor};
  margin: 2px;
`;

const getLength = (stage) => {
  const divide = Math.floor((stage + 1) / 2 + 1);
  const rst = 360 / divide - 4;
  return rst;
};

const Board = ({ answerIndex, answerColor, baseColor, stage, onSelect }) => {
  const len = getLength(stage);
  const width = Math.round((stage + 0.5) / 2) + 1;
  console.log('board stage : ', stage);
  return (
    <BoardContainer>
      {[...Array(width * width)].map((_, idx) => (
        <BoardItem
          key={idx}
          len={len}
          backColor={answerIndex === idx ? answerColor : baseColor}
          onClick={() => {
            onSelect(idx);
          }}
        />
      ))}
    </BoardContainer>
  );
};

export default Board;
