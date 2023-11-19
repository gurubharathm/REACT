import React from "react";
import Navbar from "../components/navbar";
import { Stack } from "@mui/material";
import BarAnimationComponent from "../components/BarAnimationComponent";
import BarsDatasetComponent from "../components/BarsDatasetComponent";
import PieChartComponent from "../components/PieChartComponent";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <section className="body">
        <Stack
          spacing={2}
          direction={{ xs: "column", md: "row" }}
          alignItems="baseline"
        >
          <PieChartComponent />
          <BarsDatasetComponent />
        </Stack>
        <Stack>
          <BarAnimationComponent />
        </Stack>
      </section>
    </>
  );
};
export default DashboardPage;
