import React, { useState } from "react";
import { Navigate } from "react-router";
import logo from "../logo.svg";
import { TextField, Button, Stack } from "@mui/material";
import { FormControl } from "@material-ui/core";
import axios from "axios";
import { useAuth } from "../common/AuthContext";
const baseURL = "https://api.omniguru.in/query";

const LoginPage = () => {
  //const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent page reload

    var { uname, pass } = document.forms[0];

    const body =
      "select * from User where Username = '" +
      uname.value +
      "' and Password = '" +
      pass.value +
      "'";
    console.log(body);
    axios.post(baseURL, body).then(
      (response) => {
        if (
          response.data?.data != undefined &&
          response.data.data.length == 1
        ) {
          var u = response.data.data[0];
          var user = {"Id": u.Id, "Username": u.Username }
          
          setAuthUser(user);
          localStorage.setItem('user', JSON.stringify(user));
        
          console.log(JSON.parse(localStorage.getItem('user')).Id);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setError("Invalid username & password");
        }
      },
      (error) => {
        //setLoader(false);
        setIsLoggedIn(false);
        setError("Invalid username & password");
      }
    );
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
        </FormControl>
        <FormControl>
          <TextField
            required
            id="outlined-required"
            label="Password"
            name="pass"
            defaultValue="test1234"
            size="small"
            variant="filled"
            type="password"
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" size="medium" type="submit">
            Login
          </Button>
        </FormControl>
        {error}
      </Stack>
    </form>
  );

  return (
    <>
      <div class="background"></div>
      <div className="login">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Login</h1>
        {isLoggedIn ? <Navigate to="/dashboard" /> : renderForm}
      </div>
    </>
  );
};

export default LoginPage;
