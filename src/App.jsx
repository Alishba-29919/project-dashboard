import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { useState } from 'react';

function App() {
  const [ isLoggedIn , setIsLoggedIn] = useState(false);
  return (
      
      <Routes>
        {/* if not log in  */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        {/* 2. Logout Page (ISAY MAINLAYOUT SE BAHAR RAKHEN) */}
  <Route 
    path="/logout" 
    element={<Logout setIsLoggedIn={setIsLoggedIn} />} 
  />
        {/* if log in  */}
        <Route 
          path="/" 
          element={isLoggedIn ? <MainLayout setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />}
        >
          <Route index element={<Dashboard />} />
        {/* Saare pages is MainLayout ke andar render honge */}
        {/* <Route path="/" element={<MainLayout />}> */}
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="products" element={<Products />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path='settings' element={<Settings />} />
        </Route>
 
      </Routes>

  );
}

export default App;