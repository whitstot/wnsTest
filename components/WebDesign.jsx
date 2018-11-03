import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

import '../css/WebDesign.css';


export default class Element extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		this.quote = "Well you're looking at it! If you like what you see, we can talk business! I'm currently contracting out of the Chickasaw Nation as a Front-End Web Developer. My contract is actually up at the end of 2018. If you're looking for your website to be handled or created, I might be your girl."
		this.string = this.quote.split('')

		this.animate();
	}
	animate() {
		if (this.string.length > 0) {
			this.refs['paragraph'].innerHTML += this.string.shift();
			window.setTimeout(() => {
				window.requestAnimationFrame(this.animate.bind(this));
			}, 20)
		}
	}
	render() {
		return (
			<div className="webParagraphWrapper">
				<div ref={(eref) => {this.refs['paragraph'] = findDOMNode(eref)}} className="webParagraph"></div>
			</div>
		)
	} 
}