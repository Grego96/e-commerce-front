import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { storeToken } from "../redux/tokenActions";
import { storeUser } from "../redux/userActions";

function LoginHome() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const [loginMessage, setLoginMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("")

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  async function login(email,password) {
    try {
      const result = await axios({
        method: "post",
        baseURL: `${process.env.REACT_APP_API_BASE}/login`,
        headers: {
          "Content-type": "application/json",
        },
        data: {
          email: email,
          password: password,
        },
      });
      setLoginMessage("");
      dispatch(storeToken(result.data.token));
      dispatch(storeUser(result.data.user));
    } catch (error) {
      setLoginMessage(error.response.data.message);
    }
  }

  async function register() {
    try {
      const result = await axios({
        method: "post",
        baseURL: `${process.env.REACT_APP_API_BASE}/register`,
        headers: {
          "Content-type": "application/json",
        },
        data: {
          firstname: registerFirstName,
          lastname: registerLastName,
          email: registerEmail,
          password: registerPassword,
        },
      });
      console.log(result.data);
      login(registerEmail,registerPassword)
      setRegisterMessage("")
    } catch (error) {
      console.log(error);
      setRegisterMessage(error.response.data.message);
    }
  }

  return (
    <div className="login-home">
      <div
        style={
          Object.keys(user).length === 0 && user.constructor === Object
            ? { display: "block", opacity: 1 }
            : { display: "none" }
        }
      >
        <div className="login-register">
          <button
            onClick={() => {
              setShowLogin(true);
              setShowRegister(false);
            }}
            style={
              showLogin
                ? { borderBottom: "3px solid rgb(255, 166, 0)" }
                : { borderBottom: "3px solid lightgray" }
            }
          >
            Login
          </button>
          <button
            onClick={() => {
              setShowRegister(true);
              setShowLogin(false);
            }}
            style={
              showRegister
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
          <button className="login-button" onClick={() => login(loginEmail,loginPassword)}>
            Login
          </button>
          <p>Forgot your password?</p>
        </div>
        <div
          className="form-register"
          style={showRegister ? { visibility: "visible", opacity: 1 } : { visibility: "hidden" }}
        >
          <h6 className="login-title">Register</h6>
          <p className="loginMessage">{registerMessage}</p>
          <label htmlFor="Firstname">Firstname:</label>
          <input type="text" onChange={(e) => setRegisterFirstName(e.target.value)} />
          <label htmlFor="Lastname">Lastname:</label>
          <input type="text" onChange={(e) => setRegisterLastName(e.target.value)} />
          <label htmlFor="Email">Email:</label>
          <input type="text" onChange={(e) => setRegisterEmail(e.target.value)} />
          <label htmlFor="password">Password:</label>
          <input type="password" onChange={(e) => setRegisterPassword(e.target.value)} />
          <button className="login-button" onClick={() => {register()}}>Register</button>
        </div>
      </div>
      <div
        className="form-register"
        style={
          !(Object.keys(user).length === 0 && user.constructor === Object)
            ? { visibility: "visible", opacity: 1 }
            : { visibility: "hidden" }
        }
      >
        <p>
          Loged as: {user.first_name} {user.last_name}
        </p>
      </div>
    </div>
  );
}

export default LoginHome;
