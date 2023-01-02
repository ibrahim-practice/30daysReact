import React, { useState } from "react";

export default function Hooks_Usestate() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement} disabled={count === 10 ? true : false}>
        Increment
      </button>
    </div>
  );
}
