import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alertgd = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert onClose={props.onClose} severity={props.type}>
        {props.message}
      </Alert>
    </div>
  );
};

export default Alertgd;
