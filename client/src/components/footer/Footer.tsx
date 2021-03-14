import React from 'react';
import './footer.scss'
import { Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '@/assets/images/rs-school.png'

const useStyles = makeStyles((theme) => ({
  width: {
    width: '20px',
    height: "30px"
  },
  footer: {
    width: '100%',
    height: 170,
    backgroundColor: '#000',
    textAlign: 'center',
    color: '#fff',
  },
  footerImg: {
    borderRadius: 5,
    width: 80,
    height: 40,
  }
}));

const Footer = () => {
  const classes = useStyles();

  const autorsList = [
    {
      name: 'Vlas : Belarus',
      github: '',
      linkedin: ''
    },
    {
      name: 'Jenya : Russia',
      github: '',
      linkedin: ''
    },
    {
      name: 'Serhii : Ukraine',
      github: '',
      linkedin: ''
    },
    {
      name: 'Serafim : Ukraine',
      github: '',
      linkedin: ''
    },
    {
      name: 'Valera : Ukraine',
      github: '',
      linkedin: ''
    }
  ]

  return (
    <footer className='footer'>
      <Grid container >
        <Grid container >
          <Grid item xs={1}>
            <p>The Rolling Scopes School.</p>
            <Icon ><img className={classes.width} src={logo} /></Icon>
          </Grid>

          {autorsList.map((autor, index) => {
            return (
              <Grid key={autor.name} xs={2} item>
                <p>{autor.name}</p>
                <Grid xs={6} item>
                  <a href={autor.linkedin}>
                    <LinkedInIcon fontSize='large' className={classes.footerImg} />
                  </a>
                </Grid>
                <Grid xs={6} item>
                  <a href={autor.github}>
                    <GitHubIcon fontSize='large' className={classes.footerImg} />
                  </a>
                </Grid>
              </Grid>
            )
          })}

        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;