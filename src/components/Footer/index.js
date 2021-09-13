import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import LogoWhite from '../../assets/images/logo_white.svg';
import LogoTitle from '../../assets/images/facerec.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#073567',
    padding: '2rem',
    '& .MuiGrid-grid-xs-12': {
      [theme.breakpoints.down('sm')]: {
        padding: '1rem',
      },
    },
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  footer_logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      heihgt: '40px',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container style={{ alignItems: 'center' }}>
        <Grid item md={3} xs={12}>
          <div className={classes.footer_logo}>
            <img alt="" src={LogoWhite} />
            <img alt="" src={LogoTitle} style={{ paddingLeft: '10px' }} />
          </div>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" align="center">
            <Link to="/privacy" className={classes.link}>
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" align="center">
            <Link to="#aboutus" className={classes.link}>
              About Us
            </Link>
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h5" align="center">
            <Link to="/contact-us" className={classes.link}>
              Contact Us
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
