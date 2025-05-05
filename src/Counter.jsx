import { useRef, useState } from "react";
// import { useContext } from "react";
// import { dataContext } from "./Home";

function Counter() {
  // const data = useContext(dataContext);
  //Updator Function => give an arrow function and perform the operation
  //Updator function Name -> Precount
  const [count, setCount] = useState(0);
  let refCount = useRef(0);
  function Increment() {
    // setCount((pre) => pre + 1);
    // setCount((pre) => pre + 1);
    // setCount(count + 1);
    refCount.current += 1;
  }
  // console.log("data:", data);

  return (
    <>
      {/* <h1>{data}</h1> */}
      <h2>Counter Function</h2>
      <h2>{count}</h2>
      <button onClick={Increment}>Click</button>
      <button onClick={() => setCount(refCount.current)}>Update</button>
      {/* <h1>{data}</h1> */}
    </>
  );
}
export default Counter;
