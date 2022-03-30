

const getBaseColor = () => {
  const ran1 = Math.floor(Math.random() * 255 + 1);
  const ran2 = Math.floor(Math.random() * 255 + 1);
  const ran3 = Math.floor(Math.random() * 255 + 1);

  return `rgb(${ran1}, ${ran2}, ${ran3})`;
}

const randomCalc = (ranNum, baseNum) => {
  const flag = Math.round(Math.random());
  if(flag === 1){
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


const getRandomState = (stage) =>{
  // item 갯수
  const itemCnt = Math.pow(Math.floor((stage + 1) / 2 + 1), 2);
  // 0~ itme갯수 -1 사이의 숫자 중에서 난수 생성 -> answer 값으로 사용
  const ans = Math.floor(Math.random() * itemCnt);
  const baseColor = getBaseColor();
  const getAnsColor = getAnswerColor(stage, baseColor);

  return {
    baseColor : baseColor,
    answerColor : getAnsColor,
    answerIndex : ans
  }

}

export default getRandomState;