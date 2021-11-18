import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Form from 'form-data';
import axios from 'axios';

// components
import Navbar from '../Navbar';

// images
import onBoardingImage from '../../assets/images/onboarding.png';
import Bg1 from '../../assets/images/Bg_1.svg';

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Bg1})`,
    backgroundPosition: 'top right 120%',
    backgroundSize: 'unset',
    backgroundRepeat: 'no-repeate',
  },
  input: {
    color: 'gray',
    width: '100%',
    maxWidth: '500px',
    border: 'none',
    height: '35px',
    margin: '15px 0',
    display: 'block',
    outline: 'none',
    padding: '5px 10px',
    background: '#dbd0d0',
  },
  fileInput: {
    border: 'none',
    height: '35px',
    margin: '15px 0',
    display: 'block',
    outline: 'none',
    padding: '5px 10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    width: '146px',
    padding: '12px',
    textTransform: 'none',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: theme.palette.common.white,
    borderRadius: '10px',
    border: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  heading: {
    fontWeight: 600,
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  body: {
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
}));

export default function CreateStudent() {
  const classes = useStyles();

  const [matricNumber, setMatricNumber] = useState('');
  const [surname, setSurname] = useState('');
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState(null);
  const [match, setMatch] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const form = new Form();

    form.append('surname', surname);
    form.append('matric_number', matricNumber);
    form.append('image', image);

    const config = {
      'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
    };

    const heroku_url = 'https://facerec-server.herokuapp.com/compare';

    axios
      .post(heroku_url, form, { headers: config })
      .then((res) => {
        setResponse(res.data);
        setMatch(res?.data?.matches);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div style={{ padding: '3rem 1rem' }}>
              <Typography variant="h3" className={classes.heading}>
                Face Recognition
              </Typography>
              <form onSubmit={handleSubmit} className={classes.form}>
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  onChange={(e) => setSurname(e.target.value)}
                  className={classes.input}
                />
                <label htmlFor="matric_number">Matric Number</label>
                <input
                  type="text"
                  name="matric_number"
                  id="matric_number"
                  onChange={(e) => setMatricNumber(e.target.value)}
                  className={classes.input}
                />
                <label htmlFor="image">Upload a clear picture</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  className={classes.fileInput}
                />
                <button type="submit" className={classes.btn}>
                  {loading ? 'Loading...' : 'Submit'}
                </button>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              {response ? (
                <div>
                  {match ? (
                    <div>
                      <h1>Image Matches</h1>
                      <h2>Student's details</h2>
                      <h3>{response.first_name}</h3>
                      <h3>{response.surname}</h3>
                      <h3>{response.matric_number}</h3>
                    </div>
                  ) : (
                    <h1>{response.message}</h1>
                  )}
                </div>
              ) : (
                <img width="100%" src={onBoardingImage} alt="onboarding" />
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
