import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chat } from "./components/Chat";
import { AppBar } from "./components/AppBar";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";


export function App() {
  return (
    <Router>
      <AppBar />
      <div className="mt-16">
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={< Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
