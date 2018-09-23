import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/PhotoOpened.css';


export default class PhotoOpened extends Component {
	constructor(props) {
		super(props);

		this.photoArray = [
			'worldRace', 
			'kimmiLion', 
			'thunderCoffee', 
			'jade', 
			'whitsFlowerFarm', 
			'meFlowerFace', 
			'MAC', 
			'mountains'
		];	

		this.state = {
			imageToRender: this.props.photo,
			portrait: window.matchMedia("(orientation: portrait)").matches
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		this.setPhotoDimensions();
		window.addEventListener('resize', this.setPhotoDimensions.bind(this))
		window.addEventListener("orientationchange", this.setPhotoDimensions.bind(this));
	}
	componentDidUpdate() {
		this.setPhotoDimensions();
	}
	setPhotoDimensions() {
		let mediaQueryList = window.matchMedia("(orientation: portrait)"),
			el = this.refs['img'];

		if (mediaQueryList.matches) {
			//setting width for portrait view
			let widthToSet = window.innerWidth / 2.3;
			el.setAttribute('width', widthToSet);
			el.removeAttribute('height');
		}
		else {
			//setting the height attribute for landscape view
			let	heightToSet = window.innerHeight / 1.27;
			el.setAttribute('height', heightToSet);
			el.removeAttribute('width');
		}
		//if the orientation changes this will update the state
		if (mediaQueryList.matches !== this.state.portrait) {
			this.setState({
				portrait: mediaQueryList.matches
			})
		}
	}
	rightArrowClicked() {
		let imageIndex = this.photoArray.indexOf(this.state.imageToRender);

		if ((this.photoArray.length - 1) !== imageIndex) {
			let num = imageIndex + 1;
			this.setState({
				imageToRender: this.photoArray[num]
			})
		}
		else {
			this.setState({
				imageToRender: this.photoArray[0]
			})
		}
	}
	leftArrowClicked() {
		let imageIndex = this.photoArray.indexOf(this.state.imageToRender);

		if (imageIndex !== 0) {
			let num = imageIndex - 1;
			this.setState({
				imageToRender: this.photoArray[num]
			})
		}
		else {
			let num = this.photoArray.length - 1;
			this.setState({
				imageToRender: this.photoArray[num]
			})
		}
	}
	render() {
		return (
			<div className="imgWrapper">

				{this.state.portrait === false &&
					<div onClick={this.leftArrowClicked.bind(this)} className="arrows">&#60;</div>
				}
				{this.state.imageToRender === 'worldRace' &&
					<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/worldRace.jpg" alt=""/>
				}
				{this.state.imageToRender === 'kimmiLion' &&
					<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/KimmiLionBrown.jpg" alt=""/>
				}
				{this.state.imageToRender === 'thunderCoffee' &&
					<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/thunderCoffee.jpg" alt=""/>
				}
				{this.state.imageToRender === 'jade' &&
					<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/jadeExplosionFinished.jpg" alt=""/>
				}
				{this.state.imageToRender === 'whitsFlowerFarm' &&
					<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/whitsFlowerFarm.jpg" alt=""/>
				}
				{this.state.imageToRender === 'meFlowerFace' &&
					<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/meFlowerFace.jpg" alt=""/>
				}
				{this.state.imageToRender === 'MAC' &&
					<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/MAC2myselfBlue.jpg" alt=""/>
				}
				{this.state.imageToRender === 'mountains' &&
					<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/twinPeaks.jpg" alt=""/>
				}	
				{this.state.portrait === false &&
					<div onClick={this.rightArrowClicked.bind(this)} className="arrows">&#62;</div>
				}
				
			</div>
		)
	} 
}