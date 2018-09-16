import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

import PhotoshopProjects from './PhotoshopProjects.jsx';
import PhotoOpened from './PhotoOpened.jsx';


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.state = {
			componentToRender: 'photoshopProjects'
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	renderNewComponent(component) {
		this.setState({
			componentToRender: component
		})
	}
	render() {
		return (
			<div>
				{this.state.componentToRender === 'photoshopProjects' &&
					<PhotoshopProjects renderNewComponent={(component) => {this.renderNewComponent(component)}} />
				}
				{this.state.componentToRender !== 'photoshopProjects' &&
					<PhotoOpened photo={this.state.componentToRender} renderNewComponent={this.renderNewComponent.bind(this, '')} />
				}
			</div>
		)
	} 
}