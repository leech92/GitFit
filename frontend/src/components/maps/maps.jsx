import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '500px'
}

class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={15} style={mapStyles} initialCenter={{lat: 40.7455813,lng: -73.8861816}}/>
        )
    }
}

export default GoogleApiWrapper({ apiKey: ''})(MapContainer);