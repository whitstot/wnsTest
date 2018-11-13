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
		this.quote = "Whitney Stotler"
		this.string = this.quote.split('')

		this.animate();
	}
	animate() {
		if (this.string.length > 0) {
			this.refs['myName'].innerHTML += this.string.shift();
			window.setTimeout(() => {
				window.requestAnimationFrame(this.animate.bind(this));
			}, 20)
		}
	}
	render() {
		return (
			<div className="webParagraphWrapper">
				<div ref={(eref) => {this.refs['myName'] = findDOMNode(eref)}} className="webParagraph"></div>
			</div>
		)
	} 
}