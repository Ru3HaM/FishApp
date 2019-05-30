import React, { Component } from 'react'; 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer/MapContainer.jsx';
import {Link} from 'react-router-dom';

export class ModalCardInfo extends Component { 
	render () { 
		console.log(this.props.fishies)

		const filteredList = this.props.fishies.filter(fish => fish.nameEng === this.props.match.params.name);
		const fish = filteredList[0];

		return( 


			<> 
				<nav className="navbar navbar-light bg-light"> 
				<a className="navbar-brand" href="/">OpenFish</a>
				<a className="navbar-brand" target="_blank" href="https://moisnasti.ru">Магазин снастей</a>
				<a className="navbar-brand" target="_blank" href="mailto:fish.app@mail.ru">F.A.Q.</a>
				<a className="navbar-brand" target="_blank" href="https://vk.com/im?media=&sel=-174624372">Support</a>
				</nav> 

				<div className="jumbotron">
					<div className="row">
						<div className="col-md-6">
							<h2 className="card-name">Назавние: {fish.name}</h2> 
							<p className="card-mediumWeight">Средний вес: {fish.mediumWeight}кг</p> 
							<p className="card-mediumLenght">Средняя длинна: {fish.mediumLenght}см</p> 
							<p className="card-hunter">{fish.hunter}</p> 
							<p className="card-lakes">Обитает в озерах{fish.lakes}</p> 
							<p className="card-river">Обитает в реках{fish.river}</p> 
							<p className="card-maxDepth">Максимальная глубина: {fish.maxDepth}м</p> 
							<p className="card-minDepth">Минимальная глубина: {fish.minDepth}м</p> 
							<p className="card-rare">Не редкая{fish.rare}</p> 
							<img src={fish.img}  style={{width: '325px'}}/> 
						</div>
						<div className="col-md-6">
							<MapContainer lat={fish.lat} lng={fish.lng}/>
						</div>
					</div>
					
				</div> 

					
				
							
			</> 
			) 
	}	
}

export default ModalCardInfo;

