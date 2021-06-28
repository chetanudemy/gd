import { makeStyles } from '@material-ui/core/styles';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  inputBox: {},
}));

const CartBtn = () => {
  const classes = useStyles();

  const [cartBtn, setCartBtn] = useState(true);
  const [item, setItem] = useState(1);

  const cartClickHandler = () => {
    setCartBtn(!cartBtn);
  };

  const addItemHandler = () => {
    setItem(item + 1);
  };

  const removeItemHandler = () => {
    if (item === 1) {
      setCartBtn(true);
      setItem(1);
      return;
    }
    setItem(item - 1);
  };

  return (
    <>
      {cartBtn ? (
        <CardActions disableSpacing>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={cartClickHandler}>
            Add to Cart
          </Button>
        </CardActions>
      ) : (
        <CardActions disableSpacing>
          <Grid container>
            <Grid item xs={8}>
              <ButtonGroup
                variant='contained'
                color='primary'
                aria-label='contained primary button group'
                size='small'>
                <Button onClick={removeItemHandler}>-</Button>
                <Button onClick={addItemHandler}>+</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='outlined-basic'
                value={item}
                variant='outlined'
                size='small'
                className={classes.inputBox}
                inputProps={{
                  style: {
                    height: '10px',
                  },
                }}
              />
            </Grid>
          </Grid>
        </CardActions>
      )}
    </>
  );
};

export default CartBtn;
