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
import Badge from '@material-ui/core/Badge';
import List from './List';
import Cart from './Cart';
import WishList from './WishList';
import SearchInput from '../../Component/SearchInput/SearchInput';
import SearchInputMobile from '../../Component/SearchInput/SearchInputMobile';

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  MobileSearch: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Shopping = () => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [wishList, setwishData] = useState([]);
  const [cartTAmt, setcartTAmt] = useState(0);
  const [showSkelton, setshowSkelton] = useState(true);
  const [allProd, setallProd] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          'https://expensetracker-f61d7-default-rtdb.firebaseio.com/Products.json'
        ),
        axios.get(
          'https://expensetracker-f61d7-default-rtdb.firebaseio.com/Cart.json'
        ),
        axios.get(
          'https://expensetracker-f61d7-default-rtdb.firebaseio.com/WishList.json'
        ),
      ])
      .then(
        axios.spread((products, cart, wishList) => {
          if (products.data) {
            let tableData = [];
            for (const [key, value] of Object.entries(products.data)) {
              tableData.push({
                id: key,
                ...value,
              });
            }
            setList(tableData);
            setallProd(tableData);
          }
          if (cart.data) {
            let cartData = [];
            let cartTotalAmt = 0;
            for (const [key, value] of Object.entries(cart.data)) {
              cartTotalAmt =
                parseInt(value.price) * parseInt(value.qty) + cartTotalAmt;
              cartData.push({
                uid: key,
                ...value,
              });
            }
            setcartTAmt(cartTotalAmt);
            setCartData(cartData);
          }
          if (wishList.data) {
            let wishData = [];
            for (const [key, value] of Object.entries(wishList.data)) {
              wishData.push({
                uid: key,
                ...value,
              });
            }
            setwishData(wishData);
          }

          setshowSkelton(false);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const productSearchHandler = (enteredTxt) => {
    if (enteredTxt.trim() && list && list.length > 0) {
      let searchedProducts = list.filter((item) => {
        return item.name.includes(enteredTxt.trim());
      });
      setList(searchedProducts);
    } else {
      setList(allProd);
    }
  };

  return (
    <Grid container spacing={1} className={classes.heroContent}>
      <Grid item md={8} xs={12}>
        <Card>
          <CardHeader
            title='Welcome to shopping'
            subheader='Chetan gd'
            avatar={<BusinessIcon />}
            className={classes.headerClor}
            action={<SearchInput onChange={productSearchHandler} />}
          />
          <CardContent className={classes.headerContent}>
            <Grid container spacing={2}>
              <Grid item md={12} xs={12} className={classes.MobileSearch}>
                <SearchInputMobile onChange={productSearchHandler} />
              </Grid>
              <List list={list} showSkelton={showSkelton} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={2} xs={12}>
        <Card className={classes.positionSticky}>
          <CardHeader
            title='Cart'
            avatar={
              <Badge badgeContent={cartData.length} color='primary'>
                <ShoppingCartIcon />
              </Badge>
            }
            subheader={`total: ${cartTAmt}$`}
            className={classes.headerClor}
          />
          <CardContent className={classes.headerContent}>
            <Grid container spacing={2}>
              <Cart cartItems={cartData} showSkelton={showSkelton} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={2} xs={12}>
        <Card className={classes.positionSticky}>
          <CardHeader
            title='WishList'
            avatar={
              <Badge badgeContent={wishList.length} color='primary'>
                <ShoppingBasketIcon />
              </Badge>
            }
            className={classes.headerClor}
          />
          <CardContent className={classes.headerContent}>
            <Grid container spacing={2}>
              <WishList wishListItem={wishList} showSkelton={showSkelton} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Shopping;
