import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

import '../css/WebDesign.css';


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.state = {
			webParagraphClass: 'webParagraph',
			webImgClass: 'webImage'
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		window.setTimeout(()=>{
			this.setState({
				webParagraphClass: 'webParagraph comeIn',
				webImgClass: 'webImage comeIn'
			})
		}, 20);
	}
	render() {
		return (
			<div>
                <div ref={(eref) => {this.refs['paragraph'] = findDOMNode(eref)}} className="rainbow">
                    <div className={this.state.webParagraphClass}>
                        WELL, YOU'RE LOOKING<br/> AT IT
                    </div>
                    <img className={this.state.webImgClass} src="../images/MeCali.jpg" alt=""/>
                </div>
			</div>
		)
	} 
}