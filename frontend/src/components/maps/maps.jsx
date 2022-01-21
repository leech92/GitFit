import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

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
    }

    render() {
        if (!this.state.lat) {
            return <div>
                <h1>Please turn on your location in order to access this feature</h1>
            </div>
        }

        const google = window.google;

        // dummy points to be replaced at a later point with data fetched from google places api
        const dummyPoints = [{"lat": 40.73664249999999,"lng": -73.8926099}, {"lat": 40.7478089,"lng": -73.8798619}, {"lat": 40.7469827,"lng": -73.88760909999999}, {"lat": 40.7482,"lng": -73.87995699999999}, {  "lat": 40.73652200000001,"lng": -73.89260999999999}, {"lat": 40.7559952,"lng": -73.88385219999999}, {"lat": 40.7620853,"lng": -73.9846163}, {"lat": 40.7683224,"lng": -73.9873267}, {"lat": 40.7528941,    "lng": -73.9877224},{"lat": 40.767243,"lng": -73.98781699999999}, {"lat": 40.7545853,"lng": -73.9947272}, {"lat": 40.75450499999999,"lng": -73.99218599999999}, {"lat": 40.7643104,"lng": -73.9835317}]

        const bubblePoints = [
            {"lat": 40.76035246171507, "lng": -73.9839848955009}, 
            {"lat": 40.76041747388194, "lng":-73.99231047194618},
            {"lat": 40.76793876749054, "lng": -73.982776685366},
            {"lat": 40.761529893926344, "lng": -73.98690503725284}, 
            {"lat": 40.755911825850845, "lng": -73.99175787398256},
            {"lat": 40.76173972659842, "lng": -73.98715580602972},
            {"lat": 40.74750318429112, "lng": -73.98653268856992}, 
            {"lat": 40.768055359929406, "lng": -73.96381020643882},
            {"lat": 40.75277234261073, "lng": -73.98552381573954}
        ]
        // {"lat": , "lng": },
        return (
            <Map google={this.props.google} zoom={16} style={mapStyles} initialCenter={this.state}>
                <Marker position={this.state} icon={"https://img.icons8.com/fluency/48/000000/home-page.png"}/>
                {dummyPoints.map(location => <Marker position={location} icon={"https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-gym-location-pins-soft-fill-soft-fill-juicy-fish.png"}/>)}

                {bubblePoints.map(location => <Marker position={location} icon={"https://raw.githubusercontent.com/leech92/GitFit/main/frontend/src/stylesheets/images/bubble_tea_tinier.png"}/>)}
            </Map>
        )
    }



}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY})(MapContainer);





