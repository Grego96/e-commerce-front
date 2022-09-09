import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeToken } from "../redux/tokenActions";
import { storeUser } from "../redux/userActions";

function LoginHome() {
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(true);

  const [loginMessage, setLoginMessage] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  async function login() {
    try {
      const result = await axios({
        method: "post",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}/login`,
        headers: {
          "Content-type": "application/json",
        },
        data: {
          email: loginEmail,
          password: loginPassword,
        },
      });
      console.log(result);
      setLoginMessage("");
      dispatch(storeToken(result.data.token));
      dispatch(storeUser(result.data.user));
    } catch (error) {
      setLoginMessage(error.response.data.message);
      console.log(error);
    }
  }

  return (
    <div className="login-home">
      <div className="login-register">
        <button
          onClick={() => setShowLogin(true)}
          style={
            showLogin
              ? { borderBottom: "3px solid rgb(255, 166, 0)" }
              : { borderBottom: "3px solid lightgray" }
          }
        >
          Login
        </button>
        <button
          onClick={() => setShowLogin(false)}
          style={
            !showLogin
              ? { borderBottom: "3px solid rgb(255, 166, 0)" }
              : { borderBottom: "3px solid lightgray" }
          }
        >
          Register
        </button>
      </div>
      <div
        className="form-login"
        style={showLogin ? { visibility: "visible", opacity: 1 } : { visibility: "hidden" }}
      >
        <h6 className="login-title">Sign in</h6>
        <p className="loginMessage">{loginMessage}</p>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button className="login-button" onClick={() => login()}>
          Login
        </button>
        <p>Forgot your password?</p>
      </div>
      <div
        className="form-register"
        style={!showLogin ? { visibility: "visible", opacity: 1 } : { visibility: "hidden" }}
      >
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
