import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>Counter value: {counter}</h2>

      <button type="button" onClick={addValue}>
        Add Count
      </button>
      <br />
      <button type="button" onClick={removeValue}>
        Remove Count
      </button>
    </div>
  );
}

export default Counter;
