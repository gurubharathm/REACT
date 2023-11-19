import React, { useState } from "react";
import { Navigate } from "react-router";
import logo from "../logo.svg";
const LoginPage = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "admin",
      password: "admin",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({
          name: "pass",
          message: errors.pass,
        });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({
        name: "uname",
        message: errors.uname,
      });
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" value="admin" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" value="admin" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Login</h1>
      <div className="form">
        {isSubmitted ? <Navigate to="/dashboard" /> : renderForm}
      </div>
    </header>
  );
};

export default LoginPage;
