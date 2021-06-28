import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import List from './List';
import Cart from './Cart';
import WishList from './WishList';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(2),
  },
  headerClor: { background: '#E7E9EB', minHeight: '70px' },
  headerContent: {
    minHeight: 'auto',
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  positionSticky: {
    position: 'sticky',
    top: '5px',
  },
}));

const Shopping = () => {
  const classes = useStyles();
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://expensetracker-f61d7-default-rtdb.firebaseio.com/Products.json'
      )
      .then((response) => {
        if (response.data) {
          let tableData = [];
          for (const [key, value] of Object.entries(response.data)) {
            tableData.push({
              id: key,
              ...value,
            });
          }
          setList(tableData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container spacing={1} className={classes.heroContent}>
      <Grid item md={8} xs={12}>
        <Card>
          <CardHeader
            title='Welcome to shopping'
            subheader='September 14, 2016'
            avatar={<BusinessIcon />}
            className={classes.headerClor}
          />
          <CardContent className={classes.headerContent}>
            <Grid container spacing={2}>
              <List list={list} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={2} xs={12}>
        <Card className={classes.positionSticky}>
          <CardHeader
            title='Cart'
            avatar={<ShoppingCartIcon />}
            className={classes.headerClor}
          />
          <CardContent className={classes.headerContent}>
            <Grid container spacing={2}>
              <Cart />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={2} xs={12}>
        <Card className={classes.positionSticky}>
          <CardHeader
            title='WishList'
            avatar={<ShoppingBasketIcon />}
            className={classes.headerClor}
          />
          <CardContent className={classes.headerContent}>
            <Grid container spacing={2}>
              <WishList />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Shopping;
