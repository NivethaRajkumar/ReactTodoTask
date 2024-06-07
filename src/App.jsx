import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Card from './Components/Card'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Card />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;