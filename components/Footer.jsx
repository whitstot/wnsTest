import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Footer.css';


export default class Footer extends Component {
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
			<div className="footerWrapper">
				<div className="footerBorder"></div>
				<div className="footer">
					WhitStot Studios
				</div>
			</div>
		)
	} 
}