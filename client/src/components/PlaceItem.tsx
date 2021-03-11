import React from 'react'

import { Card, CardContent, CardMedia, Typography, Box, ListItemAvatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card__cardMedia: {
    position: 'relative',
    zIndex: 100,
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .5s'
    }
  },
  card__cardContent: {
    position: 'relative',
    zIndex: 101,
    backgroundColor: '#fff'
  }
});

const clapText = (text: string, count: number) => {
  return text.slice(0, count) + '...'
}

type PlaceItem = (props: any) => JSX.Element
const PlaceItem: PlaceItem = (props) => {
const classes=useStyles()

  return (
    <Card >
      <CardMedia 
      className={classes.card__cardMedia}
      component='img'
      alt={props.name}
      title={props.name}
      image={props.photoUrl}
      />
      <CardContent className={classes.card__cardContent}>
      <Typography
      gutterBottom
      variant="h5"
      component="h3"
      >
      {props.name}
      </Typography>
      <Typography
      variant="body2"
      color="textSecondary"
      component="p">
      {clapText(props.description, 200)}
      </Typography>    
      </CardContent>        
    </Card>
  )
}

export default PlaceItem