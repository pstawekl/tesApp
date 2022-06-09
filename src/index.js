import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { App, ResponsiveAppBar } from './App.jsx';
import reportWebVitals from './reportWebVitals';
import LogIn from './pages/loginSite';

ReactDOM.render(
  <div className='body'>
    <ResponsiveAppBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='logIn' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
