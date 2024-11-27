import CounterContext from "@context/CounterContext";
import { SimpleContext } from "@context/SimpleContext";
import { useContext, useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });
  const simple = useContext(SimpleContext);
  const {
    actions: { countUp },
  } = useContext(CounterContext);
  return (
    <div>
      <h3>Right3 - {simple.hello}</h3>
      <button
        onClick={() => {
          countUp(1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Right3;
