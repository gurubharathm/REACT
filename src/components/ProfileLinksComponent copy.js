import * as React from "react";
import Card from "@mui/material/Card";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { List } from "@material-ui/core";

import ListItemIcon from "@material-ui/core/ListItem";
import { IconOL } from "../common/_IconOL";

import axios from "axios";
import { useState } from "react";
const baseURL = "/data/media.json";

export default function ProfileCardComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  React.useEffect(() => {
    axios.get(baseURL).then(
      (response) => {
        setLoaded(true);
        setData(response.data);
      },
      (error) => {
        setLoaded(true);
        setError(error);
      }
    );
  }, []);

  return (
    <Card>
      <List className="bg-box">
        {data.map((x) => (
          <ListItem>
            <ListItemIcon style={{ maxWidth: "60px" }}>
              <IconOL name="Facebook" />
            </ListItemIcon>
            <ListItemText primary="OmniGuruIndia" />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
