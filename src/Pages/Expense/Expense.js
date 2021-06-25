import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TableGD from '../../Component/TableGD/TableGD';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const Expense = () => {
  const classes = useStyles();
  return (
    <Container component='main' className={classes.heroContent}>
      <Grid container spacing={2}>
        <Grid item md={4} className={classes.paper}>
          <Paper>
            <Typography
              component='h1'
              variant='h5'
              align='center'
              className={classes.p}>
              Add Expense
            </Typography>
            <form className={classes.form} noValidate autoComplete='off'>
              <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    label='First Name'
                    autoFocus
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    label='First Name'
                    autoFocus
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    label='First Name'
                    autoFocus
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    label='First Name'
                    autoFocus
                  />
                </Grid>{' '}
                <Grid item md={12} xs={12}>
                  <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    className={classes.button}
                    startIcon={<SaveIcon />}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          <TableGD />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Expense;
