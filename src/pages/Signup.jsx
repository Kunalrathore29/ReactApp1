import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/api";
import "../styles/Login.css";


const Signup = () => {
  const [name, setName] = useState(""); // ✅ Add name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    try {
      const res = await signupUser({ name, email, password }); // ✅ Send name
      setSuccessMsg("Signup successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      if (err.response && err.response.data) {
        setErrMsg(err.response.data.message);
      } else {
        setErrMsg("Something went wrong");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Signup</h2>
      {errMsg && <p className="error-message">{errMsg}</p>}
      {successMsg && <p style={{ color: "green", textAlign: "center" }}>{successMsg}</p>}
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
