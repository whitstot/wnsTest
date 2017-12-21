import React, { Component } from 'react';
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
		console.log(findDOMNode(this.refs[0]));

		//setting the wrapper height to a fixed height so the picture will be centered
		let windowHeight = window.innerHeight,
			wrapper = findDOMNode(this.refs[0]),
			me = findDOMNode(this.refs[1]);

		wrapper.style.height = windowHeight + 'px';

		//to animate the photo on first load - need a timeout?
		//me.style.bottom = '';
	}
	render() {
		return (
			<div className='wrapper' ref={eref => {this.refs[0] = findDOMNode(eref)}} style={{...styles.wrapper, height: '100%'}}>
				<img src="../images/blurryPinkMountains.jpg" alt="Background Mountains" style={styles.mountains}></img>
				<img src="../images/myself.jpg" ref={eref => {this.refs[1] = findDOMNode(eref)}} alt="Myself" style={{...styles.myself}}></img>
			</div>
		)
	}
}

var styles = {
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	},
	mountains: {
		top: '0px',
		position: 'fixed',
		height: '100%',
		width: '100%'
	},
	myself: {
		position: 'relative',
		height: '300px',
		width: '300px',
		border: '3px solid white',
		borderRadius: '100%',
		transition: 'all .3s ease-out'
	}
}