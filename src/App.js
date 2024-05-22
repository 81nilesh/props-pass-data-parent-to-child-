import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [isValue, setIsValue] = useState("");
  const [inputValueShow, setInputValueHide] = useState(false);


  const handleClick = (evennt) => {
    console.log(evennt.target.value)
    setIsValue(evennt.target.value);

    setInputValueHide(false);
  }
  return (
    <div className='App'>
      <h1>{inputValueShow ? isValue : ""}</h1>
      <input type="text" onChange={handleClick} />

      <button onClick={() => setInputValueHide(true)}>submit</button>
    </div>
  );
}

export default App;
