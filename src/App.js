import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  console.log('balls: ', balls)
  console.log('strikes: ', strikes)

  const strike = () => {
    strikes < 2 ? setStrikes(strikes + 1) : setStrikes(0)
  }

  return (
    <div className="App">
      <Display 
      balls={balls}
      strikes={strikes}
      />
      <Dashboard 
      strike={strike}
      />
    </div>
  );
}

export default App;
