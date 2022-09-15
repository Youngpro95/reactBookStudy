import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Profile from './Profile';
import Login from './Login'
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div>
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}

export default App;
