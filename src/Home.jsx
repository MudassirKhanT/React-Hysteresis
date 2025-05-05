import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Login from "./Login";
// import { createContext } from "react";

// export const dataContext = createContext();

function Home() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos", { signal })
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }, 1000);
    return () => {
      controller.abort();
      console.log("Clean Up Function");
    };
  }, []);
  // const data = "Props Drilling";
  //   if(apiData.length==1){
  //     return(
  //         <>
  //         <p>One ich bhai</p>
  //         </>
  //     )
  //   }

  return (
    <>
      {/* <dataContext.Provider value={data}>
        <Login />
      </dataContext.Provider> */}
      <h1>Home Component</h1>
      <Link className="btn btn-warning" to={"/login"}>
        Login
      </Link>

      <ul>
        {apiData &&
          apiData.map((api, index) => (
            <li key={index} onClick={() => navigate("/data/" + api.id)}>
              {api.title} - {api.userId}
            </li>
          ))}
      </ul>
    </>
  );
}
export default Home;
