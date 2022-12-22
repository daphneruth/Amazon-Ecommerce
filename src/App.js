import data from './data';
import { ReactDOM } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom ';
import HomeRoute from './Routes/HomeRoute';
import ProductRoute from './Routes/productRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <a href ="/"> Amazon </a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeRoute/>} />
          <Route path="/" element={<ProductRoute/>} />
        </Routes>
       
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
