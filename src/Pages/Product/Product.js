import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Add from './Add';
import List from './List';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ALertgd from '../../Component/Alert/Alertgd';

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
  const [list, setList] = useState([]);
  const [newProd, setNewProd] = useState(false);
  const [showAlert, setALert] = useState(false);
  const [alertAttr, setAlertAttr] = useState({});

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
        setALert(true);
        setAlertAttr({
          type: 'error',
          message: error.response.data.error.message,
        });
      });
  }, [newProd]);

  const newProductHandler = () => {
    setNewProd(!newProd);
  };

  const closeAlertHandler = () => {
    setALert(false);
  };

  console.log('Main Rendering');
  return (
    <Container component='main' className={classes.heroContent}>
      <Grid container spacing={2}>
        <Grid item md={4} className={classes.paper}>
          <Paper>
            <Add onAdd={newProductHandler} />
          </Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          {showAlert && (
            <ALertgd
              type={alertAttr.type}
              message={alertAttr.message}
              onClose={closeAlertHandler}
            />
          )}
          <List list={list} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
