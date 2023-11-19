import React, { useState } from "react";
import { Navigate } from "react-router";
import logo from "../logo.svg";
import { TextField, Button, Stack } from "@mui/material";
import { FormControl } from "@material-ui/core";

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
    <form className="form form-login" onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2}>
        <FormControl>
          <TextField
            required
            id="outlined-required"
            label="Username"
            name="uname"
            defaultValue="admin"
            size="small"
            variant="filled"
          />
          {renderErrorMessage("uname")}
        </FormControl>
        <FormControl>
          <TextField
            required
            id="outlined-required"
            label="Password"
            name="pass"
            defaultValue="admin"
            size="small"
            variant="filled"
            type="password"
          />
          {renderErrorMessage("pass")}
        </FormControl>
        <FormControl>
          <Button variant="contained" size="medium" type="submit">
            Login
          </Button>
        </FormControl>
      </Stack>
    </form>
  );

  return (
    <>
      <div class="background"></div>
      <div className="login">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Login</h1>
        {isSubmitted ? <Navigate to="/dashboard" /> : renderForm}
      </div>
    </>
  );
};

export default LoginPage;
