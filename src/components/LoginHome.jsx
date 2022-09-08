import React from "react";
import { useState } from "react";

function LoginHome() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-home">
      <div className="login-register">
        <button onClick={() => setShowLogin(true)} style={ showLogin ? {borderBottom: "3px solid rgb(255, 166, 0)"}:{borderBottom: "3px solid lightgray"}}>Login</button>
        <button onClick={() => setShowLogin(false)} style={ !showLogin ? {borderBottom: "3px solid rgb(255, 166, 0)"}:{borderBottom: "3px solid lightgray"}}>Register</button>
      </div>
      <div className="form-login" style={ showLogin ? {visibility: "visible", opacity: 1}:{visibility: "hidden"}}>
        <h6 className="login-title">Sign in</h6>
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button className="login-button">Login</button>
        <p>Forgot your password?</p>
      </div>
      <div className="form-register" style={ !showLogin ? {visibility: "visible", opacity: 1}:{visibility: "hidden"}}>
        <h6 className="login-title">Register</h6>
        <label htmlFor="Firstname">Firstname:</label>
        <input type="text" />
        <label htmlFor="Lastname">Lastname:</label>
        <input type="text" />
        <label htmlFor="Email">Email:</label>
        <input type="text" />
        <label htmlFor="password">Password:</label>
        <input type="password" />
        <button className="login-button">Register</button>
        <p>Forgot your password?</p>
      </div>
    </div>
  );
}

export default LoginHome;
