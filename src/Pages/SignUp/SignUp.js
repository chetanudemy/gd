import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useHistory, Link as RouterLink } from 'react-router-dom';
import CopyRight from '../CopyRight';
import axios from 'axios';
import ALertgd from '../../Component/Alert/Alertgd';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px rgba(0, 0, 0, 0.26)',
    padding: theme.spacing(4),
    boxShadow:
      '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
    borderRadius: '0.5rem',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const [showAlert, setALert] = useState(false);
  const [alertAttr, setAlertAttr] = useState({});
  const [firstName, seTFirstName] = useState('');
  const [lastName, seTlastName] = useState('');
  const [email, seTEmail] = useState('');
  const [password, seTPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [fnameValid, setfnameValid] = useState(false);
  const [lnameValid, setlnameValid] = useState(false);
  const [emailValid, setemailValid] = useState(false);
  const [pswValid, setpswValid] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (validation()) {
      setLoading(true);
      axios
        .post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMZSBqHuQ3GBrmOKcgxZiRQ0QTVkZwSbI',
          {
            email: email,
            password: password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          setALert(true);
          setAlertAttr({
            type: 'success',
            message: 'Registred successfuly!!! Redirect to login page in 5 sec',
          });

          setTimeout(() => {
            history.replace('/sign-in');
          }, 5000);
        })
        .catch((error) => {
          setALert(true);
          setAlertAttr({
            type: 'error',
            message: error.response.data.error.message,
          });
          setLoading(false);
        });
    }
  };

  const validation = () => {
    let isVaild = true;
    const EMAIL_REG =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (firstName.trim() === '') {
      setfnameValid(true);
      isVaild = false;
    } else {
      setfnameValid(false);
    }

    if (lastName.trim() === '') {
      setlnameValid(true);
      isVaild = false;
    } else {
      setlnameValid(false);
    }

    if (email.trim() !== '' && EMAIL_REG.test(String(email).toLowerCase())) {
      setemailValid(false);
    } else {
      setemailValid(true);
      isVaild = false;
    }

    if (password.trim() === '') {
      setpswValid(true);
      isVaild = false;
    } else {
      setpswValid(false);
    }

    if (!isVaild) {
      setALert(true);
      setAlertAttr({
        type: 'error',
        message: 'Required',
      });
    }

    return isVaild;
  };

  const changeFnameHandler = (e) => {
    seTFirstName(e.target.value);
  };
  const changelnameHandler = (e) => {
    seTlastName(e.target.value);
  };
  const changeEamilHandler = (e) => {
    seTEmail(e.target.value);
  };
  const changePasswordHandler = (e) => {
    seTPassword(e.target.value);
  };

  const closeAlertHandler = () => {
    setALert(false);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        {showAlert && (
          <ALertgd
            type={alertAttr.type}
            message={alertAttr.message}
            onClose={closeAlertHandler}
          />
        )}
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                value={firstName}
                variant='outlined'
                required
                fullWidth
                label='First Name'
                onChange={changeFnameHandler}
                autoFocus
                error={fnameValid}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                value={lastName}
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                onChange={changelnameHandler}
                error={lnameValid}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={email}
                onChange={changeEamilHandler}
                error={emailValid}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={changePasswordHandler}
                error={pswValid}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={loading}>
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link>
                <RouterLink to='/sign-in'>
                  Already have an account? Sign in
                </RouterLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default SignUp;
