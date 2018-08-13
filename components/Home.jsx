import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/index.css';
import '../css/Home.css';
import PhotoshopProjects from './PhotoshopProjects.jsx';		//Photoshop Projects
import Videography from './Videography.jsx';
import WebDesign from './WebDesign.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';


export default class Element extends Component {
	constructor(props) {
		super(props);

	/* 	photoshop
		videography
		webDesign
		about
		contact   */

		this.state = {
			componentToRender: 'photoshop'
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	renderNewComponent(component) {
		this.setState({
			componentToRender: component
		})
		this.closeMenu();
	}
	toggleMenu() {
		$(this.refs['dropDownMenu']).toggleClass('dropDownMenuOpen');
	}
	closeMenu() {
		this.refs['dropDownMenu'].classList.remove('dropDownMenuOpen');
	}
	render() {
		console.log('rendered')
		return (
			<div>
				<div className="wrapper">
					<a>
						<img className="logo" src="../images/myLogo.jpg" alt=""/>
					</a>
					<div className="menu">
						<div onClick={this.renderNewComponent.bind(this, 'photoshop')} className="graphic menuItem"> Photoshop Projects </div>
						<div> | </div>
						<div onClick={this.renderNewComponent.bind(this,'videography')} className="menuItem"> Videography </div>
						<div> | </div>
						<div onClick={this.renderNewComponent.bind(this,'webDesign')} className="menuItem"> Web Design </div>
						<div> | </div>
						<div onClick={this.renderNewComponent.bind(this,'about')} className="menuItem"> About Me </div>
						<div> | </div>
						<div onClick={this.renderNewComponent.bind(this,'contact')} className="contact menuItem"> Contact </div>
					</div>
					
					<div onClick={this.toggleMenu.bind(this)} className="menuMobile">
						<div className="menuBar1"> </div>
						<div className="menuBar2"> </div>
						<div className="menuBar3"> </div>
					</div>
				</div>

				<div ref={eref => {this.refs['dropDownMenu'] = findDOMNode(eref)}} className="dropDownMenu">
					<div onClick={this.closeMenu.bind(this)} className="esc"> X </div>
					<div onClick={this.renderNewComponent.bind(this, 'photoshop')} className="mobileMenuItem topMobileMenuItem"> Photoshop Projects </div>
					<div onClick={this.renderNewComponent.bind(this,'videography')} className="mobileMenuItem"> Videography </div>
					<div onClick={this.renderNewComponent.bind(this,'webDesign')} className="mobileMenuItem"> Web Design </div>
					<div onClick={this.renderNewComponent.bind(this,'about')} className="mobileMenuItem"> About Me </div>
					<div onClick={this.renderNewComponent.bind(this,'contact')} className="mobileMenuItem"> Contact </div>
				</div>

				{this.state.componentToRender === 'photoshop' &&
					<PhotoshopProjects />
				}
				{this.state.componentToRender === 'videography' &&
					<Videography />
				}
				{this.state.componentToRender === 'webDesign' &&
					<WebDesign />
				}
				{this.state.componentToRender === 'about' &&
					<About />
				}
				{this.state.componentToRender === 'contact' &&
					<Contact />
				}
			</div>
		)
	} 
}








