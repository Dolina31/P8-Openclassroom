import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Errorpage from './pages/Errorpage';
import Home from './pages/Home';

const App = () => {
    return (
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Errorpage />} />
        </Routes>
       </BrowserRouter>
    );
};

export default App;