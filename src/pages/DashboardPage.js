import React from "react";
import { Stack } from "@mui/material";
import BarAnimationComponent from "../components/BarAnimationComponent";
import profile from "../images/profile.jpg";
import { Layout } from "../common/_Layout";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";
import { IconOL } from "../common/_IconOL";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';


const DashboardPage = () => {
  return (
    <Layout
      body={
        <>
          <BoxCards />
          <Stack
            spacing={{xs:1, md:2}}
            direction={{ xs: "column", md: "row" }}
            alignItems="stretch"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            <BoxPieChart />
            <BoxBarChart />
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

function BoxCards() {
  const baseURL = "../data/test.json";
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = useState(true);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.cards);
      setLoader(false);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 1, sm: 4, md: 12 }}
      >
        {data.map((x) => (
          <Grid item xs={1} sm={2} md={3} key={x.head}>
            <Card sx={{ display: "flex" }}>
              {/* <Avatar
                alt="Guru"
                src={profile}
                sx={{ width: 60, height: 60, margin: "20px" }}
              /> */}
              <IconOL
                name={"People"}
                class="card-icon"
                sx={{ width: 60, height: 60, padding: "50px" }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    {x.head}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {x.desc}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function BoxPieChart() {
  // Piechart
  const data = [
    { value: 5, label: "Deleted" },
    { value: 5, label: "Deleted" },
    { value: 5, label: "Inactive" },
    { value: 30, label: "Active" },
  ];

  const size = {
    // width: 360,
    height: 200,
    maxWidth: 100,
  };
  return (
    <Box className="bg-box w-100">
      <b class="p-2 h3 d-block">Users</b>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.label} (${item.value})`,
            arcLabelMinAngle: 45,
            data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </Box>
  );
}


function BoxBarChart() {

  const chartSetting = {
    height: 300,
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  
  
  const valueFormatter = (value) => `${value}mm`;

  const baseURL = "/data/rain.json";
  const [dataset, setCards] = React.useState(["ab", "cd"]);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLoading(true);
      console.log(response.data.cards);
      setCards(response.data);
    });
  }, []);


  return (
        <div class="bg-box" style={{width:"100%"}}>
       <b class="p-2 h3 d-block">Rainfall Report</b>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London', valueFormatter },
        { dataKey: 'paris', label: 'Paris', valueFormatter },
        { dataKey: 'newYork', label: 'New York', valueFormatter },
        { dataKey: 'seoul', label: 'Seoul', valueFormatter },
      ]}
      {...chartSetting}
    />
    </div>
  );
}
