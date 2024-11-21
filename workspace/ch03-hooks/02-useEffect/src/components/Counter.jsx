import { useEffect, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  const initCount = Number(children);
  let [count, setCount] = useState(initCount);
  const [step, setStep] = useState(1);

  const handleDown = () => {
    setCount(count - step);
  };
  const handleUp = () => {
    setCount(count + step);
  };
  const handleReset = (event) => {
    setCount(initCount);
  };

  // 1초 후에 자동으로 값 증가
  // setTimeout(() => {
  //   handleUp();
  // }, 1000);

  // 마운트 된 후에 최초 1회 값 증가
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  // }, []);

  // 부수효과를 발생시키는 함수(컴포넌트를 비순수함수로 만드는 함수)는 useEffect에 넣는다.
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

export default Counter;
