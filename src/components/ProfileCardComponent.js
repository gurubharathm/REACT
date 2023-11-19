import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import profile from "../images/profile.jpg";
import { Box } from "@material-ui/core";
import { Stack } from "@mui/material";

export default function ProfileCardComponent() {
  return (
    <Card>
      <CardActionArea>
        <Avatar
          alt="Guru"
          src={profile}
          sx={{ width: 56, height: 56, margin: "10px auto 0 auto" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
          >
            Guru Bharath
    
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Full Stack Developer<br/>
            +91 9494287555
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack direction="row" justifyContent="center" spacing={2}>
          <Button size="medium" color="primary" variant="contained">
            Follow
          </Button>
          <Button size="medium" color="primary" variant="outlined">
            Message
          </Button>
        </Stack>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
