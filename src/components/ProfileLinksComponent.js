import * as React from "react";
import Card from "@mui/material/Card";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { List } from "@material-ui/core";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItem";
import { IconOL } from "../common/_IconOL";

import axios from "axios";
import { useState } from "react";
import { useAuth } from "../common/AuthContext";
import { useEffect } from "react";

const apiUrl = "https://api.omniguru.in/query";

export default function ProfileCardComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  console.log("profilelinks");
  var user = JSON.parse(localStorage.getItem("user"));
  const body = "select * from UserSites where UserId='" + user.Id + "'";


  useEffect(() => {
    
  axios.post(apiUrl, body).then(
    (response) => {
      console.log(body);
      console.log(response);
      setData(response.data.data);
      setLoaded(true);
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
          <Link to={x.Url}>
            <ListItem>
              <ListItemIcon style={{ maxWidth: "60px" }}>
                <IconOL name={x.Icon} />
              </ListItemIcon>
              <ListItemText primary={x.Username} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}
