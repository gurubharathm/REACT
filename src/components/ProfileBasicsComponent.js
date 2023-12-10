import TextField from "@material-ui/core/TextField";
import { Stack } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { useAuth } from "../common/AuthContext";
import * as React from "react";
import { FormControl, Button, List, ListItem } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import Grid from "@mui/material/Grid";

import { useEffect } from "react";
export default function ProfileBasicsComponent() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const apiUrl = "https://api.omniguru.in/query";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  
  var user = JSON.parse(localStorage.getItem("user"));
  const body = "select * from UserData where UserId='" + user.Id + "'";

  useEffect(() => {
    
      axios.post(apiUrl, body).then(
        (response) => {
          console.log(body);
          console.log(response);
          var ud = response.data.data[0];
          console.log(ud);
          setData(ud);
          setLoaded(true);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
    
  }, []);




  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Grid flexGrow={1}>
        <Stack
        direction="row"
        spacing={4}
        justifyContent="space-around"
        sx={{ marginBottom: 3 }}
      >
        <TextField
          required
          id="outlined-required"
          label="Username"
          name="uname"
          size="small"
          fullWidth
        />

        <TextField
          required
          id="outlined-required"
          label="Email"
          name="uname"
          defaultValue={data.Email}
          size="small"
          fullWidth
        />
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-around"
        sx={{ marginBottom: 3 }}
      >
        <TextField
          required
          id="outlined-required"
          label="First name"
          name="uname"
          value={data.FirstName || ''}
          size="small"
          fullWidth
        />

        <TextField
          required
          id="outlined-required"
          label="Last name"
          value={data.LastName || ''}
          name="uname"
          size="small"
          fullWidth
        />
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{ marginBottom: 3 }}
        justifyContent="space-around"
      >
        <TextField
          required
          id="outlined-required"
          label="Mobile"
          name="uname"
          size="small"
          fullWidth
        />
        <FormControl direction="column" fullWidth>
          <InputLabel id="demo-simple-select-label" fullWidth>Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            onChange={handleChange}
            value={data.Gender || ''}
            fullWidth
          >
            <MenuItem value="M">Male</MenuItem>
            <MenuItem value="F">Female</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{ marginBottom: 3 }}
        justifyContent="space-around"
      >
        <Button fullWidth size="medium" color="primary" variant="contained">Save</Button>
      </Stack>
    </Grid>
  );
}
