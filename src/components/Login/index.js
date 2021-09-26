import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';

// useHistory for redirection
import { useHistory } from "react-router-dom"

//images
import onboardingImage from '../../assets/images/onboarding.png';
import backgroundImage from '../../assets/images/Bg_1.svg';

// components
import Form from '../Forms/Form';
import FormField from '../Forms/FormField';
import SubmitButton from '../Forms/SubmitButton';
import Navbar from '../Navbar';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required()
		.email()
		.matches(/^[a-zA-Z]+@student\.oauife\.edu\.ng$/)
		.label('Email'),
	surname: Yup.string().required().label('Surname'),
	matricNumber: Yup.string()
		.required()
		.matches(/^[a-zA-Z]{3}\/[0-9]{4}\/[0-9]{3}$/)
		.label('Matric number'),
	password: Yup.string().required().min(6).label('Password'),
});

const useStyles = makeStyles((theme) => ({
	column: {
		[theme.breakpoints.up('tablet')]: {
			flex: '50%',
		},
	},
	form: {
		paddingTop: '1rem',
	},
	formContainer: {
		flexDirection: 'column',
		margin: 0,
		maxWidth: '100%',
	},
	heading: {
		fontSize: '1.5rem',
		[theme.breakpoints.up('md')]: {
			fontSize: '2.5rem',
		},
	},
	onboarding: {
		display: 'none',
		alignItems: 'center',
		[theme.breakpoints.up('tablet')]: {
			display: 'flex',
		},
	},
	root: {
		background: `url(${backgroundImage}) no-repeat`,
		minHeight: '100vh',
	},
	textLight: {
		color: theme.palette.text.primary,
		fontSize: '0.9rem',
		[theme.breakpoints.up('tablet')]: {
			fontSize: '1rem',
		},
	},
}));

export default function Login() {
	// call useHistory hook
	const history = useHistory();

	const initialValues = {
		email: '',
		surname: '',
		matricNumber: '',
		password: '',
	};
	const classes = useStyles();

	const handleSubmit = ({ email, matricNumber, password, surname }) => {
		history.push("/signup", { email, matricNumber, surname, password })
	};

	return (
		<div className={classes.root}>
			<Navbar />
			<Container maxWidth="xl">
				<Grid container spacing={4}>
					<Grid item xs={12} className={classes.column}>
						<div className={classes.formContainer}>
							<h1 className={classes.heading}>Jump right back in</h1>
							<p className={classes.textLight}>Sign in to continue</p>
							<div className={classes.form}>
								<Form
									initialValues={initialValues}
									validationSchema={validationSchema}
									onSubmit={handleSubmit}
								>
									<FormField
										name="email"
										label="Email (School email)"
										type="email"
									/>
									<FormField name="surname" label="Surname" type="text" />
									<FormField name="matricNumber" label="Matriculation Number" />
									<FormField name="password" label="Password" type="password" />
									<SubmitButton>Sign in</SubmitButton>
								</Form>
							</div>
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						className={`${classes.column} ${classes.onboarding}`}
					>
						<div>
							<img width="100%" src={onboardingImage} alt="onboarding" />
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
