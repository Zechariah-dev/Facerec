import React, { Fragment } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Logo from '../../assets/images/Logo.svg';
import AppButton from '../Button/Button';

const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'How to use', href: '#howtouse' },
  { label: 'About', href: '#about' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
  },
  nav_con: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav_btn: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    margin: '0 20px',
  },
  logo: {
    height: 'auto',
    width: '150px',
  },
  mainContainer: {
    '& > div': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

export default function Navbar() {
  //initializing the useStyles function
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  //desktop view navbar
  const desktopNavbar = () => {
    return (
      <Toolbar disableGutters>
        <Grid container className={classes.mainContainer}>
          <Grid item>
            <Link to="/">
              <img
                src={Logo}
                height="40px"
                width="200px"
                alt="Facerec"
                className={classes.logo}
              />
            </Link>
          </Grid>
          {location.pathname === '/' ? (
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
                <AppButton onClick={() => history.push('/login')}>
                  Sign in
                </AppButton>
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
