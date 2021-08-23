import React, { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import Logo from "../../assets/images/Logo.svg";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "How to use", href: "#howtouse" },
  { label: "About", href: "#about" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
  },
  nav_con: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nav_btn: {
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: 400,
    color: theme.palette.text.secondary,
    margin: "0 20px",
  },
  signin_btn: {
    backgroundColor: theme.palette.primary.main,
    width: "146px",
    height: "61px",
    textTransform: "capitalize",
    color: theme.palette.common.white,
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
}));

export default function Navbar() {
  //initializing the useStyles function
  const classes = useStyles();

  const location = useLocation();

  //desktop view navbar
  const desktopNavbar = () => {
    return (
      <Toolbar>
        <Grid container>
          <Grid item>
            <Link to="/">
              <img src={Logo} height="40px" width="200px" alt="Facerec" />
            </Link>
          </Grid>
          {location.pathname === "/" ? (
            <Fragment>
              <Grid item sm={true}>
                <div className={classes.nav_con}>
                  {navigation.map(({ label, href }) => {
                    return (
                      <Button
                        key={label}
                        href={href}
                        className={classes.nav_btn}
                        disableFocusRipple={true}
                        disableRipple={true}
                      >
                        {label}
                      </Button>
                    );
                  })}
                </div>
              </Grid>
              <Grid item>
                <Button href="/login" size="medium" className={classes.signin_btn} >
                  Sign in
                </Button>
              </Grid>
            </Fragment>
          ) : (
            <Grid item sm={true}></Grid>
          )}
        </Grid>
      </Toolbar>
    );
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <AppBar position="sticky" elevation={0} color="transparent">
        {desktopNavbar()}
      </AppBar>
    </Container>
  );
}
