import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Opener.css';
import Home from './Home.jsx';
import '../css/Loading.css';

var Preload = require('react-preload').Preload;
var loadingIndicator = (<div className="rainbowLoading">Loading...</div>);
var images = [];


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.boundOpenerPopHistory = this.openerPopHistory.bind(this);
		this.boundSetPhotoHeight = this.setPhotoHeight.bind(this);

		this.state = {
			componentToRender: 'opener',
			portrait: window.matchMedia("(orientation: portrait)").matches
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.boundSetPhotoHeight)
	}
	componentDidMount() {
		window.addEventListener('resize', this.boundSetPhotoHeight)

		window.onunload = function(){
    		console.log("unload event detected!");
		}
	}
	openerPopHistory() {
		this.setState({
			componentToRender: 'home'
		})
	}
	componentDidUpdate() {
		if (this.state.componentToRender === 'opener') {
			window.addEventListener('popstate', this.boundOpenerPopHistory)
		}
		else {
			window.removeEventListener('popstate', this.boundOpenerPopHistory)
		}
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
			<Preload
			    loadingIndicator={loadingIndicator}
			    images={images}
			    autoResolveDelay={30}
			    onError={console.warn('Error in Vidography.jsx Preload')}
			    onSuccess={console.log('Success!')}
			    resolveOnError={true}
			    mountChildren={true}
			>

				{(this.state.portrait === false && this.state.componentToRender === 'opener') &&
					<img className="openerImage" src='../images/websiteOpener.jpg'/>
				}

				{(this.state.portrait === true && this.state.componentToRender === 'opener') &&
					<img className="openerImage" src='../images/websiteOpenerPortrait.jpg'/>
				}
			</Preload>

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






