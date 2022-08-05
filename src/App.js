import React from 'react';
import './style.css';
import Home from './pages/Home';
import { BrowserRoutes as Routes, Route } from 'react-router';
export default function App() {
  return (
    <div>
      <Routes>
        <Home />
      </Routes>
    </div>
  );
}
