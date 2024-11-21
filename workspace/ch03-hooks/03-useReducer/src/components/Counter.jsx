import { useEffect, useReducer, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  const [count, countDispatch] = useReducer(counterReducer, initCount);

  const [step, setStep] = useState(1);

  const handleDown = () => {
    countDispatch({ type: "DOWN", value: step });
  };
  const handleUp = () => {
    countDispatch({ type: "UP", value: step });
  };
  const handleReset = () => {
    countDispatch({ type: "RESET", value: initCount });
  };
  useEffect(() => {
    console.log(step, "setup 함수 호출");
    const timer = setInterval(() => {
      // 클로저, 생성될 당시의 step을 참조함
      console.log(step, new Date());
    }, 1000);

    return () => {
      console.log(step, "cleanup 함수 호출");

      clearInterval(timer);
    };
  }, [step]);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        style={{ width: "40px" }}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <Button color="red" onClick={handleDown}>
        -
      </Button>
      <Button onClick={handleReset}>{initCount}</Button>
      <Button color="blue" onClick={handleUp}>
        +
      </Button>
      <span>{count}</span>
    </div>
  );
}

// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
// state: 이전 상태 (useReducer가 내부적으로 관리, 이전의 return 값이 다음에 state로 전달 됨)
// action: 동작을 정의한 객체
// 리턴 값: 새로운 상태
function counterReducer(state, action) {
  let newState;

  switch (action.type) {
    case "DOWN":
      newState = state - action.value;
      break;
    case "UP":
      newState = state + action.value;
      break;
    case "RESET":
      newState = action.value;
      break;
    default:
      newState = state;
  }

  return newState;
}

export default Counter;
