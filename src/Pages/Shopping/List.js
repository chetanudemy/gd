import { makeStyles } from '@material-ui/core/styles';

import { Card, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import BusinessIcon from '@material-ui/icons/Business';
import CardHeader from '@material-ui/core/CardHeader';

import one from '../../Assets/Img/1.jpg';
import two from '../../Assets/Img/2.png';
import three from '../../Assets/Img/6.jpg';
import four from '../../Assets/Img/4.png';
import five from '../../Assets/Img/5.jpg';
import s from '../../Assets/Img/7.png';
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

const imgArray = [one, two, three, four, five, s];

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
                  subheader='Price: 25$ Rating: '
                  avatar={<BusinessIcon />}
                  className={classes.headerClor}
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
