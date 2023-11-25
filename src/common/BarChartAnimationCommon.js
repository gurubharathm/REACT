import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BarChart } from "@mui/x-charts/BarChart";

import Stack from "@mui/material/Stack";
export function BarChartAnimationCommon(props) {
  const { data } = props;
  console.log(data);
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  const highlightScope = {
    highlighted: "series",
    faded: "global",
  };
  const series = data.map((s) => ({ ...s, highlightScope }));

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <div class="bg-box" style={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <BarChart
          height={300}
          series={series
            .slice(0, seriesNb)
            .map((s) => ({ ...s, data: s.values.slice(0, itemNb) }))}
          skipAnimation={skipAnimation}
        />
        <Stack direction="row">
        <FormControlLabel
          checked={skipAnimation}
          control={
            <Checkbox
              onChange={(event) => setSkipAnimation(event.target.checked)}
            />
          }
          label="skipAnimation"
          labelPlacement="end"
        />
        <Box>
        <Typography id="input-item-number" gutterBottom>
          Number of items
        </Typography>
        <Slider
         label="tex"
          value={itemNb}
          onChange={handleItemNbChange}
          valueLabelDisplay="auto"
          min={1}
          max={20}
          aria-labelledby="input-item-number"
        />

        </Box>
        <Box>
              
        <Typography id="input-series-number" gutterBottom>
          Number of series
        </Typography>
        <Slider
          value={seriesNb}
          onChange={handleSeriesNbChange}
          valueLabelDisplay="auto"
          min={1}
          max={10}
          aria-labelledby="input-series-number"
        />
        </Box>

        </Stack>
      
      
      </Box>
    </div>
  );
}
