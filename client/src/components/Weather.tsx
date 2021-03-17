import React, { useEffect, useState } from 'react'
import axios from 'axios';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia';

//components
import TimePicker from './TimePicker'

//icons customization
import mist from '../assets/images/weather-icons/mist.png'
import clouds from '../assets/images/weather-icons/clouds.png'
import clear from '../assets/images/weather-icons/clear.png'
import snow from '../assets/images/weather-icons/snow.png'
import rain from '../assets/images/weather-icons/rain.png'
import drizzle from '../assets/images/weather-icons/drizzle.png'
import thunderstorm from '../assets/images/weather-icons/thunderstorm.png'
const images = {clouds,clear, drizzle, mist, rain, snow, thunderstorm}
const atmosphereList = ['mist', 'smoke', 'haze', 'dust', 'fog', 'sand', 'dust', 'ash',
'squall', 'tornado' ]

const useStyles = makeStyles({
  weather: {
    width: '16rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  weather__icon: {
    width: '3rem',
    height: '3rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  weather__icon1: {
    width: '3rem',
    height: '3rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(././1.png)`,
  } 
})

const Weather = (props: any) => {
  const [data, setData] = useState({}) 
  const classes = useStyles()

  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.coord[0]}&lon=${props.coord[1]}&lang=en&appid=57781f6b98433e378452bea1ff327bd2&units=metric`;
  // const urlWithLangParam = `https://api.openweathermap.org/data/2.5/weather?lat=${props.coord[0]}&lon=${props.coord[1]}&lang=${props.lang}&appid=57781f6b98433e378452bea1ff327bd2&units=metric`;


  useEffect(() => {
    if (props.city.length < 1) return
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.coord[0]}&lon=${props.coord[1]}&lang=en&appid=57781f6b98433e378452bea1ff327bd2&units=metric`;
    const urlWithLangParam = `https://api.openweathermap.org/data/2.5/weather?lat=${props.coord[0]}&lon=${props.coord[1]}&lang=${props.lang}&appid=57781f6b98433e378452bea1ff327bd2&units=metric`;
    const newData = {temp: '', imageName: '', description: '' }
    const dataPromise = axios.get(url)    
    dataPromise.then((res) => {
      newData.temp = res.data.main.temp + ' °C'
      if ( atmosphereList.includes(res.data.weather[0].main.toLowerCase()) ) {        
        newData.imageName = 'mist'        
      } else {
        newData.imageName = res.data.weather[0].main.toLowerCase()      
      }
      const dataPromiseWithParam = axios.get(urlWithLangParam)
      dataPromiseWithParam.then((res) => {
        newData.description = res.data.weather[0].description
        setData(newData)
      })
    })
    .catch((e) => {console.log(e)})  
    
  }, [props])

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.coord[0]}&lon=${props.coord[1]}&lang=en&appid=57781f6b98433e378452bea1ff327bd2&units=metric`;
    if (props.city.length < 1) return
    const dataPromise = axios.get(url)    
    dataPromise.then((res) => {
      console.log(props.coord)
      console.log(res)
      setData({...data, description: res.data.weather[0].description })
    })
    .catch((e) => {}) 
  }, [props])


  return (
    <Card elevation={3} className={classes.weather}>
      <TimePicker city={props.city} language={props.lang} />
      {!!data.imageName && <CardMedia 
        className={classes.weather__icon}
        component='img'
        alt={'weather icon'}
        title={'weather icon'}
        src={images[`${data.imageName}`]}
      />}
      <Typography
        variant="body1"
        color="textSecondary"
        component="p">
        {data.description}
      </Typography>  
      <Typography
        variant="body1"
        color="textSecondary"
        component="p">
        {data.temp}
      </Typography>  
    </Card>
  )
}

export default Weather
