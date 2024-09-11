// src/pages/Login.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authSlices";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("end-user");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ user: username, role }));
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 mb-4 w-full"
        >
          <option value="end-user">End User</option>
          <option value="tech-support">Tech Support</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
