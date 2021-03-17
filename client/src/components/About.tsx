/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react'
import Typography from '@material-ui/core/Typography'

type About = (props: any) => JSX.Element

const About:About = (props) => {
  return (
    <>
      <Typography component='p' variant='body1'>{props.description}</Typography>
    </>
  )
}

export default About
