import { Brain, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handlePrompt = () => {
    navigate("/prompt");
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate("/"); // Redirect to home
  };

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer">
            <Brain className="h-8 w-8 text-purple-500" />
            <a href="/">
              <span className="ml-2 text-xl font-semibold text-white">MindWell</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Conditionally render based on token */}
            {token ? (
              <>
                <button 
                  onClick={handlePrompt} 
                  className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Prompt
                </button>
                <button 
                  onClick={handleLogout} 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={handleLogin} 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </button>
                <button 
                  onClick={handleSignup} 
                  className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
