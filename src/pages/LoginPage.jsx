import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "test" && password === "123456") {
      navigate("/list");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-80">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Login
        </h1>
        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
