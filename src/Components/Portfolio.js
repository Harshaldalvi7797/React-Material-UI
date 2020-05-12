import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from "@material-ui/core";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/mern-stack.jpg";
import project4 from "../images/react-redux.jpg";
const useStyles = makeStyles({
  mainContainer: { background: "#223", height: "100%" },
  cardContainer: { maxWidth: 345, margin: "3rem" }
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project1}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom varient="h5">
                    Project1
                  </Typography>
                  <Typography
                    gutterBottom
                    varient="body2"
                    color="textSecondary"
                  >
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </Typography>
                  <Typography gutterBottom varient="h5">
                    Project1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live
                </Button>{" "}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            {" "}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project2}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom varient="h5">
                    Project2
                  </Typography>
                  <Typography
                    gutterBottom
                    varient="body2"
                    color="textSecondary"
                  >
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </Typography>
                  <Typography gutterBottom varient="h5">
                    Project1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live
                </Button>{" "}
              </CardActions>
            </Card>
          </Grid>{" "}
          <Grid item xs={12} sm={8} md={6}>
            {" "}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project3}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom varient="h5">
                    Project3
                  </Typography>
                  <Typography
                    gutterBottom
                    varient="body2"
                    color="textSecondary"
                  >
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </Typography>
                  <Typography gutterBottom varient="h5">
                    Project1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live
                </Button>{" "}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            {" "}
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project4}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom varient="h5">
                    Project4
                  </Typography>
                  <Typography
                    gutterBottom
                    varient="body2"
                    color="textSecondary"
                  >
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </Typography>
                  <Typography gutterBottom varient="h5">
                    Project1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live
                </Button>{" "}
              </CardActions>
            </Card>
          </Grid>{" "}
        </Grid>
      </Box>
    </React.Fragment>
  );
};
export default Portfolio;
