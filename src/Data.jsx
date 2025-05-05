import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Data() {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((res) => res.json())
      .then((cData) => {
        setData(cData);
        console.log("data:", cData);
      })
      .catch((err) => console.log(err.message));
  }, [id]);
  console.log("ID:", id);

  console.log("DAta:::", data);

  return (
    <>
      {data && (
        <div>
          <h1>Todos UserId : {id}</h1>
          <h1>Todos Title: {data.title}</h1>
        </div>
      )}
    </>
  );
}
export default Data;
