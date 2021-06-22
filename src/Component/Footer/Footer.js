import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Copyright from '../../Pages/CopyRight';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' component='footer' className={classes.footer}>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;
