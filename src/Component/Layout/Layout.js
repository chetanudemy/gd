import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
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
