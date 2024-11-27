import { useEffect, useState } from "react";
import Left1 from "@components/Left1";
import Right1 from "@components/Right1";
import { CounterProvider } from "@context/CounterContext";
import { SimpleContext } from "@context/SimpleContext";

function App() {
  const [count, setCount] = useState(0);

  const countUp = function (step) {
    setCount(count + step);
  };

  useEffect(() => {
    console.log("# App 렌더링.");
  });

  return (
    <>
      <h1>Context API - Context API 사용</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <CounterProvider>
            <Left1 />
            <SimpleContext.Provider value={{ hello: "world" }}>
              <Right1 />
            </SimpleContext.Provider>
          </CounterProvider>
        </div>
      </div>
    </>
  );
}

export default App;
