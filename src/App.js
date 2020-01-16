import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
