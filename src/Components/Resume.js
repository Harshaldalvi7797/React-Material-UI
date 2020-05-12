import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "2px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": { content: "''", display: "table", clear: "both" },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": { left: "calc(50% -1px)", right: "auto" }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 3rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(-50% -50px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transperent transperent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "tomato tomato transperent transperent"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: "1",
    padding: "0.5rem 0 1rem",
    "&:before": { display: "none" },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": { float: "none", margin: "0 auto" },
      "&:nth-of-type(2n):before": { display: "none" }
    }
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box component="Header" className={classes.mainContainer}>
        <Typography varient="h4" align="center" className={classes.heading}>
          Working Expirence
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013
          </Typography>
          <Box>
            <Typography
              varient="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography varient="body1" align="center">
              {" "}
              Company Name
            </Typography>
            <Typography varient="subtitle1" align="center">
              {" "}
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default Resume;
