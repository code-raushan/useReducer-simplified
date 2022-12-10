import React, { useState} from "react";
import "./App.css";
import ReducerApp from "./ReducerApp";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* Counter App with useState */}
      <div style={{textAlign: 'center'}}>State management with useState hook.</div>
      <div
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{ margin: 20 }}
          onClick={() => setCount((count) => count + 1)}
        >
          Increment Me
        </button>
        <button
          style={{ margin: 20 }}
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement Me
        </button>
        <div>{count}</div>
      </div>
      <div style={{textAlign: 'center'}}>State management with useReducer hook.</div>
      <ReducerApp/>
    </>
  );
}

export default App;
