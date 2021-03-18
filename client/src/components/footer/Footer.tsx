import React from 'react'
import './footer.scss'
import { Grid } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import logo from '@/assets/images/rs-school.png'

//material ui components


// flags
import IcoRussia from '@/assets/images/language-icons/russia.svg'
import IcoGermany from '@/assets/images/language-icons/germany.svg'
import IcoBelarus from '@/assets/images/language-icons/belarus.svg'
import IcoUkraine from '@/assets/images/language-icons/ukraine.svg'

const autorsList = [
  {
    name: 'Vlas',
    country: 'bel',
    github: 'https://github.com/Exooo1',
    linkedin: 'https://www.linkedin.com/in/vlas-maskalenchik-2321031ba/'
  },
  {
    name: 'Eugen',
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    marginTop: '60px'
  },
  footerLogo: {
    width: '6rem',
    margin: '10px'
  },
  socialImg: {
    width: '1.5rem',
    height: '1.5rem',
    color: '#000',
    padding: '0.25rem',
    [theme.breakpoints.up('sm')]: {
      width: '3rem',
      height: '3rem',
      padding: '0.75rem'
    },
  },
  authorCountry: {
    padding: '0 10px'
  },
  author: {
    cursor: 'pointer',
    padding: '1rem',
    position: 'relative',
    '& .popper': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.dark,
      border: '1px solid black',
      borderBottom: 'none',
      '& .popper': {
        display: 'flex',
        justifyContent: 'center', 
        position: 'absolute',
        bottom: '100%',
        left: '-1px',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        width: 'calc(100% - 16px)',
        border: '1px solid black',
        borderBottom: 'none'
      }
    }
  },
}));

const Footer = (): JSX.Element => {
  const classes=useStyles()

  return (
    <footer className={classes.root} >
      <Grid container xs={12}>
        <Grid item className={classes.courseBlock} xs={12}>
           <a href="https://rs.school/react/">
             <Icon><img className={classes.footerLogo} src={logo} /></Icon>
           </a>
        </Grid>
        <Grid item container className={classes.courseBlock} xs={12}>
          {autorsList.map((item) => {
            console.log(item)
            return (
              <Grid item xs={3} className={classes.author}>
                <div>
                  {item.name}
                </div>
                <div className={'popper'}>
                  <a href={item.linkedin}>
                    <LinkedInIcon className={classes.socialImg} />
                  </a>
                  <a href={item.github}>
                    <GitHubIcon className={classes.socialImg} />
                  </a>
                </div>
              </Grid>  
            )
          })}
        </Grid>
      </Grid>
    </footer>    
  )
  }

{/*  
  return (
    <footer className={classes.root}>
      <Grid container spacing={1} className={classes.footerWrapp}>
        <Grid item lg={1} md={1} xs={12} className={classes.courseBlock}>
          <a href="https://rs.school/react/">
            <Icon><img className={classes.footerLogo} src={logo} /></Icon>
          </a>
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
            <Grid key={autor.name} lg={2} md={2} xs={12} item>
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
*/}

export default Footer
