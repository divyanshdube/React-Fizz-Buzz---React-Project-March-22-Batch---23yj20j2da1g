import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [count, issetCount] = useState(1);
  const [setClass, isClassSet] = useState("normal");

  useEffect(() => {
    if (count % 3 === 0) {
      {
        isClassSet("fizz");
      }
    } else if (count % 5 === 0) {
      {
        isClassSet("buzz");
      }
    } else if (count % 3 === 0 && count % 5 === 0) {
      {
        isClassSet("fizzbuzz");
      }
    } else {
      {
        isClassSet("normal");
      }
    }
  }, [count]);

  return (
    <div id="main">
      <button
        id="increment"
        onClick={() => {
          issetCount(count + 1);
        }}
      >
        Increment
      </button>
      <div id="counter">{count}</div>
      <button
        id="decrement"
        onClick={() => {
          issetCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
