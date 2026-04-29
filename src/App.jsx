import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';

function App() {
  return (

      <Routes>
        {/* Saare pages is MainLayout ke andar render honge */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
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