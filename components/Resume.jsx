import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Resume.css';
import Footer from './Footer.jsx';

export default class Element extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imgClass: 'imgResume'
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		window.setTimeout(() => {
			this.setState({
				imgClass: 'imgResume comeIn'
			})
		}, 20)
		window.setTimeout(() => {
			this.setState({
				imgClass: 'imgResume comeIn scale'
			})
		}, 1000)

		//this is only here because theres for some reason an excessive amount of scrolling after the transition, and this fixes it?
		window.setTimeout(() => {
			this.refs['resumeWrapper'].style.height = "100%"
		}, 1020)
	}
	render() {
		return (
			<div ref={(eref) => {this.refs['resumeWrapper'] = findDOMNode(eref)}} className="resumeWrapper">
                <a href="../images/ResumeSimpleWebsite.jpg" target="_blank">
                	<img className={this.state.imgClass} src="../images/ResumeSimpleWebsite.jpg"/>
                </a>

                <Footer />
			</div>
		)
	} 
}