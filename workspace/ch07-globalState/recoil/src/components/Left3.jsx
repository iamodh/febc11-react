import { counterState } from "@recoil/atoms";
import { counterStateKor } from "@recoil/selector";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

function Left3() {
  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });

  // const count = useRecoilValue(counterState); // atom에서 열기
  const count = useRecoilValue(counterStateKor);
  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
