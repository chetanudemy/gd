import { makeStyles } from '@material-ui/core/styles';

import { Card, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import BusinessIcon from '@material-ui/icons/Business';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import one from '../../Assets/Img/1.jpg';
import two from '../../Assets/Img/2.jpg';
import three from '../../Assets/Img/3.jpg';
import four from '../../Assets/Img/4.jpg';
import five from '../../Assets/Img/5.jpg';
import s from '../../Assets/Img/6.jpg';
import s2 from '../../Assets/Img/8.jpg';
import s3 from '../../Assets/Img/9.jpg';
import s4 from '../../Assets/Img/10.jpg';
import s5 from '../../Assets/Img/11.jpg';
import CartBtn from '../../Component/CartBtn/CartBtn';

const useStyles = makeStyles((theme) => ({
  headerContent: {
    minHeight: '35rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const imgArray = [one, two, three, four, five, s, s2, s3, s4, s5];

const List = ({ list }) => {
  const classes = useStyles();
  return (
    <>
      {list &&
        list.map((item) => {
          return (
            <Grid item md={3} xs={6}>
              <Card>
                <CardHeader
                  title={item.name}
                  subheader='Price: 25$ Rating: 3'
                  avatar={<BusinessIcon />}
                  className={classes.headerClor}
                  action={<FavoriteIcon color='error' />}
                />
                <CardMedia
                  className={classes.media}
                  image={imgArray[Math.floor(Math.random() * imgArray.length)]}
                  title='Paella dish'
                />
                <CartBtn />
              </Card>
            </Grid>
          );
        })}
    </>
  );
};

export default List;
