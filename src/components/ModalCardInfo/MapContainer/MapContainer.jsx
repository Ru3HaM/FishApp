import React, { Component } from 'react'; 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapContainer.scss';


export class MapContainer extends Component { 
	render () { 
		return( 
			<> 
					<div className="mapContainer">
				        <Map google={this.props.google}
				        	style={{
				        		height: '500px'
				        	}}
			         		zoom={10}
			        		initialCenter={{
				             lat: this.props.lat,
				             lng: this.props.lng
				         	}}> 
			         	<Marker onClick={this.onMarkerClick}
	                		name={'Тут обитает рыба'} />
						</Map>
					</div>
							
			</> 
			) 
	}	
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBC8CrJK3W4J8OAmrANhrUrPaj2QM1M1Ys')
})(MapContainer)

