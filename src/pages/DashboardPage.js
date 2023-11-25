import React from "react";
import Navbar from "../components/navbar";
import { Stack } from "@mui/material";
import BarAnimationComponent from "../components/BarAnimationComponent";
import BarsDatasetComponent from "../components/BarsDatasetComponent";
import PieChartComponent from "../components/PieChartComponent";
import DashboardCardsComponent from "../components/DashboardCardsComponent";
import profile from "../images/profile.jpg";
import { Layout } from "../common/_Layout";

const DashboardPage = () => {
  return (
    <Layout
      body={
        <>
          <DashboardCardsComponent />
          <Stack
            spacing={2}
            direction={{ xs: "column", md: "row" }}
            alignItems="baseline"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            <PieChartComponent />
            <BarsDatasetComponent />
          </Stack>
          <Stack>
            <BarAnimationComponent />
          </Stack>
        </>
      }
    />
  );
};
export default DashboardPage;
