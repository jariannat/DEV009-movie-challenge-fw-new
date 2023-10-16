import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/home';
import MovieDetail from './views/movieDetail';
import Header from './components/header';


function App() {
  return (<React.StrictMode>
  <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<MovieDetail />} />
    </Routes>
    </React.StrictMode>
  );
}

export default App;
