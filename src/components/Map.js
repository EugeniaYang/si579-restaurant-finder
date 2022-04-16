import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from '@react-google-maps/api';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const API_KEY='AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {//north quad
    lat: 42.280661373579385,
    lng: -83.74013801578548
};

const mapContainerStyle = {
    height: "400px",
    width: "800px"
}

const marker_position = {
    lat: 42.280661373579385,
    lng: -83.74013801578548
}

const onLoad = marker => {
    // console.log(this.props.centerPos)
    console.log('marker: ', marker)
}

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
        centerPos: []
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '600px', width: '100%' }}>
                {/*<GoogleMapReact*/}
                {/*    bootstrapURLKeys={{ key:API_KEY}}*/}
                {/*    defaultCenter={this.props.center}*/}
                {/*    defaultZoom={this.props.zoom}*/}
                {/*>*/}
                {/*    <AnyReactComponent*/}
                {/*        lat={59.955413}*/}
                {/*        lng={30.337844}*/}
                {/*        text="My Marker"*/}
                {/*    />*/}
                {/*</GoogleMapReact>*/}


                {/*<LoadScript*/}
                {/*    googleMapsApiKey={API_KEY}*/}
                {/*>*/}
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <Marker
                            onLoad={onLoad}
                            position={marker_position}
                        />
                    </GoogleMap>

                {/*</LoadScript>*/}
            </div>
        );
    }
}

export default SimpleMap;