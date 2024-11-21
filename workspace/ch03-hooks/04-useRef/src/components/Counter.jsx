import { useReducer, useRef, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  const [count, countDispatch] = useReducer(counterReducer, initCount);

  // 값이 바뀌어도 렌더링이 안되나, 다른 곳에서 쓰이는 변수
  const step = useRef(1); // {current: 1 반환}
  const stepElem = useRef(null);

  const handleDown = () => {
    countDispatch({ type: "DOWN", value: step.current });
  };
  const handleUp = () => {
    countDispatch({ type: "UP", value: step.current });
  };
  const handleReset = (event) => {
    countDispatch({ type: "RESET", value: initCount });
    stepElem.current.focus();
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        style={{ width: "40px" }}
        defaultValue={step.current}
        onChange={(e) => (step.current = Number(e.target.value))}
        ref={stepElem}
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
