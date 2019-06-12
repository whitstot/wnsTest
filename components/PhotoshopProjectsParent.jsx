import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

import PhotoshopProjects from './PhotoshopProjects.jsx';
import PhotoOpened from './PhotoOpened.jsx';


export default class PhotoshopProjectsParent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			componentToRender: this.props.pageToRender
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidUpdate() {
		this.pushHistory()
	}
	pushHistory() {
		if (this.state.componentToRender !== 'photoshop') {
			window.history.pushState('photoshop', 'photoshop', './');
		}
	}
	renderNewComponent(component) {
		this.setState({
			componentToRender: component
		})
	}
	componentWillReceiveProps() {


		// TO DO:   
		//		
		//			Write if else statement for this so it doesn't
		//			switch components on the resize
		//						OR
		//			figure out another solution
		//			might have to do with the parent component


		this.setState({
			componentToRender: this.props.pageToRender
		})
	}
	render() {
		return (
			<div>
				{this.state.componentToRender === 'photoshop' &&
					<PhotoshopProjects renderNewComponent={(component) => {this.renderNewComponent(component)}} />
				}
				{this.state.componentToRender !== 'photoshop' &&
					<PhotoOpened photo={this.state.componentToRender} renderNewComponent={this.renderNewComponent.bind(this, '')} />
				}
			</div>
		)
	} 
}