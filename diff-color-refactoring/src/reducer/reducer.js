import getRandomState from "../utils/random";

export const initialState = {
  stage: 1,
  score: 0,
  remainSecond: 0,
  isPlay: true,
  baseColor: "",
  answerColor: "",
  answerIndex: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "INIT_GAME":
      return {
        ...state,
        ...getRandomState(1),
        stage: state.stage,
        score: state.remainSecond,
        remainSecond: 15,
        isPlay: true,
      };
    case "SELECT_CORRECT":
      return {
        ...state,
        ...getRandomState(state.stage + 1),
        remainSecond: 15,
        stage: state.stage + 1,
        score: state.score + Math.pow(state.stage, 3) * state.remainSecond,
      };
    case "SELECT_WORONG":
      return {
        ...state,
        remainSecond: Math.max(state.remainSecond - 3, 0),
      };
    case "COUNT_TIMER":
      if (!state.isPlay) {
        return state;
      }
      if(state.remainSecond <= 0) {
        return {
          ...state,
          isPlay : false,
        };
      }else{
        return {
          ...state,
          remainSecond: state.remainSecond -1,
        };
      }
    default:
      throw state;
  }
}
