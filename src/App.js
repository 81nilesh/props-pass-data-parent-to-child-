import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [status, setStatus] = useState(true)
  return (
    <div className='App'>
      <h1>Show Hide & Toggle</h1>
      {status ? <div className='status'>Contant</div> : null}

      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
    </div>
  );
}

export default App;
