import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import * as Yup from 'yup';

//images
import onboardingImage from '../../assets/images/onboarding.png';
import backgroundImage from '../../assets/images/Bg_1.svg';

// components
import Form from '../Forms/Form';
import FormField from '../Forms/FormField';
import SubmitButton from '../Forms/SubmitButton';
import Navbar from '../Navbar';

const validationSchema = Yup.object().shape({
  surname: Yup.string().required('Surname is required').label('Surname'),
  matricNumber: Yup.string()
    .required('pasword is required')
    .matches(/^[a-zA-Z]{3}\/[0-9]{4}\/[0-9]{3}$/)
    .label('Matric number'),
  // password: Yup.string().required().min(6).label('Password'),
  image: Yup.object().required('Image file is required')
    .test('fileType', 'Unsopported file format', (value) => {
      console.log(value)
      return true
      // return value ? (value.slice(-4) === '.png' || value.slice(-5) === '.jpeg') : null
    }).label('Image'),
});

const useStyles = makeStyles((theme) => ({
  column: {
    [theme.breakpoints.up('sm')]: {
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
    [theme.breakpoints.up('sm')]: {
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
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },
}));

export default function CreateStudent() {
  const initialValues = {
    surname: '',
    matricNumber: '',
    image: ''
  };
  const classes = useStyles();

  const handleSubmit = ({ matricNumber, surname, image }) => {
    console.log({ matricNumber, surname, image });
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} className={classes.column}>
            <div className={classes.formContainer}>
              <h1 className={classes.heading}> Let's get started </h1>
              <p className={classes.textLight}> Sign up here </p>
              <div className={classes.form}>
                <Form
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}>
                  <FormField
                    name="matricNumber"
                    label="Matriculation Number" />
                  <FormField
                    name="surname"
                    label="Surname"
                    type="password" />
                  <FormField
                    name="image"
                    label="Image"
                    type="file" />
                  <SubmitButton> Sign up </SubmitButton>
                </Form>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} className={`${classes.column} ${classes.onboarding}`}>
            <div>
              <img width="100%" src={onboardingImage} alt="onboarding" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
