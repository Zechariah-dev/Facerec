import React, { useState } from "react"
import Grid from "@material-ui/core/grid";
import Button from "@material-ui/core/button";
import Webcam from "react-webcam"

// Navbar
import Navbar from "../Navbar";

// use Styles
import useStyles from "./styles"

// Icons
import Ellipse from "../../assets/svgs/ellipse.svg";
import Eye1 from "../../assets/svgs/eye1.svg";
import Eye2 from "../../assets/svgs/eye2.svg";
import TopRight from "../../assets/svgs/top-right.svg";
import TopLeft from "../../assets/svgs/top-left.svg";
import BottomRight from "../../assets/svgs/bottom-right.svg";
import BottomLeft from "../../assets/svgs/bottom-left.svg";
import FaceBg from "../../assets/svgs/face-bg.svg";
import FaceBase from "../../assets/svgs/face-base.svg";

export default function Login() {
	const {
		scanButton,
		img,
		imgContainer,
		root,
		textContainer,
		gridContainer,
		textHead,
		textBody,
		ellipse,
		eye1,
		eye2,
		topRight,
		topLeft,
		bottomRight,
		bottomLeft,
		faceBg,
		faceBase,
		verificationSuccess,
		successButton,
		redirectContainer
	} = useStyles();

	const [button, setButton] = useState("Start scan");
	const [snappedImage, setSnappedImage] = useState(null);
	const [redirect, setRedirect] = useState(false);

	const webcamRef = React.useRef(null);
	const capture = () => {
		if (!snappedImage) {
			const imageSrc = webcamRef.current.getScreenshot();
			setSnappedImage(imageSrc)
			setButton("Reset")
			setTimeout(() => {
				setRedirect(true)
			}, 6000);
		} else {
			setSnappedImage(null)
			setButton("Start scan")
		}
	}

	const RedirectComponent = (
		<div className={redirectContainer}>
			<div>
				{/* Success component */}
			</div>
			<div>
				<h3 className={verificationSuccess}>Verification successful</h3>
			</div>
			<Button className={successButton}>Continue To Exam</Button>
		</div>
	)

	return (
		<div>
			<Navbar />
			{!redirect ?
				<div className={root}>
					<Grid container className={gridContainer} spacing={1}>
						<Grid className={textContainer} item md={4} sm={12}>
							<h3 className={textHead}>Face Recognition Instruction</h3>
							<ol className={textBody}>
								<li>Configure your browser to have access to device webcam</li>
								<li>After permission is granted, scan your full face in the upload section</li>
								<li>Make sure important parts like eyes, ear, nose and mouth is visible and clear</li>
								<li>Remeber to give your browser camera access</li>
							</ol>
						</Grid>
						<Grid className={imgContainer} item md={8} sm={12}>
							{!snappedImage ?
								<Webcam
									className={img}
									ref={webcamRef}
									audio={false}
									screenshotFormat="image/png"
								/> :
								<img src={snappedImage} className={img} alt="snapped" />
							}
							{!snappedImage ?
								<>
									<img src={Ellipse} className={ellipse} alt="icon" />
									<img src={Eye1} className={eye1} alt="icon" />
									<img src={Eye2} className={eye2} alt="icon" />
									<img src={TopRight} className={topRight} alt="icon" />
									<img src={TopLeft} className={topLeft} alt="icon" />
									<img src={BottomRight} className={bottomRight} alt="icon" />
									<img src={BottomLeft} className={bottomLeft} alt="icon" />
								</> :
								<>
									<img src={FaceBg} className={faceBg} alt="icon" />
									<img src={FaceBase} className={faceBase} alt="icon" />
								</>
							}
						</Grid>
					</Grid>
					<Button onClick={capture} className={scanButton}>{button}</Button>
				</div> :
				<div>
					{RedirectComponent}
				</div>}
		</div>
	)
}
