import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class MainMap extends Component {
	render () {
		return(
				<Map google={this.props.google} 
					style={{width: '100%', height: '100%', position: 'relative'}} 
					className={'map'} 
					zoom={14}> 
					<Marker 
					title={'Тут плавают самые красивые рыбы'} 
					name={'SOMA'} 
					position={{lat: 37.778519, lng: -122.405640}} /> 
				</Map> 
			)
	}
}