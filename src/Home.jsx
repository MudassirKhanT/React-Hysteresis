import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { createContext } from "react";

export const dataContext = createContext();

function Home() {
  const [apiData, setApiData] = useState([]);

  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos", { signal })
        .then((res) => res.json())
        .then((data) => setApiData(data))
        .catch((err) => console.log(err));
    }, 3000);
    return () => {
      controller.abort();
      console.log("Clean Up Function");
    };
  }, []);
  const data = "Props Drilling";
  //   if(apiData.length==1){
  //     return(
  //         <>
  //         <p>One ich bhai</p>
  //         </>
  //     )
  //   }

  return (
    <>
      <dataContext.Provider value={data}>
        <Login />
      </dataContext.Provider>

      <ul>
        {apiData &&
          apiData.map((api, index) => (
            <li key={index}>
              {api.title} - {api.userId}
            </li>
          ))}
      </ul>
      <h1>Home Component</h1>
      <Link className="btn btn-warning" to={"/login"}>
        Login
      </Link>
    </>
  );
}
export default Home;
