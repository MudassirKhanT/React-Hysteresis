import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err));
  }, []);
  //   if(apiData.length==1){
  //     return(
  //         <>
  //         <p>One ich bhai</p>
  //         </>
  //     )
  //   }
  console.log("Size:", apiData.length);

  return (
    <>
      {/* <ul>
        {apiData &&
          apiData.map((api, index) => (
            <li key={index}>
              {api.title} - {api.userId}
            </li>
          ))}
      </ul> */}
      <h1>Home Component</h1>
      <Link to={"/login"}>Login</Link>
    </>
  );
}
export default Home;
