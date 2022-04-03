import  {
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { initialState, reducer } from "../reducer/reducer";

const useGame = () => {
  const [gameState, dispatch] = useReducer(reducer, initialState);
  const timer = useRef();
  console.log(gameState);

  const start = useCallback(() => {
    dispatch({ type: "INIT_GAME" });

    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => dispatch({ type: "COUNT_TIMER" }), 1000);
  }, []);

  const clickHandler = useCallback(
    (idx) => {
      if (!gameState.isPlay) {
        return;
      }

      if (idx === gameState.answerIndex) {
        dispatch({ type: "SELECT_CORRECT" });
      } else {
        dispatch({ type: "SELECT_WORONG" });
      }
    },
    [gameState.answerIndex, gameState.isPlay]
  );

  useEffect(() => {
    if (gameState.isPlay) {
      return;
    }
    if (timer.current) {
      clearInterval(timer.current);
    }
    alert(`GAME OVER!\n스테이지: ${gameState.stage}, 점수: ${gameState.score}`);
    start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.isPlay]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(start, []);

  return {
    gameState,
    action: { clickHandler },
  };
};

export default useGame;
