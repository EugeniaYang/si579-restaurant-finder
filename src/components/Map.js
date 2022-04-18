import React, {useEffect, useState} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';



const SimpleMap = (props) => {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };
    const [markers,setMarkers]=useState([])
    // const [centerPos, setCenterPos] = useState()
    const [finish, setFinish] = useState(false)

    const ShowMarkers=()=>{
        console.log('show')
        // const centerLoc= centerPos;
        console.log(props.centerLoc)
        let result=<Marker position={props.centerLoc}/>;
        if (markers.len>0){

        }
        return result;
    }

    // useEffect(async ()=>{
    //     console.log('new center')
    //     // let pos = await props.findPos(props.centerPos.key);
    //     setFinish(true)
    //     setCenterPos(pos)},[props])

    // while (!finish) return (<div>Loading Map</div>)
    return (
            // Important! Always set the container height explicitly
            <div style={{height: '450px', width: '100%'}}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={props.centerLoc}
                    zoom={10}
                >
                    {<ShowMarkers/>}
                </GoogleMap>

            </div>
        );


}

export default SimpleMap;