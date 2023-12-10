import React from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleIcon from "@mui/icons-material/People";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const availableIcons = {
  people: <PeopleIcon />,
  delete: <DeleteIcon />,
  //SocialMedia
  language: <LanguageIcon color="#fc4f08" />,
  blog: <LanguageIcon color="#fc4f08" />,
  github: <GitHubIcon htmlColor="#24292e" />,
  linkedin: <LinkedInIcon htmlColor="#0077b5" />,
  twitter: <TwitterIcon htmlColor="#1DA1F2" />,
  instagram: <InstagramIcon htmlColor="#fa7e1e" />,
  facebook: <FacebookIcon htmlColor="#1877F2" />,
};
const getIcon = (givenName) => {
  return availableIcons[givenName.toLowerCase()];
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
