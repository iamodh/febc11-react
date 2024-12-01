import { useAtomValue } from "jotai";
import { countAtom } from "../jotai/atoms";
import { useEffect } from "react";

function Left3() {
  const count = useAtomValue(countAtom);
  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });

  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
