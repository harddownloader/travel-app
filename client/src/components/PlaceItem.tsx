import React from 'react'

import { Card, CardContent, CardMedia, Typography, Box, ListItemAvatar, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({  
  card: {
    height: '100%',
    paddingBottom: '1rem'
  },
  card__cardHeading: {
    height: "4rem",
    margin: '0',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center'
  },
  card__cardMedia: {
    position: 'relative',
    zIndex: 99,
    overflow: "hidden",
    objectFit: 'fill',
    aspectRatio: '4.5/3',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .5s'
    }
  },
  card__cardContent: {
    position: 'relative',
    zIndex: 101,
    backgroundColor: '#fff',
    textOverflow: "ellipsis",
    overflowY: 'hidden',
    display: "-webkit-box",
    "-webkit-line-clamp": 8,
    "-webkit-box-orient": "vertical",
    height: '16rem'
  }
});

const clapText = (text: string, count: number) => {
  return text.slice(0, count) + '...'
}

type PlaceItem = (props: any) => JSX.Element
const PlaceItem: PlaceItem = (props) => {
const classes=useStyles()

  return (
    <Card className={classes.card}>
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
      className={classes.card__cardHeading}
      align='center'
      >
      {props.name}
      </Typography>
      <Typography
      variant="body2"
      color="textSecondary"
      component="p">
      {clapText(props.description, 300)}
      </Typography>    
      </CardContent>        
    </Card>
  )
}

export default PlaceItem