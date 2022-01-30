import React, { memo } from "react";
import styled from "@emotion/styled";


const BoardContainer = memo(styled.div`
  width: 360px;
  height: 360px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`);

const BoardItem = styled.div`
  width: ${(props) => props.len}px;
  height: ${(props) => props.len}px;
  background-color: ${(props) => props.backColor};
  margin : 2px;
`;
const getLength = (stage) => {
    const divide = Math.floor(((stage+1)/2) + 1);
    const rst = (360 / divide) - 4;
    return rst;
};

const Board = ({
  answer,
  answerColor,
  baseColor,
  stage,
  onSelect,
  itemList,
}) => {
  // 컨테이너 360*360
  const len = getLength(stage);
  return (
    <BoardContainer>
        {
            itemList.map((item)=> (
                <BoardItem 
                    key={item}
                    len={len}
                    onClick={()=> onSelect(item)}
                    backColor={item === answer ? answerColor : baseColor}
                />
            ))
        }
    </BoardContainer>
  );
};

export default Board;
