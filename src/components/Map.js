import React, {useEffect, useState} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';


// Customize marker
const icon = { 
    url: 'http://maps.google.com/mapfiles/kml/paddle/ylw-stars.png',
};

const SimpleMap = (props) => {
    console.warn(props.location)
    const containerStyle = {
        width: '100%',
        height: '60%'
    };

    // The current center marker 
    const ShowMarkers=()=>{
        let result = <Marker position={props.centerLoc}/> 
        return result;
    }

    // Customized markers user want to see 
    const ShowMoreMarker=()=>{
        return props.location.map ((location) =>{
            return(<Marker icon = {icon} key={location.toString()} position={location} onClick={()=> {props.setLocation((current) => current.filter(element => element !==location))}}/>)  
        })
    }


    return (
            <div style={{height: '450px', width: '100%'}}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={props.centerLoc}
                    zoom={14}
                >
                    {<ShowMarkers/>}
                    {<ShowMoreMarker/>} 
                </GoogleMap>
            </div>
        );
}

export default SimpleMap;
