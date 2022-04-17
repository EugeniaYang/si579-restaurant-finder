import React, {useEffect, useState} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';

const API_KEY = 'AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';

const findPos = (id) => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    return fetch(proxyUrl + 'https://maps.googleapis.com/maps/api/place/details/json?' +
        'place_id=' + id + '&fields=geometry' +
        '&key=' + API_KEY, {mode: 'cors', headers: {'Access-Control-Allow-Origin': "*"}})
        .then(response => response.json())
        .then((data) => {
            console.log(data.result.geometry.location)
            return data.result.geometry.location;
        }).catch((err) => {
            console.log(err);
        });

}
const SimpleMap = (props) => {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };
    const [markers,setMarkers]=useState([])
    const centerLoc=findPos(props.centerPos.key);
    const showMarkers=()=>{
        let result=[<Marker position={centerLoc}/>];
        if (markers.len>0){

        }
        return result;
    }

    async function onLoad(marker) {
        console.log(props.centerPos)
        let a = await findPos(props.centerPos.key)
        console.log('marker: ', marker)
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{height: '600px', width: '100%'}}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={findPos(props.centerPos.key)}
                zoom={10}
            >
                {showMarkers}
            </GoogleMap>

        </div>
    );

}

export default SimpleMap;