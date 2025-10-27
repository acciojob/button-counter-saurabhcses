
import React from "react";
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  function ButtonCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1); 
  };
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
            
export default App
