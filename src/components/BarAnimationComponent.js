import * as React from 'react';
import axios from "axios";
import { useState } from "react";
import {BarChartAnimationCommon} from '../common/BarChartAnimationCommon';
import { Box } from '@mui/material';
const baseURL = "/data/chart.json";
export default function BarAnimationComponenet() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [loaded, setLoaded] = useState(false);
  
  
  React.useEffect(() => {
    axios.get(baseURL).then(
      (response) => {
        console.log(response);      
        setData(response.data);
        setLoaded(true);
      }
      ,
      (error) => {
        console.log(error);
        setLoaded(true);
        setError(error);
      }
    );
  }, []);

  return (
    <Box class="bg-box" style={{width:"100%"}}>
      <BarChartAnimationCommon data={data} />
    </Box>
  );
}