import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Add from './Add';
import List from './List';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(0, 3, 0, 3),
  },
}));

const Product = () => {
  const classes = useStyles();
  const [newProductAdded, setNewProductAdded] = useState(false);

  const productAddHandler = () => {
    setNewProductAdded(true);
  };
  console.log('Main Rendering');
  return (
    <Container component='main' className={classes.heroContent}>
      <Grid container spacing={2}>
        <Grid item md={4} className={classes.paper}>
          <Paper>
            <Add onAdd={productAddHandler} />
          </Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          <List newProduct={newProductAdded} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
