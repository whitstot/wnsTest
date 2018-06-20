import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';


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
			<div>
				<img src="../images/Ada.jpg" alt='' />
			</div>
		)
	} 
}