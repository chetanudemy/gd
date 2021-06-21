import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
