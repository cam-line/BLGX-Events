import React, { Component } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FtbGluZSIsImEiOiJja3ExNzZzOWIwYzU3MnZvN2hzcXp6MDdwIn0.ue2jt5yoI-Nh_i2Y3Ow03Q";

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -86.163456,
      lat: 39.763968,
      zoom: 9,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    //const { lng, lat, zoom } = this.state;
    return (
      <div className="map-field">
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}

export default Map;
