import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h2>이벤트 핸들러에서 state값을 여러번 변경했을 때 문제점</h2>
      <p>{number}</p>
      <button
        onClick={() => {
          console.log("클릭 시작", number); // 0
          // setNumber(number + 1); // 0 + 1
          // setNumber(number + 1); // 0 + 1

          // 내부적으로 콜백함수의 리턴값을 저장해 놓았다가 다음에 호출되는 콜백함수로 전달
          setNumber((num) => num + 1); // 0 + 1
          setNumber((num) => num + 1); // 1 + 1
          setNumber((num) => num + 1); // 2 + 1
          console.log("클릭 종료", number); // 0
          // 함수 내부에서 number는 0이었다가,
          // 리렌더 될 때 setNumber에의해 취합된 값으로 바뀐다.
        }}
      >
        +3
      </button>
    </>
  );
}

export default App;
