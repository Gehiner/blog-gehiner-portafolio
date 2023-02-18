import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Proyects from './Pages/Proyects';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import AboutMe from './Pages/AboutMe';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/' 
          element={<Home/>} 
          exact
        ></Route>
        <Route
          path='/proyects' 
          element={<Proyects/>} 
          exact
        ></Route>
        <Route
          path='/skills' 
          element={<Skills/>} 
          exact
        ></Route>
        <Route
          path='/experience' 
          element={<Experience/>} 
          exact
        ></Route>
        <Route
          path='/aboutme' 
          element={<AboutMe/>} 
          exact
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

