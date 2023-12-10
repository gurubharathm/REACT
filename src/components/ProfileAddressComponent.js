import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { Stack } from "@mui/material";
import { InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { useAuth } from "../common/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileAddressComponent() {
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

  useEffect(() => {
    const body = "select * from UserAddress where UserId='" + user.Id + "'";

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

  const saveData = (event) => {
    //event.preventDefault();
    var form = event.target.elements;
    console.log(user.Id);
    const body =
      "update UserAddress SET AddressLine1='" +
      data.AddressLine1 +
      "', AddressLine2='" +
      form.AddressLine2.value +
      "', Landmark='" +
      form.Landmark.value +
      "', Location='" +
      form.Location.value +
      "', City='" +
      form.City.value +
      "', PinCode='" +
      form.PinCode.value +
      "', State='" +
      form.State.value +
      "', Country='" +
      form.Country.value +
      "' where UserId='" +
      user.Id +
      "'";
    console.log(body);
    //useEffect(() => {
    axios.post(apiUrl, body).then(
      (response) => {

        alert(response.data.status);
        // console.log(response);
        // var ud = response.data.data[0];
        // console.log(ud);
        // setData(ud);
        // setLoaded(true);
      },
      (error) => {
        setLoaded(true);
        setError(error);
      }
    );
    //});
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <form className="form form-login w-100" onSubmit={saveData}>
      <Grid flexGrow={1}>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="space-around"
          sx={{ marginBottom: 3 }}
        >
          <TextField
            label="Address Line 1 (HouseNo/Street)"
            defaultValue={data.AddressLine1}
            size="small"
            name="AddressLine1"
            //onChange={(e)=> data.AddressLine1 = e.target.value }
            fullWidth
          
            required
          />

          <TextField
            name="AddressLine2"
            label="Address Line 2 (Village/Mandal/Post)"
            value={data.AddressLine2 || ""}
            size="small"
            fullWidth
            required
          />
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="space-around"
          sx={{ marginBottom: 3 }}
        >
          <TextField
            label="Landmark"
            value={data.Landmark || ""}
            name="Landmark"
            size="small"
            fullWidth
            required
          />

          <TextField
            label="Location (map)"
            value={data.Location || ""}
            name="Location"
            size="small"
            fullWidth
            required
          />
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="space-around"
          sx={{ marginBottom: 3 }}
        >
          <TextField
            label="City"
            value={data.City || ""}
            name="City"
            size="small"
            fullWidth
            required
          />

          <TextField
            label="Pincode"
            value={data.PinCode || ""}
            name="PinCode"
            size="small"
            fullWidth
            required
          />
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          sx={{ marginBottom: 3 }}
          justifyContent="space-around"
        >
          <FormControl direction="column" fullWidth>
            <InputLabel id="demo-simple-select-label" fullWidth>
              State
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="State"
              onChange={handleChange}
              value={data.State || ""}
              name="State"
              fullWidth
            >
              <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
              <MenuItem value="Telangana">Telangana</MenuItem>
            </Select>
          </FormControl>
          <FormControl direction="column" fullWidth>
            <InputLabel id="demo-simple-select-label" fullWidth>
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Gender"
              name="Country"
              value={data.Country || ""}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="India">India</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          sx={{ marginBottom: 3 }}
          justifyContent="space-around"
        >
          <Button
            type="submit"
            fullWidth
            size="medium"
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Stack>
      </Grid>
    </form>
  );
}
