import React from "react";

const Header = ({
  score,
  stage,
  remainSecond,
}) => {
  return <div>스테이지: {stage}, 남은 시간: {remainSecond}, 점수: {score}</div>;
};

export default Header;
