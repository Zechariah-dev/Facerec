import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#073567",
    padding: "2rem",
  },
  link: {
      color: theme.palette.common.white,
      textDecoration: "none"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={3} xs={12}></Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" align="center" >
            <Link to="/privacy" className={classes.link}>Privacy Policy</Link>
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" align="center" >
            <Link to="#aboutus" className={classes.link}>About Us</Link>
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" align="center" >
            <Link to="/contact-us" className={classes.link}>Contact Us</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
