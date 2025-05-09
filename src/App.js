import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HackerMarket from './components/HackerMarket';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <HackerMarket />
    </BrowserRouter>
  );
}

export default App;