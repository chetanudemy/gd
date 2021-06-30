import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonProducts = () => {
  return (
    <Grid container spacing={1}>
      {Array(1, 2, 3, 4).map((item) => {
        return (
          <Grid item md={3} xs={6} style={{ marginTop: 8 }}>
            <Skeleton variant='rect' width={210} height={110} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SkeletonProducts;
