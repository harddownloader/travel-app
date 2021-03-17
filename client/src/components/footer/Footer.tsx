import React from 'react'
import './footer.scss'
import { Grid } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo from '@/assets/images/rs-school.png'


// flags
import IcoRussia from '@/assets/images/language-icons/russia.svg'
import IcoGermany from '@/assets/images/language-icons/germany.svg'
import IcoBelarus from '@/assets/images/language-icons/belarus.svg'
import IcoUkraine from '@/assets/images/language-icons/ukraine.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    
  },
  footerWrapp: {
    justifyContent: 'space-around'
  },
  footerLogo: {
    width: '6rem',
    margin: '10px'
  },
  courseBlock: {

  },
  footerCourseTitle: {
    margin: 0
  },
  socialImg: {
    borderRadius: 5,
    width: 80,
    height: 40,
    color: '#000'
  },
  authorName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  authorCountry: {
    padding: '0 10px'
  },
  authorContacts: {
    display: 'flex',
    justifyContent: 'center',
  },
  copyright: {
    width: '100%',
    color: '#fff'
  }
}));

const Footer = (): JSX.Element => {
	const classes = useStyles()

  const autorsList = [
    {
      name: 'Vlas',
      country: 'bel',
      github: 'https://github.com/Exooo1',
      linkedin: 'https://www.linkedin.com/in/vlas-maskalenchik-2321031ba/'
    },
    {
      name: 'Jenya',
      country: 'ger',
      github: 'https://github.com/evgeshabond',
      linkedin: 'https://www.linkedin.com/in/eugen-bondarenko-a068b217a/'
    },
    {
      name: 'Serhii',
      country: 'ua',
      github: 'https://github.com/SerhiiShevchenkoOo',
      linkedin: 'https://www.linkedin.com/in/shevchenko-serhii/'
    },
    {
      name: 'Serafim',
      country: 'ua',
      github: 'https://github.com/harddownloader',
      linkedin: 'https://www.linkedin.com/in/serafim-krutskevich-144163209/'
    }
  ]

  return (
    <footer className={classes.root}>
      <Grid container spacing={1} className={classes.footerWrapp}>
        <Grid item xs={1} className={classes.courseBlock}>
          <Icon><img className={classes.footerLogo} src={logo} /></Icon>
          <p className={classes.footerCourseTitle}>The Rolling Scopes School.</p>
        </Grid>

        {autorsList.map((autor, index) => {
          let countryFlag = <></>
          if(autor.country === 'ger') {
            countryFlag = <IcoGermany width="32" />
          } else if (autor.country === 'ru') {
            countryFlag = <IcoRussia width="32"  />
          } else if (autor.country === 'bel') {
            countryFlag = <IcoBelarus width="32" />
          } else if (autor.country === 'ua') {
            countryFlag = <IcoUkraine width="32" />
          }

          return (
            <Grid key={autor.name} xs={2} item>
              <p className={classes.authorName}>{autor.name} <span className={classes.authorCountry}>{countryFlag}</span></p>
              <div className={classes.authorContacts}>
                <a href={autor.linkedin}>
                  <LinkedInIcon fontSize='large' className={classes.socialImg} />
                </a>
                <a href={autor.github}>
                  <GitHubIcon fontSize='large' className={classes.socialImg} />
                </a>
              </div>
            </Grid>
          )
        })}
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.copyright}>
          <p className="copyright">@Copyright 2021</p>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
