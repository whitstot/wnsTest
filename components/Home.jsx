import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/index.css';
import '../css/Home.css';
import GraphicDesign from './GraphicDesign.jsx';


export default class Element extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		
	}
	openMenu() {
		this.refs['dropDownMenu'].classList.add('mobileMenuOpen');
	}
	closeMenu() {
		this.refs['dropDownMenu'].classList.remove('mobileMenuOpen');
	}
	render() {
		return (
			<div>
				<div className="wrapper">
					<a>
						<img className="logo" src="../images/myLogo.jpg" alt=""/>
					</a>
					<div className="menu">
						<div className="graphic menuItem"> Photoshop Projects </div>
						<div> | </div>
						<div className="menuItem"> Videography </div>
						<div> | </div>
						<div className="menuItem"> Web Design </div>
						<div> | </div>
						<div className="menuItem"> About Me </div>
						<div> | </div>
						<div className="contact menuItem"> Contact </div>
					</div>
					<div onClick={this.openMenu.bind(this)} className="menuMobile">
						<div className="menuBar1"> </div>
						<div className="menuBar2"> </div>
						<div className="menuBar3"> </div>
					</div>
				</div>
				<div ref={eref => {this.refs['dropDownMenu'] = findDOMNode(eref)}} className="dropDownMenu">
					<div onClick={this.closeMenu.bind(this)} className="esc"> x </div>
					<div className="mobileMenuItem topMobileMenuItem"> Photoshop Projects </div>
					<div className="mobileMenuItem"> Videography </div>
					<div className="mobileMenuItem"> Web Design </div>
					<div className="mobileMenuItem"> About Me </div>
					<div className="mobileMenuItem"> Contact </div>
				</div>
				<GraphicDesign />
			</div>
		)
	} 
}








