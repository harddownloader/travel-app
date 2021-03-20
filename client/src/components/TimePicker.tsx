import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography';

import getTime from '../utils/getTime'

const timeZones = {
  'Rome': 'Europe/Rome',
  'Washington': 'America/New_York',
  'Moscow': 'Europe/Moscow',
  'Kyiv': 'Europe/Kiev',
  'Minsk': 'Europe/Minsk',
  'Berlin': 'Europe/Berlin',
  'Tokyo': 'Asia/Tokyo',
  'Paris': 'Europe/Paris',
  'Рим': 'Europe/Rome',
  'Вашингтон': 'America/New_York',
  'Москва': 'Europe/Moscow',
  'Киев': 'Europe/Kiev',
  'Минск': 'Europe/Minsk',
  'Берлин': 'Europe/Berlin',
  'Токио': 'Asia/Tokyo',
  'Париж': 'Europe/Paris',
  'Rom': 'Europe/Rome',
  'Washington, D.C.': 'America/New_York',
  'Moskau': 'Europe/Moscow',
  'Kiew': 'Europe/Kiev',
  'Tokio': 'Asia/Tokyo',
}

type TimePicker = (props) => JSX.Element 
const TimePicker:TimePicker = (props) => {
  const [time, setTime] = useState(getTime(props.language,timeZones[props.city]))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime(props.language,timeZones[props.city]))
    }, 100)
    return () => clearInterval(interval)
  }, [props])

  return (
    <>
      <Typography component='p' variant='body1'>{time}</Typography>
    </>
  )
}

export default TimePicker