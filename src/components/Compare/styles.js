import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "824px",
    margin: "auto",
    width: "93%",
  },
  gridContainer: {
    marginTop: "10px"
  },
  imgContainer: {
    margin: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  img: {
    position: "relative",
    height: 450,
    width: 600,
    [theme.breakpoints.down('xs')]: {
      position: "relative",
      height: 225,
      width: 284,
    },
  },
  textContainer: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: 210,
    },
    [theme.breakpoints.down('sm')]: {
      height: 310,
    },
    [theme.breakpoints.down('xs')]: {
      height: 380,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  textHead: {
    color: "000E1F"
  },
  textBody: {
    color: "#455262"
  },
  ellipse: {
    position: "absolute",
    margin: "50px auto",
    width: "221px",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      margin: "25px auto",
      width: "111px",
    },

  },
  eye1: {
    position: "absolute",
    margin: "155px -53px",
    width: "61px",
    height: "31px",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      margin: "77px -26px",
      width: "31px",
      height: "15px"
    }
  },
  eye2: {
    position: "absolute",
    margin: "155px 53px",
    width: "61px",
    height: "31px",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      margin: "77px 26px",
      width: "31px",
      height: "15px"
    }

  },
  topRight: {
    position: "absolute",
    width: "42px",
    height: "42px",
    margin: "40px 110px",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      width: "21px",
      height: "21px",
      margin: "20px 55px"
    }

  },
  topLeft: {
    position: "absolute",
    width: "42px",
    height: "42px",
    margin: "40px -110px",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      width: "21px",
      height: "21px",
      margin: "20px -55px"
    }


  },
  bottomRight: {
    position: "absolute",
    width: "42px",
    height: "42px",
    margin: "305px 110px",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      width: "21px",
      height: "21px",
      margin: "152px 55px"
    }

  },
  bottomLeft: {
    position: "absolute",
    width: "42px",
    height: "42px",
    margin: "305px -110px",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      width: "21px",
      height: "21px",
      margin: "152px -55px"
    }

  },
  faceHash: {
    position: "absolute",
    margin: "50px auto",
    width: "251px",
    border: "3px solid #FFFFFF",
    boxSizing: "border-box",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      margin: "25px auto",
      width: "125px",
      border: "1px solid #FFFFFF",
    }

  },
  faceBg: {
    position: "absolute",
    margin: "50px auto",
    width: "251px",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0 %, rgba(255, 255, 255, 0.19) 100 %)",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      margin: "25px auto",
      width: "125px",
    }
  },
  faceBase: {
    position: "absolute",
    margin: "333px auto",
    width: "251px",
    [theme.breakpoints.down('xs')]: {
      position: "absolute",
      margin: "167px auto",
      width: "125px",
    }

  },
  verificationSuccess: {
    margin: "auto",
    width: "90%",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 42,
    lineHeight: "60px",
    color: "#000E1F"
  },
  successButton: {
    marginTop: 10,
    width: "240px",
    height: "61px",
    background: "#FF6246",
    borderRadius: "10px",
    padding: "18px 44px",
    color: "white",
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  redirectContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "80vh"
  },
  scanButton: {
    position: "absolute",
    background: "#FF6246",
    borderRadius: "10px",
    padding: "18px 44px",
    margin: "10px 0",
    right: "50px",
    color: "white",
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  responseStyle: {
    width: '160px',
    margin: '15px auto',
    textAlign: 'center',
    backgroundColor: 'green',
    borderRadius: '5px'
  }
}))

export default useStyles