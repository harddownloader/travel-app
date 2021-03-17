import React, { useState } from 'react'
import ReactMapGl, { Marker, NavigationControl, FlyToInterpolator, FullscreenControl, } from 'react-map-gl'
import { Source, Layer } from 'react-map-gl'
import map from './belarus.json'
import Container from '@material-ui/core/Container';
import maps from '../../assets/images/marker.png'
import { makeStyles } from '@material-ui/core/styles';
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
        width: '1000px',
        height: '400px',
        // pitch: 50
    })

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
        <Container maxWidth="lg" className={classes.wrapper} >
            <ReactMapGl
                className={classes.wrapperMap}
                transitionDuration={1000}
                transitionInterpolator={new FlyToInterpolator()}
                mapStyle={'mapbox://styles/mapbox/dark-v9'}
                mapboxApiAccessToken={'pk.eyJ1IjoiZXhvb29sIiwiYSI6ImNrbTdqanVrazB5bWMycWtuaGJsejZkdWMifQ.O3bZI32GskLsf18DNkKlXA'}
                {...viewport}
                onViewportChange={(viewport: any) => setViewport(viewport)} >
                <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-20} offsetTop={-10}>
                    <img src={maps} width={'20px'} height={'20px'} />
                </Marker>
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navControlStyle} />
                <Source
                    id='oregonjson'
                    type='geojson'
                    data={coordinateCountry} />
                <Layer id='anything' type='fill' source='oregonjson'
                    paint={{
                        "fill-color": 'red',
                        "fill-opacity": 0.25,
                    }}
                />
            </ReactMapGl>
        </Container>


    )

}

export default Maps;