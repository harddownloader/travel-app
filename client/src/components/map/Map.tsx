import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker, NavigationControl, FlyToInterpolator, FullscreenControl, } from 'react-map-gl'
import { Source, Layer } from 'react-map-gl'
import Container from '@material-ui/core/Container';
import maps from '@/assets/images/marker.png'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// jsons with locations data
import US from './usa.json'
import IT from './italy.json'
import FR from './france.json'
import BY from './belarus.json'
import DE from './german.json'
import JP from './japan.json'
import RU from './russia.json'
import UA from './ua.json'


const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    wrapperMap: {
        width: '100%',
        overflow: 'auto'
    }
}));

const Maps = ({ coordinate, ISOCode }: any) => {

    let coordinateCountry = null

    switch (ISOCode) {
        case 'US': {
            coordinateCountry = US
            break;
        }
        case 'IT': {
            coordinateCountry = IT
            break;
        }
        case 'RU': {
            coordinateCountry = RU
            break;
        }
        case 'UA': {
            coordinateCountry = UA
            break;
        }
        case 'BY': {
            coordinateCountry = BY
            break;
        }
        case 'DE': {
            coordinateCountry = DE
            break;
        }
        case 'JP': {
            coordinateCountry = JP
            break;
        }
        case 'FR': {
            coordinateCountry = FR
            break;
        }
    }

    const [viewport, setViewport] = useState({
        latitude: coordinate[0],
        longitude: coordinate[1],
        zoom: 3,
        width: '100%',
        height: '400px',
        // pitch: 50
    })

    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    })

    useEffect(() => {
        setLocation({
            latitude: coordinate[0],
            longitude: coordinate[1]
        })
    }, [])

    const navControlStyle = {
        right: 10,
        top: 60
    };

    const fullscreenControlStyle = {
        right: 10,
        top: 5
    };

    const classes = useStyles();



    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12}>
                    <ReactMapGl
                        className={classes.wrapperMap}
                        transitionDuration={1000}
                        transitionInterpolator={new FlyToInterpolator()}
                        mapStyle={'mapbox://styles/mapbox/dark-v9'}
                        mapboxApiAccessToken={'pk.eyJ1IjoiZXhvb29sIiwiYSI6ImNrbTdqanVrazB5bWMycWtuaGJsejZkdWMifQ.O3bZI32GskLsf18DNkKlXA'}
                        {...viewport}
                        onViewportChange={(viewport: any) => setViewport(viewport)}
                    >
                        <Marker latitude={location.latitude} longitude={location.longitude} offsetLeft={-20} offsetTop={-10}>
                            <img src={maps} width={'20px'} height={'20px'} />
                        </Marker>
                        <FullscreenControl style={fullscreenControlStyle} />
                        <NavigationControl style={navControlStyle} />
                        <Source
                            id='oregonjson'
                            type='geojson'
                            data={coordinateCountry}
                        />
                        <Layer id='anything' type='fill' source='oregonjson'
                            paint={{
                                "fill-color": 'red',
                                "fill-opacity": 0.25,
                            }}
                        />
                    </ReactMapGl>
                </Grid>
            </Grid>
            
        </Container>
    )
}

export default Maps;