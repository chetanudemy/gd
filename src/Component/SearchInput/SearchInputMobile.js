import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchInputMobile(props) {
  const classes = useStyles();

  const [txt, setTxt] = useState('');

  const changeHandler = (event) => {
    setTxt(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search...'
        inputProps={{ 'aria-label': 'search...' }}
        value={txt}
        onChange={changeHandler}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'>
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation='vertical' />
    </Paper>
  );
}
