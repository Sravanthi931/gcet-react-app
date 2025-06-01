import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" />
      <br />
      <input type="email" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button onClick={() => navigate("/")}>Submit</button>
    </div>
  );
}
