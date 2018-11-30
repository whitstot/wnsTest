import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Contact.css';


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.state = {
			class: 'contactWrapper',
			portrait: window.matchMedia("(orientation: portrait)").matches
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		window.setTimeout(()=>{
			this.setState({
				class: 'contactWrapper bringMeIn'
			})
		}, 20);
		window.addEventListener('resize', this.checkMobile.bind(this))
	}
	checkMobile() {
		let windowWidth = window.innerWidth,
			portrait = this.state.portrait;

		this.refs['background'].style.height = window.innerHeight;

		if (windowWidth <= 1050) {
			portrait = true;
		}
		else if (windowWidth > 1050) {
			portrait = false;
		}
		if (portrait !== this.state.portrait) {
			this.setState({
				portrait: portrait
			})
		}
	}
	render() {
		return (
			<div className="emailMe" ref={(eref) => {this.refs['background'] = findDOMNode(eref)}} style={{height: window.innerHeight + 'px'}}>
				<a className="emailMeHref" href="mailto:whitneynstotler@gmail.com?Subject=Let's%20Chat"> EMAIL ME</a>
			</div>
		)
	} 
}









