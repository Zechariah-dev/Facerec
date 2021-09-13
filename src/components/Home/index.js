import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Navbar from '../Navbar';
import Hero from '../Hero';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';

import Bg1 from '../../assets/images/Bg_1.svg';
import Bg2 from '../../assets/images/Bg_2.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Bg1}), url(${Bg2})`,
    backgroundPosition: 'top right 120%, bottom right -5%',
    backgroundSize: 'unset',
    backgroundRepeat: 'no-repeat',
  },
  heading: {
    fontSize: '64px',
    fontWeight: 800,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      fontSize: '38px',
    }
  },
  sub_heading: {
    color: theme.palette.text.secondary,
    fontSize: '48px',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem'
    }
  },
  body: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '85vw'
    }
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'left',
    height: '100%',
    position: 'relative',
    boxSizing: 'border-box',
  },
  text_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  section: {
    margin: '5rem 0',
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  lower_circle_1: {
    width: '390px',
    aspectRatio: '1/1',
    backgroundColor: '#073567',
    borderRadius: '50%',
    zIndex: theme.zIndex.drawer,
    position: 'relative',
    right: '8%',
    bottom: '-8%',
    overflow: 'hidden',
    marginBottom: '0',
    [theme.breakpoints.down('sm')]: {
      width: '340px',
      right: '5%'
    }
  },
  upper_circle_1: {
    width: '390px',
    aspectRatio: '1/1',
    backgroundColor: '#C4C4C4',
    borderRadius: '50%',
    zIndex: theme.zIndex.modal,
    position: 'relative',
    bottom: '80%',
    left: '-3%',
    overflow: 'hidden',
    marginBottom: '-55%',
    [theme.breakpoints.down('sm')]: {
      bottom: '50%',
      left: 0,
      width: '340px'
    }
  },
  lower_circle_2: {
    width: '390px',
    aspectRatio: '1/1',
    backgroundColor: '#073567',
    borderRadius: '50%',
    zIndex: theme.zIndex.drawer,
    position: 'relative',
    right: '-4%',
    bottom: '-8%',
    overflow: 'hidden',
    marginBottom: '0',
    [theme.breakpoints.down('sm')]: {
      width: '340px',
      bottom: '-6%'
    }
  },
  upper_circle_2: {
    width: '390px',
    aspectRatio: '1/1',
    backgroundColor: '#C4C4C4',
    borderRadius: '50%',
    zIndex: theme.zIndex.modal,
    position: 'relative',
    bottom: '80%',
    left: '10%',
    overflow: 'hidden',
    marginBottom: '-55%',
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      left: 5,
      bottom: '50%'
    }
  },
  about_img: {
    width: '520px',
    height: '400px',
    backgroundColor: '#c4c4c4',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginTop: '1rem'
    }
  },
  procedure: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-start',
    gap: '1rem',
    margin: '1.6rem 0',
  },
  procedure__desc: {},
  procedure__title: {
    fontSize: '30px',
    fontWeight: 600,
    lineHeight: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px'
    }
  },
  procedure__body: {
    fontSize: '1rem',
    color: theme.palette.text.primary,
  },
  index: {
    height: '65px',
    aspectRatio: '1/1',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '50%',
    color: theme.palette.common.white,
    fontSize: '30px',
    fontWeight: 800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  default: {
    height: '700px',
    width: '400px',
    background: '#c4c4c4',
    [theme.breakpoints.down('sm')]: {
      width: '85vw'
    }
  },
  useBtn: {
    marginTop: theme.spacing(3),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    width: '185px',
    height: '61px',
    textTransform: 'capitalize',
    fontSize: '18px',
    borderRadius: '10px',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Navbar />
          <Hero />
          <ScrollToTop />
          <section id="features" className={classes.section}>
            <Typography variant="h3" align="center" className={classes.heading}>
              Features
            </Typography>
            <Grid container>
              <Grid item md={6} xs={12}>
                <div className={classes.wrapper}>
                  <div className={classes.lower_circle_1}></div>
                  <div className={classes.upper_circle_1}></div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.text_wrapper}>
                  <Typography
                    variant="h4"
                    align="left"
                    className={classes.sub_heading}
                  >
                    Attendance System
                  </Typography>
                  <Typography variant="body1" className={classes.body}>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6} xs={12}>
                <div className={classes.text_wrapper}>
                  <Typography
                    variant="h4"
                    align="left"
                    className={classes.sub_heading}
                  >
                    CBT Authenticator
                  </Typography>
                  <Typography variant="body1" className={classes.body}>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections.
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.wrapper}>
                  <div className={classes.lower_circle_2}></div>
                  <div className={classes.upper_circle_2}></div>
                </div>
              </Grid>
            </Grid>
          </section>

          <section id="how" className={classes.section}>
            <Typography variant="h3" align="center" className={classes.heading}>
              How to Use
            </Typography>
            <Grid container>
              <Grid item md={6} xs={12}>
                <div className={classes.wrapper}>
                  <div className={classes.default}></div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.wrapper}>
                  <div className={classes.procedure}>
                    <div className={classes.index}>1</div>
                    <div className={classes.procedure__desc}>
                      <div className={classes.procedure__title}>
                        Create an account
                      </div>
                      <div className={classes.procedure__body}>
                        one morning when Gregor Samsa woke from troubled dreams,
                        he found himself transformed in his bed into a horrible
                        vermin.
                      </div>
                    </div>
                  </div>
                  <div className={classes.procedure}>
                    <div className={classes.index}>2</div>
                    <div className={classes.procedure__desc}>
                      <div className={classes.procedure__title}>
                        Generate/Input Code
                      </div>
                      <div className={classes.procedure__body}>
                        one morning when Gregor Samsa woke from troubled dreams,
                        he found himself transformed in his bed into a horrible
                        vermin.
                      </div>
                    </div>
                  </div>
                  <div className={classes.procedure}>
                    <div className={classes.index}>3</div>
                    <div className={classes.procedure__desc}>
                      <div className={classes.procedure__title}>
                        You are ready to go!
                      </div>
                      <div className={classes.procedure__body}>
                        one morning when Gregor Samsa woke from troubled dreams,
                        he found himself transformed in his bed into a horrible
                        vermin.
                      </div>
                    </div>
                  </div>
                  <Button className={classes.useBtn}>Signup</Button>
                </div>
              </Grid>
            </Grid>
          </section>

          <section id="about" className={classes.section}>
            <Typography variant="h3" align="center" className={classes.heading}>
              About
            </Typography>
            <Grid container style={{ padding: '2rem' }}>
              <Grid item md={6} xs={12}>
                <div className={classes.wrapper}>
                  <Typography
                    variant="body1"
                    color="secondary"
                    className={classes.body}
                  >
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                  </Typography>
                  <Typography
                    variant="body1"
                    color="Secondary"
                    className={classes.body}
                  >
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections
                  </Typography>
                  <Typography
                    variant="body1"
                    color="secondary"
                    className={classes.body}
                  >
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me? " he thought. It wasn't a
                    dream. His room, a proper human
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} xs={12} justify="center" alignItems="center">
                <div className={classes.wrapper}>
                  <div className={classes.about_img}></div>
                </div>
              </Grid>
            </Grid>
          </section>
        </Container>
        <Footer />
      </div>
    </React.Fragment>
  );
}
