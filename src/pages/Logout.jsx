import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout({ setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Jaise hi ye page "load" hoga, ye foran login ko false kar dega
    setIsLoggedIn(false);
    // Aur 1 second baad wapis login page par bhej dega
    navigate('/login');
  }, [setIsLoggedIn, navigate]);

  return (
    <div className="min-h-screen bg-[#0b0e14] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white font-bold animate-pulse">Logging out...</p>
      </div>
    </div>
  );
}