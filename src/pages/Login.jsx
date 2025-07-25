import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/api";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    try {
      const res = await loginUser({ email, password });

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("username", res.data.name);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err.response);
      setErrMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errMsg && <p className="error-message">{errMsg}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
