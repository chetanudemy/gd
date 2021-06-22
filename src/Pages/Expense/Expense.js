import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TableGD from '../../Component/TableGD/TableGD';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(0, 3, 0, 3),
  },
}));

const Expense = () => {
  const classes = useStyles();
  return (
    <>
      <Container component='main' className={classes.heroContent}>
        <Grid container>
          <Grid item md={4} className={classes.paper}>
            <Paper>
              <Typography
                variant='h6'
                color='inherit'
                noWrap
                className={classes.toolbarTitle}>
                sssssssssss
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={8}>
            <TableGD />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Expense;
