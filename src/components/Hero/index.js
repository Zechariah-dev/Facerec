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
  heading: {
      fontSize: "64px",
      fontWeight: 800,
      color: theme.palette.text.secondary,
  },
  body: {
      color: theme.palette.text.primary,
      marginTop: theme.spacing(3)
  },
  learn_btn: {
      marginTop: theme.spacing(3),
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      width: "185px",
      height: "61px",
      textTransform: "capitalize",
      fontSize: "18px",
      borderRadius: "10px"      
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container>
        <Grid md={6} xs={12} item>
          <div>
            <Typography variant="h3" className={classes.heading}>
              Multi-use face recognition system
            </Typography>
            <Typography variant="body2" className={classes.body}>
              But I must explain to you how all this mistaken idea of denoucing
              pleasure and
            </Typography>
            <Button size="medium" className={classes.learn_btn}>
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid md={6} xs={12} item></Grid>
      </Grid>
    </Container>
  );
}
