import { makeStyles } from '@material-ui/core/styles';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  actionBtn: {
    padding: '2px',
  },
}));

const CartBtn = () => {
  const classes = useStyles();

  const [cartBtn, setCartBtn] = useState(true);
  const [item, setItem] = useState(1);
  const [rating, setRating] = useState(3);

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
        <CardActions>
          <Grid container spacing={2} align='center'>
            <Grid item md={6} xs={12}>
              <Box
                component='fieldset'
                borderColor='transparent'
                className={classes.actionBtn}>
                <Rating name='read-only' value={rating} size='small' readOnly />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <ButtonGroup
                variant='contained'
                color='primary'
                aria-label='contained primary button group'
                size='small'>
                <Button onClick={cartClickHandler}>
                  <ShoppingCartIcon fontSize='small' />
                </Button>
                <Button>
                  <ShoppingBasketIcon fontSize='small' />
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
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
            <Grid item xs={4} style={{ display: 'flex' }}>
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
