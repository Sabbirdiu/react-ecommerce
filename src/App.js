import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages

//Header
import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
