import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Weatherdata from "../Weatherdata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Weatherdata />
    </>
  );
}

export default App;
