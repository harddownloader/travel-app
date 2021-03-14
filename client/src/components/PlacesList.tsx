import React, { useEffect, useState } from 'react'
import PlaceItem from './PlaceItem'

import clsx from 'clsx'
import { useWindowWidth } from '@react-hook/window-size'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss'

//Material UI
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';

SwiperCore.use([Navigation]);

const useStyles = makeStyles({
  placesList__button__prev: {    
    cursor: "pointer",
    margin: '0 10px'
    
  },
  placesList__button__next: {
    cursor: "pointer",
    margin: '0 10px'
    
  },
  container: {
    height: '30px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
});

type PlacesList = (props: any) => JSX.Element
const PlacesList: PlacesList = (props) => {  
  const classes = useStyles()
  const windowWidth = useWindowWidth()
  const paramsPerView = () => {
    if (windowWidth > 768) return {slides: 3, spaceBetween: 20}
    if (windowWidth > 500) return {slides: 2, spaceBetween: 10}
    return {slides: 1, spaceBetween: 0}
  }
  const [params,setParams] = useState(paramsPerView())  
  useEffect(() => {
    setParams(() => paramsPerView())
  }, [windowWidth])

	return (
		<>
			<Typography variant='body1' component='p'>
				PlacesList
			</Typography>
      
			<Swiper        
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
          disabledClass: 'text-dark-s border-dark-s',
        }}
				spaceBetween={params.spaceBetween}
				slidesPerView={params.slides}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}>
				{props.places.map((item: any) => {
          return (<SwiperSlide key={Math.random().toString()}>
            <PlaceItem 
            name={item.name} 
            description={item.description} 
            photoUrl={item.photoUrl} 
            />
            </SwiperSlide>)
        })}        
        <Box className={classes.container}>
        <div className={clsx(classes.placesList__button__prev, "prev")}>
          <NavigateBeforeIcon fontSize='large'/>
        </div>
        <div className={clsx(classes.placesList__button__next, "next")}>
          <NavigateNextIcon fontSize='large'/>
        </div>
        </Box>			
			</Swiper>  
          
		</>
	)
}

export default PlacesList