import "./App.css";
import Counter from "./Counter";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Login />
      <Home />
      <NotFound />
      <Counter />
    </>
  );
}

export default App;
