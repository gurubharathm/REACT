import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Stack } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@material-ui/core";

import Navbar from "../components/navbar";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FormControl, Button, List, ListItem } from "@material-ui/core";

import Grid from "@mui/material/Grid";

import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";

export default function ProfileBasicsComponent() {
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
          size="small"
          fullWidth
        />

        <TextField
          required
          id="outlined-required"
          label="Last name"
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
            fullWidth
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Grid>
  );
}
