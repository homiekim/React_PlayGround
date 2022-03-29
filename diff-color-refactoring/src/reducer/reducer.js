
export const initialState = {
  stage: 1,
  score: 0,
  remainSecond: 0,
  isPlay: false,
  answerColor: "",
  worongColor: "",
  answerIndex: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        stage: state.stage,
        score: state.remainSecond,
        remainSecond: 15,
        isPlay: true,
        answerColor: action.answerColor,
        worongColor: action.worongColor,
        answerIndex: action.answerIndex,
      };
    case "SELECT_CORRECT":
      return {

      }
    case "SELECT_WORONG":
      return {

      }
    default:
      throw new Error();
  }
}
