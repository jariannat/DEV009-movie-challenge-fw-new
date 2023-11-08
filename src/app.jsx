import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/home';
import { OnlyMovie } from './views/onlyMovie';
import Header from './components/header';


function App() {
  return ( 
  <Router>
  <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<OnlyMovie />} />
    </Routes>
    </Router>
  );
}

export default App;
