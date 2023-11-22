import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { Box } from "@material-ui/core";
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
    maxWidth:100
  };
  
  export default function PieChartComponent() {
    return (
      <div style={{width:"100%"}}>
      <Box className="bg-box py-2">
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
      </div>
    );
  }
  