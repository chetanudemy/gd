import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BusinessIcon from '@material-ui/icons/Business';
import one from '../../Assets/Img/1.jpg';
import two from '../../Assets/Img/2.png';
import three from '../../Assets/Img/6.jpg';
import four from '../../Assets/Img/4.png';
import five from '../../Assets/Img/5.jpg';
import s from '../../Assets/Img/7.png';
import { Button, Grid } from '@material-ui/core';

const imgArray = [one, two, three, four, five, s];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    border: '1px solid black',
    borderRadius: '6px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  actionBtn: {
    padding: theme.spacing(1),
  },
  header: {
    padding: 5,
  },
  mediacontent: {
    padding: 5,
  },
}));

export default function WishList() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<BusinessIcon />}
        title='Product A - 25$'
        className={classes.header}
      />

      <CardActions disableSpacing className={classes.actionBtn}>
        <Button variant='contained' color='primary' size='small'>
          Add to cart
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent className={classes.mediacontent}>
          <CardMedia
            className={classes.media}
            image={imgArray[Math.floor(Math.random() * imgArray.length)]}
            title='Paella dish'
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}
