import { Place } from '@material-ui/icons';
import React from 'react'
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from "react-yandex-maps";

const mapData = {
    center: [53.902496, 27.561481],
    zoom: 9,
    geometry:[53.902284, 27.561831]
};

const Maps = () => (
    <YMaps query={{ lang: 'en_US' }}>
        <Map
            defaultState={{
                center: mapData.center,
                zoom: mapData.zoom,
                controls: [],
            }}
        >
            <ZoomControl options={{ float: 'right' }} />
            <FullscreenControl />
            <Placemark geometry={mapData.geometry}/>
        </Map>
    </YMaps>
);

export default Maps;