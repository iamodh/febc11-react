import PropTypes from "prop-types";
import { createContext, useState } from "react";

// 1. Context 객체 생성
const CounterContext = createContext();

CounterProvider.propTypes = {
  children: PropTypes.node,
};

// 3. Provider 컴포넌트를 작성해서 export
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const countUp = function (step) {
    setCount(count + step);
  };

  // 4. 데이터, 상태, 상태를 관리하는 함수 정의
  const values = {
    state: { count },
    actions: { countUp },
  };

  // 5. Context 객체의 Provider를 자식 객체로 감싸서 반환
  // value 속성에 전달할 Context 값 지정
  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
}

{
  /* <CounterProvider>
  <App />
</CounterProvider>; */
}

// 2. Context 객체 export
export default CounterContext;
