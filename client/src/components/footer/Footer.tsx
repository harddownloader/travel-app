import React from 'react';
import './footer.scss'
import { Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/rs-school.png'

const useStyles = makeStyles((theme) => ({
    width: {
        width: '20px',
        height: "30px"
    },
}));


const Footer = () => {
    const classes = useStyles();

    return (
        <footer className='footer'>
            <Grid container >
                <Grid container xs={2}>
                    <Grid item xs={12}><p>The Rolling Scopes School.</p></Grid>
                    <Grid item xs={1} xl={12}>
                        <Icon ><img className={classes.width} src={logo} /></Icon>
                    </Grid>
                </Grid>
                <Grid container xs={2}>
                    <Grid xs={12} item><p>Vlas : Belarus</p></Grid>
                    <Grid xs={12} item container>
                        <Grid xs={6} item><a href='?'><LinkedInIcon fontSize='large' /></a></Grid>
                        <Grid xs={6} item><a href='?'><GitHubIcon fontSize='large' /></a></Grid>
                    </Grid>
                </Grid>
                <Grid container xs={2}>
                    <Grid xs={12} item><p>Jenya : Russia</p></Grid>
                    <Grid xs={12} item container>
                        <Grid xs={6} item><a href='?'><LinkedInIcon fontSize='large' /></a></Grid>
                        <Grid xs={6} item><a href='?'><GitHubIcon fontSize='large' /></a></Grid>
                    </Grid>
                </Grid>
                <Grid container xs={2}>
                    <Grid xs={12} item><p>Serhii : Ukraine</p></Grid>
                    <Grid xs={12} item container>
                        <Grid xs={6} item><a href='?'><LinkedInIcon fontSize='large' /></a></Grid>
                        <Grid xs={6} item><a href='?'><GitHubIcon fontSize='large' /></a></Grid>
                    </Grid>
                </Grid>
                <Grid container xs={2}>
                    <Grid xs={12} item><p>Serafim : Ukraine</p></Grid>
                    <Grid xs={12} item container>
                        <Grid xs={6} item><a href='?'><LinkedInIcon fontSize='large' /></a></Grid>
                        <Grid xs={6} item><a href='?'><GitHubIcon fontSize='large' /></a></Grid>
                    </Grid>
                </Grid>
                <Grid container xs={2}>
                    <Grid xs={12} item><p>Valera : Russia</p></Grid>
                    <Grid xs={12} item container>
                        <Grid xs={6} item><a href='?'><LinkedInIcon fontSize='large' /></a></Grid>
                        <Grid xs={6} item><a href='?'><GitHubIcon fontSize='large' /></a></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer >
    )
}

export default Footer;