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
						<a ref={(eref) => { 
							this.refs['graphicDesign'] = findDOMNode(eref) 
						}} 
						onMouseOver={() => { 
							this.refs['graphicDesign'].style.transition = 'color 0.1s ease';
							this.refs['graphicDesign'].style.color = 'powderblue';
						}} 
						onMouseLeave={() => { 
							this.refs['graphicDesign'].style.color = 'white';
						}}
						style={styles.buttonHome}> 
							Graphic Design
						</a>

						<a
						ref={(eref) => { 
							this.refs['weddingVideo'] = findDOMNode(eref) 
						}} 
						onMouseOver={() => { 
							this.refs['weddingVideo'].style.transition = 'color 0.1s ease';
							this.refs['weddingVideo'].style.color = 'powderblue';
						}} 
						onMouseLeave={() => { 
							this.refs['weddingVideo'].style.color = 'white';
						}}
						style={styles.buttonHome}>
							Wedding Videography
						</a>

						<a 
						ref={(eref) => { 
							this.refs['webDev'] = findDOMNode(eref) 
						}} 
						onMouseOver={() => { 
							this.refs['webDev'].style.transition = 'color 0.1s ease';
							this.refs['webDev'].style.color = 'powderblue';
						}} 
						onMouseLeave={() => { 
							this.refs['webDev'].style.color = 'white';
						}}
						style={styles.buttonHome}>
							Web Development
						</a>

						<a 
						ref={(eref) => { 
							this.refs['worship'] = findDOMNode(eref) 
						}} 
						onMouseOver={() => { 
							this.refs['worship'].style.transition = 'color 0.1s ease';
							this.refs['worship'].style.color = 'powderblue';
						}} 
						onMouseLeave={() => { 
							this.refs['worship'].style.color = 'white';
						}}
						style={styles.buttonHome}>
							Book our Worship Band
						</a>

						<a 
						ref={(eref) => { 
							this.refs['aboutMe'] = findDOMNode(eref) 
						}} 
						onMouseOver={() => { 
							this.refs['aboutMe'].style.transition = 'color 0.1s ease';
							this.refs['aboutMe'].style.color = 'powderblue';
						}} 
						onMouseLeave={() => { 
							this.refs['aboutMe'].style.color = 'white';
						}}
						style={{...styles.buttonHome, ...styles.lastButton}}>
							About Me
						</a>
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
		left: '23%',
		height: '70%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.3)',
		borderRadius: '4%',
		padding: '5px',
		cursor: 'pointer'
	},	
	buttonHome: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '15%',
		borderBottom: '2px solid white',
		fontFamily: "'Lobster', cursive",
		color: 'white',
		fontSize: 'x-large',
		cursor: 'pointer'
	},
	lastButton: {
		borderBottom: '0px',
	}
}