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
<<<<<<< HEAD
=======
         
>>>>>>> b48fd8077618ad63ac13ce76b1bcaf8a2215cb6b
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
