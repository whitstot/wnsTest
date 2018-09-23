import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/About.css';


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
	setPhotoDimensions() {
		let mediaQueryList = window.matchMedia("(orientation: portrait)"),
			el = this.refs['me'];

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
	render() {
		return (
			<div className="aboutWrapper">
				<img ref={(eref) => {this.refs['me'] = findDOMNode(eref)}} className="aboutImg" src="../images/myselfTall.jpg" alt=""/>
				<div className="wrapperText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		)
	} 
}