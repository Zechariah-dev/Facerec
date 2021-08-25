import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "824px",
    margin: "0 auto",
    width: "93%"
  },
  gridContainer: {
    marginTop: "10px"
  },
  scanButton: {
    position: "absolute",
    background: "#FF6246",
    borderRadius: "10px",
    padding: "18px 44px",
    marginTop: "40px",
    right: "60px",
    color: "white",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  img: {
    position: "relative",
    height: 450,
    width: 600,
  },
  textContainer: {
    height: 400,
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
  },
  eye1: {
    position: "absolute",
    margin: "155px -53px",
    width: "61px",
    height: "31px"
  },
  eye2: {
    position: "absolute",
    margin: "155px 53px",
    width: "61px",
    height: "31px"
  },
  topRight: {
    position: "absolute",
    width: "42px",
    height: "42px",
    margin: "40px 110px"
  },
  topLeft: {
    position: "absolute",
    width: "42px",
    height: "42px",
    margin: "40px -110px"

  },
  bottomRight: {
    position: "absolute",
    width: "42px",
    height: "42px",
    margin: "305px 110px"
  },
  bottomLeft: {
    position: "absolute",
    width: "42px",
    height: "42px",
    margin: "305px -110px"
  },
  faceHash: {
    position: "absolute",
    margin: "50px auto",
    width: "251px",
    border: "3px solid #FFFFFF",
    boxSizing: "border-box"
  },
  faceBg: {
    position: "absolute",
    margin: "50px auto",
    width: "251px",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0 %, rgba(255, 255, 255, 0.19) 100 %)"
  },
  faceBase: {
    position: "absolute",
    margin: "333px auto",
    width: "251px",
  },
  verificationSuccess: {
    fontWeight: 800,
    fontSize: "48px",
    lineHeight: "66px",
    color: "#000E1F"
  },
  successButton: {
    width: "240px",
    height: "61px",
    background: "#FF6246",
    borderRadius: "10px",
    padding: "18px 44px",
    color: "white"
  },
  redirectContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "90vh"
  }
}))

export default useStyles