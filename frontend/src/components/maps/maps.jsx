import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

const mapStyles = {
    width: '1000px',
    height: '1000px'
}

class MapContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            lng: null
        }
    }

    componentDidMount() {
        const success = pos => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            this.setState({ lat: lat, lng: long});

        };
        const error = err => console.log(err);
        navigator.geolocation.getCurrentPosition(success, error);

        //this.handleGymSearch();
    }

    handleGymSearch() {
        let config = {
            method: 'get',
            url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=1500&type=gym&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        };
        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    // handleGymSearch() {
    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat}%2C${this.state.lng}&radius=1500&type=gym&key=${process.env.REACT_APP_GOOGLE_API_KEY}`

    //     fetch(proxyurl + url).then((resp) => resp.json())
    //         .then(function (data) {
    //             console.log(data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         }); 
    // }

    render() {
        if (!this.state.lat) {
            return <div>
                <h1>Please turn on your location in order to access this feature</h1>
            </div>
        }
        return (
            <Map google={this.props.google} zoom={16} style={mapStyles} initialCenter={this.state}>
                <Marker position={this.state}/>
            </Map>
        )
    }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY})(MapContainer);
