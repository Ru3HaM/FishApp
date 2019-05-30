import React, {Component} from 'react';

import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
 
export class MapContainer extends Component {
	render() {
		return (
			<Map google={this.props.google}
         		zoom={10}
        		initialCenter={{
             lat: this.props.lat,
             lng: this.props.lng
         	}}>
			</Map>
			)
	}
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBC8CrJK3W4J8OAmrANhrUrPaj2QM1M1Ys'
	})(MapContainer)


