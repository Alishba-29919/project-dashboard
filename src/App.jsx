import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#0b0e14]">
        {/* Sidebar remains fixed */}
        <Sidebar />
        
        {/* Right Content Area */}
        <div className="flex-1">
          <Navbar />
          {/* Change content based on URL */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<div className="p-8 text-white text-2xl font-bold">Settings Page Coming Soon...</div>} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;