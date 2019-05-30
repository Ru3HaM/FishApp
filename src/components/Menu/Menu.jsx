import React, { Component } from 'react';
import ModalCard from '../ModalCard/ModalCard.jsx'
import photo from '../../assets/styles/main-photo.jpg'

export default class Menu extends Component {
	render () {

		console.log(this.props.fishies)

		const FishList = this.props.fishies.map((fish, index) => {
			return (
				<div className="col-md-6"> 
					 <ModalCard key={index} data={fish}/>
				</div>
			)
		})

		return(
			<>
			    <nav className="navbar navbar-light bg-light">
				  <a className="navbar-brand" href="#">OpenFish</a>
				  <a className="navbar-brand" target="_blank" href="https://moisnasti.ru">Магазин снастей</a>
				  <a className="navbar-brand" target="_blank" href="mailto:dudko.dan@yandex.ru">F.A.Q.</a>
				  <a className="navbar-brand" target="_blank" href="https://vk.com/im?media=&sel=-174624372">Support</a>
				</nav>
				
				<div className="jumbotron">
					<div className="">
		
					</div>
					<div className="bg">
					</div>
  						<h1 className="display-4">Привет, рыбак!</h1>
  						<p className="lead">Здесь ты можешь найти рыбу мечты и посмотреть где она ловится!</p>
  					<hr className="my-4"/>
  						<p>Здесь указанны рыбы которые можно поймать в лен области!</p>
				</div>

				<div className="container">
					<div className="row"> 
							{FishList}
					</div>
				</div>
			</>	
			)
	}
}