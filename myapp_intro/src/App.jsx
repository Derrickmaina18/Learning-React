import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Spacer from "./components/Card/Spacer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Counter Add</button>
      <p>{count}</p>
    </>
  );
}

export default App;
