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
			imgClass: 'imgResume',
			imgClass2: 'imgResume2'
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
				imgClass: 'imgResume comeIn scale',
				imgClass2: 'imgResume2 comeIn'
			})
		}, 1000)

		//this is only here because theres for some reason an excessive amount of scrolling after the transition, and this fixes it? It's like its hanging on to where the photo was before the transition
		window.setTimeout(() => {
			this.refs['imageWrapper'].style.height = "100%";
		}, 2000)
	}
	render() {
		return (
			<div className="resumeWrapper">
                <div ref={(eref) => {this.refs['imageWrapper'] = findDOMNode(eref)}} className="imagesWrapper">
	                <a className="resumeLeft" href="../images/ResumeLinkedInWebsite.jpg" target="_blank">
	                	<img className={this.state.imgClass} src="../images/ResumeLinkedInWebsite.jpg"/>
	                </a>
	                <div className="resumeRight">
	                	<img className={this.state.imgClass2} src="../images/ResumeLinkedInWebsite.jpg"/>
	                </div>
	            </div>

                <Footer />
			</div>
		)
	} 
}












