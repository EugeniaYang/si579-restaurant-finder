import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const API_KEY='AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '200px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:API_KEY}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;