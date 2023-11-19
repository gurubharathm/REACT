import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { Stack } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { FormControl} from "@material-ui/core";
import Grid from "@mui/material/Grid";

export default function ProfileAddressComponent() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

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
          label="Address Line 1 (HouseNo/Street)"
          name="uname"
          size="small"
          fullWidth
        />

        <TextField
          required
          id="outlined-required"
          label="Address Line 2 (Village/Mandal/Post)"
          name="uname"
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
          label="Landmark"
          name="uname"
          size="small"
          fullWidth
        />

        <TextField
          required
          id="outlined-required"
          label="Location (map)"
          name="uname"
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
          label="City"
          name="uname"
          size="small"
          fullWidth
        />

        <TextField
          required
          id="outlined-required"
          label="Pincode"
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
        <FormControl direction="column" fullWidth>
          <InputLabel id="demo-simple-select-label" fullWidth>State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="State"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={10}>Andhra Pradesh</MenuItem>
            <MenuItem value={20}>Telangana</MenuItem>
          </Select>
        </FormControl>
        <FormControl direction="column" fullWidth>
          <InputLabel id="demo-simple-select-label" fullWidth>Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={10}>India</MenuItem>
          </Select>
        </FormControl>
      </Stack>

    </Grid>
  );
}
