import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/About.css';
import Footer from './Footer.jsx';


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.boundSetPhotoDimensions = this.setPhotoDimensions.bind(this);

		this.state = {
			portrait: window.matchMedia("(orientation: portrait)").matches,
			pictureClass: 'aboutImg',
			section1Class: 'section1',
			section2Class: 'section2',
			section3Class: 'section3'
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.boundSetPhotoDimensions)
		window.removeEventListener('orientationchange', this.boundSetPhotoDimensions)
	}
	componentDidMount() {
		this.setPhotoDimensions();
		window.addEventListener('resize', this.boundSetPhotoDimensions)
		window.addEventListener("orientationchange", this.boundSetPhotoDimensions);

		window.setTimeout(()=>{
			this.setState({
				pictureClass: 'aboutImg grow',
				section1Class: 'section1 comeIn',
				section2Class: 'section2 comeIn',
				section3Class: 'section3 comeIn'
			})
		}, 20);
	}
	setPhotoDimensions() {
		let el = this.refs['me'],
			windowHeightToCompare = window.innerHeight + 400,			//might still need in the future so leaving it here
			windowWidth = window.innerWidth,
			windowHeight = window.innerHeight,
			portrait = this.state.portrait;

		//if ((mediaQueryList.matches === true) || (windowHeightToCompare > window.innerWidth)) {
		if(windowWidth <= 1120){
			//setting width for portrait view
			let widthToSet = window.innerWidth / 2.3;
			el.setAttribute('width', widthToSet);
			el.removeAttribute('height');
			portrait = true;
		}
		//else if(mediaQueryList.matches === false) {
		else if(windowWidth > 1120) {
			//setting the height attribute for landscape view
			let	heightToSet = window.innerHeight / 1.27;
			el.setAttribute('height', heightToSet);
			el.removeAttribute('width');
			portrait = false;
		}
		//if the orientation changes this will update the state
		if (portrait !== this.state.portrait) {
			this.setState({
				portrait: portrait
			})
		}
	}
	render() {
		return (
			<div>
				<div className="aboutWrapper">
					<img ref={(eref) => {this.refs['me'] = findDOMNode(eref)}} className={this.state.pictureClass} src="../images/myselfTall.jpg" />
					<div className="wrapperText">
						<div className={this.state.section1Class}>
							<center className="hi"> Hi! I'm </center>
							<center className="myName">Whitney Stotler</center>
							<p className="section1paragraph"> Welcome to my portfolio website! As you've noticed, I like to do a variety of things. If you want to look at my skill set, look at the resume tab. If you just want to know more about me, you came to the right place! The first thing you should know is--I love Jesus! I help out a lot at my church and lead worship around the state. In the past, I was one of the chaplains for the Ada High Basketball Girls and have been on staff at Camp WOW. I grew up a farm girl and family vacations were camping/riding trails in the Ouachita Mountains with our dirtbikes. In college I played basketball for Seminole State College and later on East Central University. Go Tigers! My favorite movie is Jurassic Park (Jurassic World doesn't compare, don't @ me). My favorite color is <del> food </del> pink. I love to sing, play my guitar, and I'm pretty obsessed with photoshop. 
							</p>
							<p className="section1paragraph">
								The past four years my life has been continually changing. I recognized my need for a savior on July 11, 2014, and my life did a 180˚. The Lord has been transforming my heart ever since. I have a heart for those who don't yet know Him and a deep desire to worship Him because of His goodness. In the past, I would use my singing for the glory of myself, but now I see Who deserves the praise. If you came to this site, you've seen me showcase some of my artwork and abilities, but I want to point you to Someone better. 
							</p>
						</div>
						<div className="section23wrapper">
							<div className={this.state.section2Class}>
								<div className="romansRoad"> Romans 3:23 - "For all have sinned and fall short of the glory of God" </div>
								<div className="romansRoad"> Romans 6:23 - "For the wages of sin is death, but the free gift of God is eternal life through Christ Jesus our Lord." </div>
								<div className="romansRoad"> Romans 5:8 - "But God showed His great love for us by sending His son to die for us WHILE WE WERE STILL SINNERS" </div>
								<div className="romansRoad"> Romans 10:9-10 - "If you confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved. For it is by believing in your heart that you are made right with God, and confessing with your mouth that you are saved."</div>
								<div className="romansRoad">Romans 10:13 - "For all who call on the name of the Lord will be saved." </div>
							</div>

							<div className={this.state.section3Class}>
								God knows we can never be fulfilled except through Him. He loved us enough to give us a way back to Him, despite our sinfullness and lack of holiness. He wanted us, yet didn't need us, and left the throne to come bring us back home. Child, you are loved. 
							</div>
						</div>
					</div>
				</div>
				
				<Footer />
			</div>
		)
	} 









}