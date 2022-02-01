import React from 'react';
const google = window.google;

class MapContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            lat: '',
            lng: ''
        }
        this.getLocation = this.getLocation.bind(this);
        this.searchGyms = this.searchGyms.bind(this);
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation() {
        const success = pos => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            this.setState({ lat: lat, lng: long });
            this.map = new google.maps.Map(this.mapNode, {center: {lat: this.state.lat, lng: this.state.lng}, zoom: 16})
            let position = new google.maps.LatLng(this.state.lat, this.state.lng);
            let marker = new google.maps.Marker({
                position: position,
                map: this.map,
                icon: "https://img.icons8.com/fluency/48/000000/home-page.png"
            })
            
            this.searchGyms();
        }
        const error = err => console.log(err);
        navigator.geolocation.getCurrentPosition(success, error);
    }

    searchGyms() {
        this.service = new google.maps.places.PlacesService(this.map);
        this.service.nearbySearch({
            location: { lat: this.state.lat, lng: this.state.lng},
            radius: 5000,
            type: ['gym']
        }, (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let item of result) {
                    let obj = {};
                    let location = item.geometry.location.toString().slice(1,-1);
                    obj[item.name] = location;
                    this.setState({results: this.state.results.concat([obj])})
                    let lat = parseFloat(location.split(' ')[0]);
                    let lng = parseFloat(location.split(' ')[1]);
                    let position = new google.maps.LatLng(lat, lng);
                    let marker = new google.maps.Marker({
                        position: position,
                        map: this.map,
                        icon: "https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-gym-location-pins-soft-fill-soft-fill-juicy-fish.png"
                    })
                    const name = item.name;
                    const address = item.vicinity;
                    const rating = item.rating ? item.rating + ' Stars' : 'No Rating'

                    const contentString = '<div>' + `<h1>Name: ${name}</h1>` + `<h2>Address: ${address}</h2>` + `<h2> Rating: ${rating}</h2>` +  '</div>'
                    
                    const infowindow = new google.maps.InfoWindow({
                        content: contentString
                    })

                    marker.addListener('click', () => {
                        infowindow.open({
                            anchor: marker,
                            map: this.map,
                            shouldFocus: false
                        })
                    })
                }   
                    
            } else {
                console.log('error')
            }
        })
    }

    render() {
        return (  
            <div id="map" style={{ 'height': '700px' }} ref={map => this.mapNode = map}>      
            </div>  
    
        )
    }
}

export default MapContainer;
