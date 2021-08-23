import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  heading: {
    fontSize: "64px",
    fontWeight: 800,
    color: theme.palette.text.secondary,
  },
  body: {
    color: theme.palette.text.primary,
    marginTop: theme.spacing(3),
  },
  learn_btn: {
    marginTop: theme.spacing(3),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    width: "185px",
    height: "61px",
    textTransform: "capitalize",
    fontSize: "18px",
    borderRadius: "10px",
  },
  hero__img_wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: "2rem",
  },
  inner_circle: {
    height: "407px",
    width: "407px",
    borderRadius: "50%",
    backgroundColor: theme.palette.common.black,
  },
  lower_outer_circle: {
    height: "148px",
    width: "148px",
    backgroundColor: "#FF9900",
    borderRadius: "50%",
    zIndex: 1000,
    position: "relative",
    bottom: "25%",
    right: "30%",
  },
  upper_outer_circle: {
    height: "148px",
    width: "148px",
    backgroundColor: "#15A412",
    borderRadius: "50%",
    zIndex: 1000,
    position: "relative",
    bottom: "110%",
    left: "30%",
    marginBottom: "-50%"
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container>
        <Grid md={6} xs={12} item>
          <div className={classes.wrapper}>
            <Typography variant="h3" className={classes.heading}>
              Multi-use face recognition system
            </Typography>
            <Typography variant="body2" className={classes.body}>
              But I must explain to you how all this mistaken idea of <br />
              denoucing pleasure and
            </Typography>
            <Button size="medium" className={classes.learn_btn}>
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div className={classes.hero__img_wrapper}>
            <div className={classes.inner_circle}></div>
            <div className={classes.lower_outer_circle}></div>
            <div className={classes.upper_outer_circle}></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
