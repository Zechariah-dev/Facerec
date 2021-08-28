import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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
  paper: {
    width: '100%',
    positon: 'relative',
  },
  drawer__con: {
    height: '100vh',
    color: theme.palette.common.white,
    background: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  close: {
    color: theme.palette.common.white,
    position: 'absolute',
    right: 0,
    top: 0,
    '& .MuiSvgIcon-root': {
      width: '2em',
      height: '2em',
    },
  },
  drawer__inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  drawer_btn: {
    width: '80%',
    margin: '1rem',
    color: '#fff',
    backgroundColor: '#3A3AC2',
    fontWeight: 700,
    textTransform: 'capitalize',
    outline: 0,
  },
}));

export default function Navbar() {
  //initializing the useStyles function
  const classes = useStyles();

  const [isMobile, SetIsMobile] = useState(false);
  const [isDrawerOpen, SetIsDrawerOpen] = useState(false);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ? SetIsMobile(true) : SetIsMobile(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const FacerecLogo = () => {
    return (
      <Link to="/">
        <img
          src={Logo}
          height="40px"
          width="200px"
          alt="Facerec"
          className={classes.logo}
        />
      </Link>
    );
  };

  //desktop view navbar
  const desktopNavbar = () => {
    return (
      <Toolbar disableGutters>
        <Grid container className={classes.mainContainer}>
          <Grid item>
            {' '}
            <FacerecLogo />
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

  const mobileNavbr = () => {
    const handleDrawerOpen = () => SetIsDrawerOpen(true);
    const handleDrawerClose = () => SetIsDrawerOpen(false);

    return (
      <Toolbar disableGutters>
        <Box display="flex" flexGrow={1} textAlign="center">
          <FacerecLogo />
        </Box>

        <IconButton
          edge="end"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={isMobile}
          onClose={handleDrawerClose}
          className={{ paper: classes.paper }}
        >
          <div className={classes.drawer_con}>
            <div className={classes.drawer_inner}>
              {navigation.map(({ label, href }) => {
                return (
                  <Link key={label} href={href} className={classes.drawer_link}>
                    {label}
                  </Link>
                );
              })}
              <Button
                variant="contained"
                href="/login"
                className={classes.drawer_btn}
              >
                Sign in
              </Button>
            </div>
          </div>

          <IconButton onClick={handleDrawerClose} className={classes.close}>
            <CloseIcon />
          </IconButton>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <AppBar position="sticky" elevation={0} color="transparent">
        {isMobile ? mobileNavbr() : desktopNavbar()}
      </AppBar>
    </Container>
  );
}
