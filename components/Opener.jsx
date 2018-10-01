import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Opener.css';
import Home from './Home.jsx';


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.state = {
			componentToRender: 'opener',
			portrait: window.matchMedia("(orientation: portrait)").matches
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		window.addEventListener('resize', this.setPhotoHeight.bind(this))
	}
	setPhotoHeight() {
		let portrait = this.state.portrait,
			windowWidth = window.innerWidth;

		if (windowWidth <= 1100) {
			portrait = true;
		}
		else {
			portrait = false;
		}

		//if the orientation changes this will update the state
		if (portrait !== this.state.portrait) {
			this.setState({
				portrait: portrait
			})
		}
	}
	changeComponentToHome() {
		$(this.refs['openerWrapper']).removeClass('opener');

		this.setState({
			componentToRender: 'home'
		})
	}
	changeComponentToOpener() {
		$(this.refs['openerWrapper']).addClass('opener');

		this.setState({
			componentToRender: 'opener'
		})
	}
	render() {
		return (
			<div ref={(eref) => {this.refs['openerWrapper'] = findDOMNode(eref)}} className="opener">
				{(this.state.portrait === false && this.state.componentToRender === 'opener') &&
					<img className="openerImage" src='../images/websiteOpenerGalaxy.jpg'/>
				}

				{(this.state.portrait === true && this.state.componentToRender === 'opener') &&
					<img className="openerImage" src='../images/websiteOpenerPortrait.jpg'/>
				}

				{this.state.componentToRender === 'opener' && 
					<center onClick={this.changeComponentToHome.bind(this)} className="enterSite">
						ENTER
						<br/>
						SITE
					</center>
				}

				{this.state.componentToRender === 'home' &&
					<Home changeToOpener={this.changeComponentToOpener.bind(this)}/>
				}
			</div>
		)
	} 










}