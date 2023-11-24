import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import profile from "../images/profile.jpg";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";

export default function DashboardCardsComponent() {
  const theme = useTheme();
  const baseURL = "/data/cards.json";
  const [cards, setCards] = React.useState(null);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLoading(false);
      setCards(response.data.users);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 4, md: 12 }}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={1} sm={2} md={3} key={index}>
            <Card sx={{ display: "flex" }}>
              <Avatar
                alt="Guru"
                src={profile}
                sx={{ width: 60, height: 60, margin: "20px" }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Users
                  </Typography>
                  <Typography component="div" variant="h6">
                    300+ Users
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
