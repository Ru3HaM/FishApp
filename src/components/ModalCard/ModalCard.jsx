import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ModalCardInfo from '../ModalCardInfo/ModalCardInfo.jsx'

export default class ModalCard extends Component {
	render () {
		return(
				<div className="card" style={{width: '550px', height: '270px'}}>
					<div className="card-body">
						<h2 className="card-title">{this.props.data.name}</h2>
						<p className="card-text" style={{width: '20%'}}>Хищник{this.props.data.hunter}</p>
						
						<Link to={`/fish/${this.props.data.nameEng}`} className="btn btn-primary" style={{marginRight: '55px'}}>Подробнее?</Link>
						<img src={this.props.data.img} style={{width: '300px'}}/> 
					</div>
				</div>
			)
	}
}