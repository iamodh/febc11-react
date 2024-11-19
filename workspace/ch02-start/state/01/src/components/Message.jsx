// 질문
// 1. 모듈 스코프
// 2. state가 바뀌면 모았다가 한 번에 리렌더

import { useState } from "react";
// 모듈 스코프??
// let count = 0;

export default function Message() {
  console.log("Message 렌더링");
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (event) => {
    const inputMsg = event.target.value;
    setMsg(inputMsg);
    setCount(count + 1);
    // count++;
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <br />
      <span>입력 메시지: {msg}</span>
      <br />
      <span>입력 횟수: {count}</span>
    </div>
  );
}
