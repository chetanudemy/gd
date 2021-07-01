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

import SkeletonCart from '../../Component/Skeleton/SkeletonCart';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '5px',
    padding: theme.spacing(1),
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
      {props.showSkelton ? (
        <SkeletonCart />
      ) : (
        props.cartItems &&
        props.cartItems.map((cart) => {
          return (
            <Card className={classes.root} key={cart.uid}>
              <CardHeader
                avatar={<BusinessIcon />}
                title={`${cart.name}`}
                subheader={`${cart.price} x ${cart.qty} = ${
                  cart.price * cart.qty
                } $`}
                className={classes.header}
                action={
                  <Avatar
                    variant='square'
                    alt='Remy Sharp'
                    size='large'
                    // style={{ height: '80%', width: '100%' }}
                    src={imgArray[Math.floor(Math.random() * imgArray.length)]}
                  />
                }
              />
            </Card>
          );
        })
      )}
    </>
  );
}
