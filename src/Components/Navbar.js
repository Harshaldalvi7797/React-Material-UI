import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  List,
  Typography,
  Box,
  Avatar,
  ListItemText,
  ThemeProvider,
  Divider,
  ListItemIcon
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons";
import avatar from "../images/avatar.png";

//CSS Styles
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "30rem"
  },
  avtar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  }
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {" "}
      <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.avtar} src={avatar} alt="Avtar" />
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon />
          </ListItem>
        </List>
      </Box>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ background: "tomato" }} />
            </IconButton>
            <Typography varient="h5">Portfolio</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
export default Navbar;
