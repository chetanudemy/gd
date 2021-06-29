import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BusinessIcon from '@material-ui/icons/Business';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '5px',
  },
  content: {
    padding: 5,
  },
  header: {
    padding: theme.spacing(1),
  },
}));

export default function Cart(props) {
  const classes = useStyles();

  const [price, setPrice] = useState(12);
  const [qty, setQty] = useState(2);

  const addQuantity = () => {
    setQty(qty + 1);
  };

  const rmQty = () => {
    if (qty == 1) return;
    setQty(qty - 1);
  };

  return (
    <>
      {props.cartItems.map((cart) => {
        return (
          <Card className={classes.root} key={cart.id}>
            <CardHeader
              className={classes.header}
              title={cart.name}
              avatar={<BusinessIcon />}
            />
            <CardContent
              className={classes.content}
              style={{ paddingBottom: '0px', padding: 5 }}>
              <Grid container align='center'>
                <Grid item md={5} xs={4} hidden>
                  <ButtonGroup
                    variant='contained'
                    color='primary'
                    aria-label='contained primary button group'
                    size='small'>
                    <Button onClick={rmQty}>-</Button>
                    <Button onClick={addQuantity}>+</Button>
                  </ButtonGroup>
                </Grid>
                <Grid item md={7} xs={8}>
                  <Typography>{`${cart.price} x ${cart.qty} = ${
                    cart.price * cart.qty
                  } $`}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
