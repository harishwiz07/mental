
import { useNavigate } from "react-router-dom";

export function AppBar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-4 bg-[rgba(136,2,136)] text-white fixed top-0 w-full shadow-md ">
      <div className="text-2xl font-bold text-black">Mental Health</div>
      <div className="flex gap-2">
        <button 
          className="bg-black text-white px-4 py-2 rounded" 
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        <button 
          className="bg-black text-white px-4 py-2 rounded" 
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
      </div>
    </div>
  );
}