import React from 'react';
import './style.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="details/:id" element={<Details />} />
          <Route path="/*" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
