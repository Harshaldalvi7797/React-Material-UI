import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "absolute",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": { content: "''", display: "table", clear: "both" }
  }
});
const Resume = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box component="Header" className={classes.mainContainer}>
        <Typography varient="h4" align="center">
          Working Expirence
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2">2013</Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Resume;
