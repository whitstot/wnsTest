import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Opener.css';


export default class Element extends Component {
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
			<div className="opener">
				
			</div>
		)
	} 
}