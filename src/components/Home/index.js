import React from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import Hero from "../Hero/index";

import Bg1 from "../../assets/images/Bg_1.svg";
import Bg2 from "../../assets/images/Bg_2.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Bg1}), url(${Bg2})`,
    backgroundPosition: "top left, right bottom 100%",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container maxWidth="xl">
          <Hero />
        </Container>
      </div>
    </React.Fragment>
  );
}
