import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import BusinessIcon from '@material-ui/icons/Business';
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
import SkeletonCart from '../../Component/Skeleton/SkeletonCart';
import Avatar from '@material-ui/core/Avatar';

const imgArray = [one, two, three, four, five, s, s2, s3, s4, s5];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

export default function WishList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {props.showSkelton ? (
        <SkeletonCart />
      ) : (
        props.wishListItem.map((wish) => {
          return (
            <Card className={classes.root} key={wish.uid}>
              <CardHeader
                avatar={<BusinessIcon />}
                title={`${wish.name}`}
                subheader={`${wish.price}$`}
                className={classes.header}
                action={
                  <Avatar
                    variant='square'
                    alt='Remy Sharp'
                    size='large'
                    // style={{ height: '80%', width: '100%' }}
                    src={imgArray[Math.floor(Math.random() * imgArray.length)]}
                  />
                }
              />
            </Card>
          );
        })
      )}
    </>
  );
}
