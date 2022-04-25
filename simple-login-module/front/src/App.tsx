import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="signup" element={<Signup />}/>
    </Routes>
  )
}

export default App;