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

		/* if (mobile) {
			document.getElementById('photoHolder').style.backgroundImage = "url('./images/AdaCrop.jpg')";
		}
		*/
	}
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="elementsWrapper" style={{...styles.elementsWrapper, top: '0px'}}>
				<div id="photoHolder" style={{...styles.photoHolder, backgroundImage: "url('../images/Ada.jpg')"}}>
					<div style={styles.menu} id="menu">
						<div style={styles.titleText}>What are you here for?</div>
						<div style={styles.buttonHome}>Graphic Design</div>
						<div style={styles.buttonHome}>Wedding Videography</div>
						<div style={styles.buttonHome}>Web Development</div>
						<div style={styles.buttonHome}>Book our Worship Band</div>
						<div style={{...styles.buttonHome, ...styles.lastButton}}>About Me</div>
					</div>
				</div>
			</div>
		)
	} 
}

var styles = {
	elementsWrapper: {
		display: 'flex',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	photoHolder: {
		height: '100%',
		width: '100%',
		backgroundSize: 'cover',
    	backgroundPosition: '50%',
    	backgroundRepeat: 'no-repeat'
	},
	menu: {
		position: 'absolute',
		top: '17%',
		left: '10%',
		height: '70%',
		width: '35%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.3)',
		borderRadius: '4%',
		padding: '5px'
	},	
	buttonHome: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '15%',
		width: '80%',
		borderBottom: '2px solid white',
		fontFamily: "'Lobster', cursive",
		color: 'white',
		fontSize: 'x-large'
	},
	lastButton: {
		borderBottom: '0px',
	},
	titleText: {
		fontFamily: "'Abel', sans-serif",
		fontSize: 'xx-large',
		color: 'lightcoral'
	}
}