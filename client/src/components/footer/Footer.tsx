import React from 'react';
import './footer.scss'
import { Grid } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&#169; Rolling Scoope 2021.</p>
            <Grid container >
                <Grid item container xs={3}>
                    <Grid xs={12} item>Vlas</Grid>
                    <Grid xs={6} item>Linkedin</Grid>
                    <Grid xs={6} item>Git</Grid>
                </Grid>
                <Grid item container xs={3}>
                    <Grid xs={12} item>Jenya</Grid>
                    <Grid xs={6} item>Linkedin</Grid>
                    <Grid xs={6} item>Git</Grid>
                </Grid>
                <Grid item container xs={3}>
                    <Grid xs={12} item>Sergey</Grid>
                    <Grid xs={6} item>Linkedin</Grid>
                    <Grid xs={6} item>Git</Grid>
                </Grid>
                <Grid item container xs={3}>
                    <Grid xs={12} item>Serafim</Grid>
                    <Grid xs={6} item>Linkedin</Grid>
                    <Grid xs={6} item>Git</Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;