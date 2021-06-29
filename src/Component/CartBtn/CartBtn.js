import { makeStyles } from '@material-ui/core/styles';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  actionBtn: {
    padding: '2px',
  },
}));

const CartBtn = ({ item, addtoCart, addToWish }) => {
  const classes = useStyles();

  const [cartBtn, setCartBtn] = useState(true);
  const [qty, setqty] = useState(1);
  const [rating, setRating] = useState(item.rating);

  const cartClickHandler = () => {
    setCartBtn(!cartBtn);
  };

  const addItemHandler = () => {
    setqty(qty + 1);
  };

  const removeItemHandler = () => {
    if (qty === 1) {
      setCartBtn(true);
      setqty(1);
      return;
    }
    setqty(qty - 1);
  };

  const addToClickHandler = () => {
    setqty(1);
    setCartBtn(true);
    addtoCart({
      ...item,
      qty: qty,
    });
  };

  const wishListClickHandler = () => {
    addToWish(item);
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
                <Button onClick={wishListClickHandler}>
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
                <Button onClick={removeItemHandler}>
                  <RemoveIcon fontSize='small' />
                </Button>
                <Button onClick={addItemHandler}>
                  <AddIcon fontSize='small' />
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={4} style={{ display: 'flex' }}>
              <TextField
                id='outlined-basic'
                value={qty}
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
            <Grid item md={12} xs={12} m={1}>
              <Button
                variant='contained'
                color='primary'
                size='small'
                fullWidth
                style={{ marginTop: '2px' }}
                onClick={addToClickHandler}>
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      )}
    </>
  );
};

export default CartBtn;
