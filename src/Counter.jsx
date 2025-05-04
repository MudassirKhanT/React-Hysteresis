import { useState } from "react";

function Counter() {
  //Updator Function => give an arrow function and perform the operation
  //Updator function Name -> Precount
  const [count, setCount] = useState(0);
  function Increment() {
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
  }

  return (
    <>
      <h2>Counter Function</h2>
      <button onClick={Increment}>Click Me:{count}</button>
    </>
  );
}
export default Counter;
