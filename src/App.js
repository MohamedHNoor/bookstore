import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './component/Navbar';
import './App.css';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<h1>Error...</h1>} />
    </Routes>
  </div>
);

export default App;
