import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

import '../css/Resume.css';


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {

	}
	render() {
		return (
			<div>
                <img src="../images/ResumeSimple.jpg"/>
			</div>
		)
	} 
}