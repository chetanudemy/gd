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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  content: {
    paddingBottom: '0px',
    padding: theme.spacing(1),
  },
  header: {
    padding: theme.spacing(1),
  },
}));

export default function Cart() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title='Product A'
        avatar={<BusinessIcon />}
      />
      <CardContent className={classes.content}>
        <Grid container align='center'>
          <Grid item md={6} xs={4}>
            <ButtonGroup
              variant='contained'
              color='primary'
              aria-label='contained primary button group'
              size='small'>
              <Button>-</Button>
              <Button>+</Button>
            </ButtonGroup>
          </Grid>
          <Grid item md={6} xs={8}>
            <Typography> 25 x 5 = 75$</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
