import React, { useState } from "react";
import "./LoginPage.css";
import mailIcon from "../Assets/mail.png";
import passwordIcon from "../Assets/password.png";




function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

const loginUser = async () => {
  const payload = { email, password };

  try {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); 
      window.location.href = "/home"; 
      alert("Login successful!");
      // Redirect user to dashboard or protected route
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
};


  return (
    <div className="login-side-container">
      <div className="login-screen">
        <div className="login-header">
          <h1 className="login-header">Login</h1>
          <hr className="line" />
        </div>

        <div className="input2-group">
          <input
            className="input2_box"
            value={email}
            onChange={changeEmail}
            placeholder=" "
          />
          {email.trim() === "" && <div className="inside-box2">Email</div>}
          <img src={mailIcon} width={25} height={25} alt="Email" className="icon1" />
        </div>

        <div className="input2-group">
          <input
            className="input2_box"
            type="password"
            value={password}
            onChange={changePassword}
            placeholder=" "
          />
          {password.trim() === "" && <div className="inside-box2">Password</div>}
          <img src={passwordIcon} width={25} height={25} alt="Password" className="icon1" />
        </div>

        <button className="save-button" onClick={loginUser}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
