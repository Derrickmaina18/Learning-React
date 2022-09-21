import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Spacer from "./components/Card/Spacer";

function App() {
  const user = {
    name: "Derrick",
    isAuth: false,
  }
  const {name, isAuth} = user
  return (
    <>
      <h1>The App</h1>
      <p className={isAuth ? "isAuthenticated" : "isUnAuth"}>Welcome {isAuth ? name : "Please Login First"}</p>

      {!isAuth && <button type="button">Login</button>}
    </>
  );
}

export default App;
