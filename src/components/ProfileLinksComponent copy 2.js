import * as React from "react";
import Card from "@mui/material/Card";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { List } from "@material-ui/core";

import ListItemIcon from "@material-ui/core/ListItem";
import { IconOL } from "../common/_IconOL";

import axios from "axios";
import { useState } from "react";
import { useAuth } from "../common/AuthContext";
const baseURL = "/data/links.json";
const apiUrl = "https://api.omniguru.in/query";


export default function ProfileCardComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  console.log('profilelinks');
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const body = "select * from UserSites where UserId='"+user.Id+"'";
  axios.post(apiUrl, body).then(
    (response) => {
      console.log(body);
      console.log(response);
      
    },
    (error) => {
      //setLoader(false);
      setIsLoggedIn(false);
      setError("Invalid username & password");
    }
  );

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
              <IconOL name={x.icon} />
            </ListItemIcon>
            <ListItemText primary={x.name} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
