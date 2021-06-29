import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BusinessIcon from '@material-ui/icons/Business';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import one from '../../Assets/Img/1.jpg';
import two from '../../Assets/Img/2.jpg';
import three from '../../Assets/Img/3.jpg';
import four from '../../Assets/Img/4.jpg';
import five from '../../Assets/Img/5.jpg';
import s from '../../Assets/Img/6.jpg';
import s2 from '../../Assets/Img/8.jpg';
import s3 from '../../Assets/Img/9.jpg';
import s4 from '../../Assets/Img/10.jpg';
import s5 from '../../Assets/Img/11.jpg';

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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const imgArray = [one, two, three, four, five, s, s2, s3, s4, s5];

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
          <Card className={classes.root} key={cart}>
            <CardContent
              className={classes.content}
              style={{ paddingBottom: '0px', padding: 5 }}>
              <Grid container align='center'>
                {/* <Grid item md={5} xs={4} hidden>
                  <ButtonGroup
                    variant='contained'
                    color='primary'
                    aria-label='contained primary button group'
                    size='small'>
                    <Button onClick={rmQty}>-</Button>
                    <Button onClick={addQuantity}>+</Button>
                  </ButtonGroup>
                </Grid> */}
                <Grid item md={7} xs={7}>
                  <Typography>
                    <BusinessIcon /> {cart.name}
                  </Typography>
                  <Typography variant='overline' display='block'>{`${
                    cart.price
                  } x ${cart.qty} = ${cart.price * cart.qty} $`}</Typography>
                </Grid>
                <Grid item md={5} xs={5}>
                  <Avatar
                    variant='square'
                    alt='Remy Sharp'
                    size='large'
                    src={imgArray[Math.floor(Math.random() * imgArray.length)]}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
