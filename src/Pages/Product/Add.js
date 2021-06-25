import React from 'react';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(0, 3, 0, 3),
  },
  form: {
    padding: theme.spacing(1),
    width: '100%',
    margin: 'auto',
  },
  grid: {
    width: '100%',
  },
  p: {
    padding: theme.spacing(1),
  },
}));

let TODAY_DATE = new Date();
let dd = String(TODAY_DATE.getDate()).padStart(2, '0');
let mm = String(TODAY_DATE.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = TODAY_DATE.getFullYear();

TODAY_DATE = yyyy + '-' + mm + '-' + dd;

const RATING = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
];

const Add = (props) => {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [desc, setDesc] = React.useState('');
  const [cdate, setcDate] = React.useState(TODAY_DATE);
  const [rating, setRating] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(
        'https://expensetracker-f61d7-default-rtdb.firebaseio.com/Products.json',
        {
          name: name,
          price: price,
          description: desc,
          manufactureDate: cdate,
          rating: rating,
        }
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
        clearForm();
        props.onAdd();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const clearForm = () => {
    setName('');
    setPrice(0);
    setDesc('');
    setcDate(TODAY_DATE);
    setRating(5);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const descHandler = (event) => {
    setDesc(event.target.value);
  };
  const dateHandler = (event) => {
    setcDate(event.target.value);
  };
  const ratingHandler = (event) => {
    setRating(event.target.value);
  };
  console.log('Add Rendering');
  return (
    <>
      <Typography
        component='h1'
        variant='h5'
        align='center'
        className={classes.p}>
        Add Product
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete='off'
        onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <TextField
              autoComplete='name'
              name='name'
              variant='outlined'
              required
              fullWidth
              label='Product Name'
              autoFocus
              value={name}
              onChange={nameHandler}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              name='price'
              type='number'
              variant='outlined'
              required
              fullWidth
              label='Price'
              value={price}
              onChange={priceHandler}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              name='desc'
              variant='outlined'
              required
              fullWidth
              label='Description'
              value={desc}
              onChange={descHandler}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id='cdate'
              label='Birthday'
              type='date'
              fullWidth
              defaultValue={cdate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={dateHandler}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <InputLabel id='demo-controlled-open-select-label'>
              Rating
            </InputLabel>
            <Select
              labelId='demo-controlled-open-select-label'
              id='demo-controlled-open-select'
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={rating}
              onChange={ratingHandler}
              fullWidth>
              {RATING &&
                RATING.map((item) => {
                  return (
                    <MenuItem value={item.id} key={item.id}>
                      {item.value}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button
              variant='contained'
              color='primary'
              fullWidth
              type='submit'
              className={classes.button}
              startIcon={<SaveIcon />}
              disabled={loading}>
              {!loading ? 'Save' : 'Loaing..'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Add;
