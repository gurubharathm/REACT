import React from "react";
import { Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleIcon from '@mui/icons-material/People';
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const availableIcons = {
  People: <PeopleIcon />,
  Delete: <DeleteIcon />,
  //SocialMedia
  Language: <LanguageIcon/>,
  GitHub: <GitHubIcon/>,
  LinkedIn: <LinkedInIcon/>,  
  Twitter : <TwitterIcon/>,
  Instagram: <InstagramIcon/>,
  Facebook: <FacebookIcon/>,
};
const getIcon = (givenName) => {
  return availableIcons[givenName];
};

export function IconOL(props) {
  const { name, size } = props;
  return (
    <>     
      {/*<DeleteIcon color="secondary " fontSize="Large" />*/}
      {getIcon(name)}
    </>
  );
}
