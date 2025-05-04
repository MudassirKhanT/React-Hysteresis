import { useState } from "react";

function Login() {
  const [pwd1, setPdw1] = useState("");
  const [pwd2, setPdw2] = useState("");
  const [match, setMatch] = useState(false);

  function handlePassword1(event) {
    setPdw1(event.target.value);
    console.log("Event1:", event.target.value);
  }
  function handlePassword2(event) {
    setPdw2(event.target.value);
    if (pwd1 == event.target.value) {
      setMatch(true);
    } else {
      setMatch(false);
    }
    console.log("Event2:", event.target.value);
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Email address
          </label>
          <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">
            Password
          </label>
          <input value={pwd1} onChange={handlePassword1} type="password" className="htmlForm-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="htmlForm-label">
            Re-Enter Password
          </label>
          <input value={pwd2} onChange={handlePassword2} type="password" className="htmlForm-control" id="exampleInputPassword2" />
        </div>
        {!match && <p>password didn't match</p>}
        <div className="mb-3 htmlForm-check">
          <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
          <label className="htmlForm-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Login;
