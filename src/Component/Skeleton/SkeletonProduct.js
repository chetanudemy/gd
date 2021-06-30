import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const SkeletonProducts = (props) => {
  let width = 150;
  if (isWidthUp('sm', props.width)) {
    width = 210;
  }

  return (
    <Grid container spacing={1}>
      {Array(1, 2, 3, 4).map((item) => {
        return (
          <Grid item md={3} xs={6} style={{ marginTop: 8 }} key={item}>
            <Skeleton variant='rect' width={width} height={110} />
          </Grid>
        );
      })}
      {Array(1, 2, 3, 4).map((item) => {
        return (
          <Grid item md={3} xs={6} style={{ marginTop: 8 }} key={item}>
            <Skeleton variant='rect' width={width} height={110} />
          </Grid>
        );
      })}
      {Array(1, 2, 3, 4).map((item) => {
        return (
          <Grid item md={3} xs={6} style={{ marginTop: 8 }} key={item}>
            <Skeleton variant='rect' width={width} height={110} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withWidth()(SkeletonProducts);
