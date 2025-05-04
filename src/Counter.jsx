import { useState } from "react";

function Counter() {
  //Updator Function
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>Counter Function</h2>
      <button onClick={Increment}>Click Me:{count}</button>
    </>
  );
}
export default Counter;
