import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="gioi-thieu" element={<About />} />
        <Route path="san-pham" element={<Products />} />
        <Route path="tin-tuc" element={<News />} />
        <Route path="lien-he" element={<Contact />} />
        <Route path="*" element={<div className="text-center py-20">404 - Không tìm thấy trang</div>} />
      </Route>
    </Routes>
  );
}

export default App;
