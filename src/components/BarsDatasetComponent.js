import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useState } from "react";
import axios from "axios";

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};


const valueFormatter = (value) => `${value}mm`;

export default function BarsDatasetComponent() {

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
  );
}