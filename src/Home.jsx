import { useEffect, useState } from "react";

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
      <ul>
        {apiData &&
          apiData.map((api, index) => (
            <li key={index}>
              {api.title} - {api.userId}
            </li>
          ))}
      </ul>
      <h1>Home Component</h1>
    </>
  );
}
export default Home;
