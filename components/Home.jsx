import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/index.css';
import '../css/Home.css';
import PhotoshopProjectsParent from './PhotoshopProjectsParent.jsx';		//Photoshop Projects
import Videography from './Videography.jsx';
import WebDesign from './WebDesign.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';


export default class Home extends Component {
	constructor(props) {
		super(props);

		//we have to do this to be able to remove the event listener
		//every time you bind the function, you get a new one back
		//so we are essentially removing a different function 
		//unless we do it like this
		this.boundPopHistory = this.popHistory.bind(this);

	/* 	photoshop
		videography
		webDesign
		about
		contact 
		resume
		  */

		this.state = {
			componentToRender: 'photoshop',
			photoshop: 'graphic menuItem tabSelected',
			videography: 'menuItem',
			webDesign: 'menuItem', 
			about: 'menuItem', 
			resume: 'menuItem',
			contact: 'menuItem contact'
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentWillUnmount() {
		window.removeEventListener('popstate', this.boundPopHistory)
	}
	componentDidMount() {
		window.addEventListener('popstate', this.boundPopHistory);
		this.pushHistory();
	}
	componentDidUpdate() {
		this.pushHistory()
	}
	popHistory() {
		if (window.history.state !== null) {
			//all this is just to set the tab color pink by setting the state to the correct class name
			let currentComponent = this.state.componentToRender,
				newComponent = window.history.state,
				currentComponentClass = this.state[currentComponent],
				newComponentClass = this.state[newComponent];

			currentComponentClass = currentComponentClass.split(' tabSelected')[0];
			newComponentClass = newComponentClass + ' tabSelected';

			this.setState({
				'componentToRender': window.history.state,
				[currentComponent]: currentComponentClass,
				[newComponent]: newComponentClass
			})
		}
		else {
			window.removeEventListener('popstate', this.boundPopHistory);
			this.goToOpener();
		}
	}
	pushHistory() {
		if (window.history.state !== this.state.componentToRender) {
			window.history.pushState(this.state.componentToRender, this.state.componentToRender, './');
		}
	}
	renderNewComponent(newComponent) {
		//all this is just to set the tab color pink by setting the state to the correct class name
		let currentComponent = this.state.componentToRender,
			currentComponentClass = this.state[currentComponent],
			newComponentClass = this.state[newComponent];

		currentComponentClass = currentComponentClass.split(' tabSelected')[0];
		newComponentClass = newComponentClass + ' tabSelected';

		this.setState({
			'componentToRender': newComponent,
			[currentComponent]: currentComponentClass,
			[newComponent]: newComponentClass
		})

		this.closeMenu();
	}
	toggleMenu() {
		$(this.refs['dropDownMenu']).toggleClass('dropDownMenuOpen');
	}
	closeMenu() {
		this.refs['dropDownMenu'].classList.remove('dropDownMenuOpen');
	}
	goToOpener() {
		window.removeEventListener('popstate', this.boundPopHistory);
		this.props.changeToOpener();
	}
	render() {
		return (
			<div style={{backgroundColor: 'ghostwhite'}}>
				<div className="wrapper">

					<img onClick={this.goToOpener.bind(this)} className="logo" src="../images/myLogo.jpg" alt=""/>

					<div className="menu">
						<div 
							ref={(eref) => {this.refs['photoshop'] = findDOMNode(eref)}} 
							onClick={this.renderNewComponent.bind(this, 'photoshop')} 
							className={this.state.photoshop}> 
								Graphics 
						</div>
						<div> | </div>
						<div 
							ref={(eref) => {this.refs['videography'] = findDOMNode(eref)}} 
							onClick={this.renderNewComponent.bind(this,'videography')} 
							className={this.state.videography}> 
								Videography 
						</div>
						<div> | </div>
						<div 
							ref={(eref) => {this.refs['webDesign'] = findDOMNode(eref)}} 
							onClick={this.renderNewComponent.bind(this,'webDesign')} 
							className={this.state.webDesign}> 
								Web Design 
						</div>
						<div> | </div>
						<div 
							ref={(eref) => {this.refs['about'] = findDOMNode(eref)}} 
							onClick={this.renderNewComponent.bind(this,'about')} 
							className={this.state.about}> 
								About Me 
						</div>
						<div> | </div>
						<div 
							ref={(eref) => {this.refs['resume'] = findDOMNode(eref)}} 
							onClick={this.renderNewComponent.bind(this,'resume')} 
							className={this.state.resume}> 
								Resume
						</div>
						<div> | </div>
						<div 
							ref={(eref) => {this.refs['contact'] = findDOMNode(eref)}} 
							onClick={this.renderNewComponent.bind(this,'contact')} 
							className={this.state.contact}> 
								Contact 
						</div>
					</div>
					
					<div onClick={this.toggleMenu.bind(this)} className="menuMobile">
						<div className="menuBar1"> </div>
						<div className="menuBar2"> </div>
						<div className="menuBar3"> </div>
					</div>
				</div>

				<div ref={eref => {this.refs['dropDownMenu'] = findDOMNode(eref)}} className="dropDownMenu">
					<div onClick={this.closeMenu.bind(this)} className="esc"> × </div>
					<div onClick={this.renderNewComponent.bind(this, 'photoshop')} className="mobileMenuItem topMobileMenuItem"> Graphics </div>
					<div onClick={this.renderNewComponent.bind(this,'videography')} className="mobileMenuItem"> Videography </div>
					<div onClick={this.renderNewComponent.bind(this,'webDesign')} className="mobileMenuItem"> Web Design </div>
					<div onClick={this.renderNewComponent.bind(this,'about')} className="mobileMenuItem"> About Me </div>
					<div onClick={this.renderNewComponent.bind(this,'resume')} className="mobileMenuItem"> Resume </div>
					<div onClick={this.renderNewComponent.bind(this,'contact')} className="mobileMenuItem"> Contact </div>
				</div>

				{this.state.componentToRender === 'photoshop' &&
					<PhotoshopProjectsParent pageToRender={this.state.componentToRender}/>
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
				{this.state.componentToRender === 'resume' &&
					<Resume />
				}
				{this.state.componentToRender === 'contact' &&
					<Contact />
				}
			</div>
		)
	} 
}








