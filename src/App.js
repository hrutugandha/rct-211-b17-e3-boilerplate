import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import { Pagination } from "./Components/Pagination";

function App() {

  const [count,setCounter] = useState(0)

const handleChange = (value) =>{
    setCounter(count + value)
}
const handledec = (value) =>{
  setCounter(count - value)
}
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Button.jsx and Pagination.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */


  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {count}</h3>
      <button onClick={() => handleChange()}>Increment</button>
      <button onClick={() => handleChange(3)}>Increment 3</button>
      <button onClick={() => handledec(2)}>Decrement 2</button>
      <button onClick={() => handledec(4)}>Decrement 4</button>
      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Button />
      <br />
      <Pagination />
    </div>
  );
}

export default App;
