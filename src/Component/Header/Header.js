import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { AuthContext } from '../../Store/Auth';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = () => {
  const classes = useStyles();
  const context = useContext(AuthContext);

  return (
    <>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        elevation={0}
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}>
            CHETAN GD
          </Typography>
          <nav>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}>
              Features
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}>
              Enterprise
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}>
              Support
            </Link>
          </nav>
          <Button
            href='#'
            color='primary'
            variant='outlined'
            className={classes.link}
            onClick={context.logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
