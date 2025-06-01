import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button onClick={() => navigate("/")}>Submit</button>
      <br />
      <button onClick={() => navigate("/register")}>Create Account</button>
    </div>
  );
}
