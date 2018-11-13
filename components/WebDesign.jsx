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
			webParagraph2Class: 'webParagraph2'
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		window.setTimeout(()=>{
			this.setState({
				webParagraphClass: 'webParagraph comeIn',
				webParagraph2Class: 'webParagraph2 comeIn'
			})
		}, 20);
	}
	render() {
		return (
			<div>
                <div ref={(eref) => {this.refs['paragraph'] = findDOMNode(eref)}} className="rainbow">
                    <div className={this.state.webParagraphClass}>
                        WELL, YOU'RE LOOKING<br/> AT IT.
                    </div>
                    <div className="webParagraph2wrap">
	                    <div className={this.state.webParagraph2Class}>Right now, I am a Front-End Web Developer at The Chickasaw Nation. If you're wanting a small website done, contact me under the contact tab!
	                    </div>
	                </div>
                </div>
			</div>
		)
	} 
}