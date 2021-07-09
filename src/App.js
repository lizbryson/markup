import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');

  const handleInputChange = ({ target }) => {
    setInput(target.value);
  }

  return (
    <div className="App">
      <div className="app__half half--left">
        <form>
          <textarea onChange={handleInputChange}>

          </textarea>
        </form>
      </div>
      <div className="app__half half--right">
         { input }
      </div>
    </div>
  );
}

export default App;
