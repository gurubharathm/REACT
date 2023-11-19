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
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@material-ui/core/ListItemText";
import { List } from "@material-ui/core";

import ListItemIcon from "@material-ui/core/ListItem";
import Divider from "@mui/material/Divider";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@material-ui/core/Grid";
import { FacebookRounded } from "@mui/icons-material";

import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
export default function ProfileCardComponent() {
  return (
    <Card>
      <List className="bg-box" container>
        <ListItem>
          <ListItemIcon style={{ maxWidth: "60px" }}>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="OmniGuru.in" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ maxWidth: "60px" }}>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="OmniGuruIndia" />
        </ListItem>

        <ListItem>
          <ListItemIcon style={{ maxWidth: "60px" }}>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="OmniGuruIndia" />
        </ListItem>

        <ListItem>
          <ListItemIcon style={{ maxWidth: "60px" }}>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText primary="OmniGuruIndia" />
        </ListItem>

        <ListItem>
          <ListItemIcon style={{ maxWidth: "60px" }}>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary="OmniGuruIndia" />
        </ListItem>

        <ListItem>
          <ListItemIcon style={{ maxWidth: "60px" }}>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText primary="OmniGuruIndia" />
        </ListItem>
      </List>
    </Card>
  );
}
