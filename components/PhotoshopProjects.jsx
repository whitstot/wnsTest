import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/PhotoshopProjects.css';


export default class PhotoshopProjects extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		
	}
	render() {
		return (
			<div className="grid">
				<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'worldRace')} src="../images/worldRace.jpg" alt=""/>
				<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'kimmiLion')} src="../images/KimmiLionBrown.jpg" alt=""/>
				<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'thunderCoffee')} src="../images/thunderCoffeeSquare.jpg" alt=""/>
				<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'jade')} src="../images/jadeExplosionFinishedSquare1.jpg" alt=""/>
				<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitsFlowerFarm')} src="../images/whitsFlowerFarmSquare.jpg" alt=""/>
				<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'meFlowerFace')} src="../images/meFlowerFace.jpg" alt=""/>
				<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'MAC')} src="../images/MAC2myselfBlue.jpg" alt=""/>
				<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'mountains')} src="../images/twinPeaks.jpg" alt=""/>
			</div>
		)
	} 
}