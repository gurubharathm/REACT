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
  const [cards, setCards] = React.useState(["ab", "cd"]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setCards(["hello", "hi"]);
    axios.get(baseURL).then((response) => {
      setLoading(true);
      console.log(response.data.cards);
      setCards(response.data.cards);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 4, md: 12 }}
      >
        {cards.map((x) => (
          <Grid item xs={1} sm={2} md={3} key={x.head}>
            <Card sx={{ display: "flex" }}>
              <Avatar
                alt="Guru"
                src={profile}
                sx={{ width: 60, height: 60, margin: "20px" }}
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