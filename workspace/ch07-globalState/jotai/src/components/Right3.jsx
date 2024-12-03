import { useAtom, useSetAtom } from "jotai";
import { countAtom } from "../jotai/atoms";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  const setCount = useSetAtom(countAtom);

  const countUp = function (step) {
    setCount((count) => count + step);
  };
  const countDown = function (step) {
    setCount((count) => count - step);
  };
  const countReset = function () {
    setCount(0);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => countReset()}>0</button>
      <button onClick={() => countUp(+2)}>+2</button>
    </div>
  );
}

export default Right3;
