import React from "react";
import AppBar from "@mui/material/AppBar";
import Navbar from "../components/navbar";

export function Layout(props) {
  const { children } = props;
  return (
    <section style={{ display: "grid", gridTemplateRows: "auto 1fr" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Navbar />
      </AppBar>

      <div style={{ margin: 20, marginTop: 50 }}>{children}</div>
    </section>
  );
}
