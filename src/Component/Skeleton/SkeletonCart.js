import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonCart = () => {
  return (
    <Grid container>
      {Array(1, 2).map((item) => {
        return (
          <Grid item sm={12} style={{ marginTop: 8 }}>
            <Skeleton variant='rect' width={210} height={50} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SkeletonCart;
