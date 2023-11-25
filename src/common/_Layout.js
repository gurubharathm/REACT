import React from "react";
import Navbar from "../components/navbar";
import {Box} from "@mui/material";

export function Layout(props) {
  const { body } = props;
  return (
    <Box style={{ display: "grid", gridTemplateRows: "auto 1fr" }}>
      <Navbar />
      <section style={{ margin: 20}}>{body}</section>
    </Box>
  );
}
