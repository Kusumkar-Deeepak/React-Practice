import { useState } from "react";

export default function Counter() {
  let [count , setCount] = useState(0)

  function incCount(){
    setCount(count + 1)
  }
  function decCount() {
    setCount(count - 1)
  }
  function resetCount() {
    setCount(count = 0)
  }

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={incCount}>Increase</button>
    <button onClick={decCount}>Decrease</button>
    <button onClick={resetCount}>reset</button>
    </>
  )
}