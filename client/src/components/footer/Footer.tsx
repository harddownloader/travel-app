import React from 'react';
import './footer.scss'
import { Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&#169; Rolling Scoope 2021.</p>
            <Grid container >
                <Grid item container xs={3}>
                    <Grid xs={12} item>Vlas</Grid>
                    <Grid xs={6} item><LinkedInIcon /></Grid>
                    <Grid xs={6} item><GitHubIcon /></Grid>
                </Grid>
                <Grid item container xs={3}>
                    <Grid xs={12} item>Jenya</Grid>
                    <Grid xs={6} item><LinkedInIcon /></Grid>
                    <Grid xs={6} item><GitHubIcon /></Grid>
                </Grid>
                <Grid item container xs={3}>
                    <Grid xs={12} item>Sergey</Grid>
                    <Grid xs={6} item><LinkedInIcon /></Grid>
                    <Grid xs={6} item><GitHubIcon /></Grid>
                </Grid>
                <Grid item container xs={3}>
                    <Grid xs={12} item>Serafim</Grid>
                    <Grid xs={6} item><LinkedInIcon /></Grid>
                    <Grid xs={6} item><GitHubIcon /></Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;