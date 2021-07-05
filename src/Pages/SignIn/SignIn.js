import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useHistory, Link as RouterLink } from 'react-router-dom';
import CopyRight from '../CopyRight';
import ALertgd from '../../Component/Alert/Alertgd';
import axios from 'axios';
import { AuthContext } from '../../Store/Auth';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  let history = useHistory();

  const [showAlert, setALert] = useState(false);
  const [alertAttr, setAlertAttr] = useState({});
  const [email, setEMail] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailValid, setemailValid] = useState(false);
  const [pwdValid, setpwdValid] = useState(false);

  const context = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();
    if (validation()) {
      setLoading(true);
      axios
        .post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMZSBqHuQ3GBrmOKcgxZiRQ0QTVkZwSbI',
          { email: email, password: pwd }
        )
        .then((response) => {
          context.login(response.data.idToken);
          history.replace('/Dashboard');
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
    //history.replace('/dashboard');
  };

  const validation = () => {
    let isVaild = true;
    const EMAIL_REG =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.trim() !== '' && EMAIL_REG.test(String(email).toLowerCase())) {
      setemailValid(false);
      setALert(false);
    } else {
      setemailValid(true);
      setALert(true);
      setAlertAttr({
        type: 'error',
        message: 'Enter Valid EMail',
      });
      isVaild = false;
      return isVaild;
    }

    if (pwd.trim() === '') {
      setpwdValid(true);
      isVaild = false;
      return isVaild;
    } else {
      setpwdValid(false);
    }

    return true;
  };

  const changeEmailHandler = (e) => {
    setEMail(e.target.value);
  };
  const changePwdHandler = (e) => {
    setPwd(e.target.value);
  };

  const closeAlertHandler = () => {
    setALert(false);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        {showAlert && (
          <ALertgd
            type={alertAttr.type}
            message={alertAttr.message}
            onClose={closeAlertHandler}
          />
        )}
        <form className={classes.form} onSubmit={loginHandler} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={changeEmailHandler}
            error={emailValid}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={pwd}
            onChange={changePwdHandler}
            error={pwdValid}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={loading}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link variant='body2'>
                <RouterLink to='/sign-up'>
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
}
