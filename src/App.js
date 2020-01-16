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
    strikes < 3 ? setStrikes(strikes + 1) : setStrikes(0)
  }
  const ball = () => {
    balls < 4 ? setBalls(balls + 1) : setBalls(0)
  }
  const foul = () => {
    strikes < 2 ? setStrikes(strikes + 1) : setStrikes(strikes)
  }
  const hit = () => {
    setBalls(0)
    setStrikes(0)
  }
  if ( balls === 4 ) {
    setBalls(0)
    setStrikes(0)
    alert('Take first base')
  }
  if (strikes === 3 ) {
    setStrikes(0)
    setBalls(0)
    alert('Your out!!')
  }

  return (
    <div className="App">
      <Display 
      balls={balls}
      strikes={strikes}
      />
      <Dashboard 
      strike={strike}
      ball={ball}
      foul={foul}
      hit={hit}
      />
    </div>
  );
}

export default App;
