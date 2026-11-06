// import "./loginjs.js"
import "./login.css";
import video1 from "../Pics/vid2.mp4";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../auth";

function Login() {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  async function submitForm(event) {
    event.preventDefault();
    const username = document.getElementById("admin").value;
    const password = document.getElementById("password").value;
    const role = await login(username, password);
    if (role) {
      setSubmit(true);
      navigate(role === "admin" ? "/admin" : "/");
    } else {
      alert("Incorrect username or password.");
    }
  }

  return (
    <div>
      {submit ? <></> : (
        <div>
          <video autoplay muted loop id="myVideo">
            <source src={video1} type="video/mp4" />
          </video>
          <div className="login-box">
            <h2>Login</h2>
            <form>
              <div className="user-box">
                <input type="text" id="admin" required />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" id="password" required />
                <label>Password</label>
              </div>
              <a
                href="/"
                id="submit-button"
                onClick={submitForm}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
