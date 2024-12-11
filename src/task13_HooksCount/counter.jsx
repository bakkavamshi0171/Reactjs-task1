import React, { useState } from "react";

function CounterUsingHooks() {
  let [prevsCount, updatedCount] = useState(0);

  const handleincrement = () => {
    return updatedCount(prevsCount + 1);
  };
  const handledecrement = () => {
    return updatedCount(prevsCount - 1);
  };
  const handlereset = () =>{
    return updatedCount(prevsCount*0)
  }
  return (
    <div>
      <h1 style={{fontSize:"50px"}}>{prevsCount}</h1>
      <button onClick={handledecrement} style={{
        backgroundColor: "red",
        color: "white",
        fontSize: "larger",
        padding: "12px",
        margin: "5px",
        borderRadius: "5px",
        borderStyle: "none",
      }}>
        Decrement
      </button>
      <button
        onClick={handleincrement}
        style={{
          backgroundColor: "green",
          color: "white",
          fontSize: "larger",
          padding: "12px",
          margin: "5px",
          borderRadius: "5px",
          borderStyle: "none",
        }}
      >
        Increment
      </button>
      <button
        onClick={handlereset}
        style={{
          backgroundColor: "yellow",
          color: "Black",
          fontSize: "larger",
          padding: "12px",
          margin: "5px",
          borderRadius: "5px",
          borderStyle: "none",
        }}
      >
        Reset
      </button>

    </div>
  );
}
export default CounterUsingHooks;
