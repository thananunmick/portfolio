import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Topics from './components/Topics';
import Profile from './components/Profile';
import Courseworks from './components/Courseworks';
import * as React from 'react';
import temple from './temple.png'

function App() {
  return (
    <div className="App">
      <Landing/>
      <Topics/>
      <Profile/>
      <Courseworks/>
    </div>
  );
}

export default App;
