import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Food from "./pages/food";
import Sidebar from "./components/global/sidebar";
import Profile from "./pages/profile";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/food" element={<Food />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
