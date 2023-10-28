import { useState } from "react";
import Dashboard from "./pages/dashboard";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/" element={<Login setToken={setToken} />} />
    </Routes>
  );
}

export default App;
