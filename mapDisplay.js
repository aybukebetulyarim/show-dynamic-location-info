import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';
import L from 'leaflet';
import marker from './redmarker.png';


const myIcon = L.icon ({
  iconUrl: marker,
  iconSize: [35,41],
  iconAnchor: [12.5, 41],
  popupAnchor: [2, -41]
})

class MapDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 39.1667,
      longitude: 35.6667,
      error: '',
      zoom: 13
    }
    window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);              //position döner.
      this.setState ({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    },
    (err) => {                         //hata döner.
      console.log(err);
      this.setState({
        error: 'There is no location information'
      })
    }
  );
}

componentWillUnmount () {
    this.setState({
      latitude: null,
      longitude: null
    })
  }
  render() {
    const position = [this.state.latitude, this.state.longitude]
    if(position && !this.state.error) {
      return(
        <div>
          <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.mapbox.com/styles/v1/aybyarim/cklgzjh2703dm17nxv72o95oc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXlieWFyaW0iLCJhIjoiY2tsZHFuMWk1MDczejJucHJ6Z3FiNmZ4dyJ9.ZnnB94gcgslppxWI3kOTNQ"
            />
            <Marker position={position} icon={myIcon}>
              <i className="map marker alternate icon">
                <Popup>
                  Hello from this location :)
                </Popup>
              </i>
            </Marker>
          </MapContainer>
        </div>
      );
    }
    else if (this.state.error && position) {
      return(
        <div>
          Error: {this.state.error}
        </div>
      );
    }
  }
}
export default MapDisplay;
