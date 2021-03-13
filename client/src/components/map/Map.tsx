import React, { useState } from 'react'
import ReactMapGl, { Marker, NavigationControl, FlyToInterpolator, FullscreenControl, } from 'react-map-gl'
import ReactMapboxGL, { Source, Layer } from 'react-map-gl'
const Maps = () => {

    const [viewport, setViewport] = useState({
        latitude: 53.7169,
        longitude: 27.9776,
        zoom: 8,
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

    return (
        <div style={{ display: 'block', maxWidth: '300px', maxHeight: '200px' }}>
            <ReactMapGl
                transitionDuration={1000}
                transitionInterpolator={new FlyToInterpolator()}
                mapStyle={'mapbox://styles/mapbox/dark-v9'}
                mapboxApiAccessToken={'pk.eyJ1IjoiZXhvb29sIiwiYSI6ImNrbTdqanVrazB5bWMycWtuaGJsejZkdWMifQ.O3bZI32GskLsf18DNkKlXA'}
                {...viewport}
                onViewportChange={(viewport: any) => setViewport(viewport)} >
                <Marker latitude={53.9045} longitude={27.5615} offsetTop={(-viewport.zoom * 5) / 2}>
                    <p>here</p>
                    {/* <img src='https://i.pinimg.com/originals/22/11/f8/2211f8cc5b35a7cd807586328bc33e35.png' width={viewport.zoom * 5} height={viewport.zoom * 5} /> */}
                </Marker>
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navControlStyle} />
                <Source
                    id='oregonjson'
                    type='geojson'
                    data='https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/alaska.geojson' />
                <Layer id='anything' type='fill' source='oregonjson'
                    paint={{
                        "fill-color": '#228b22',
                    }} />
            </ReactMapGl>

        </div>
    )

}

export default Maps;