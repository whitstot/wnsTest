import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Videography.css';
import Footer from './Footer.jsx';


export default class Videography extends Component {
	constructor(props) {
		super(props);

		this.boundSetVideoDimensions = this.setVideoDimensions.bind(this);

		this.state = {
			portrait: window.matchMedia("(orientation: portrait)").matches
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.boundSetVideoDimensions)
	}
	componentDidMount() {
		this.setVideoDimensions('firstRun');

		window.setTimeout(() => {
			this.setVideoDimensions();
		}, 20)

		window.addEventListener('resize', this.boundSetVideoDimensions)
	}
	setVideoDimensions(e) {
		let windowWidth = window.innerWidth,
			portrait = this.state.portrait,
			widthToSet = 'unset',
			heightToSet = 'unset',
			heightForVimeoPortrait = 'unset';

		if (windowWidth <= 1050) {
			//portrait

			if (e !== 'firstRun') {
				heightForVimeoPortrait = parseFloat(getComputedStyle(this.refs['iframeShayna']).width) / 1.761049723756906 + 'px';
			}

			//set all the refs correctly
			this.refs['iframeRach'].style.width = widthToSet;
			this.refs['iframeDesirae'].style.width = widthToSet;
			this.refs['iframeMeagan'].style.width = widthToSet;
			this.refs['iframeShayna'].style.width = widthToSet;

			this.refs['iframeRach'].style.height = heightForVimeoPortrait;
			this.refs['iframeDesirae'].style.height = heightForVimeoPortrait;
			this.refs['iframeMeagan'].style.height = heightForVimeoPortrait;
			this.refs['iframeShayna'].style.height = heightForVimeoPortrait;

			// this.refs['descriptionRach'].style.width = widthToSet;
			// this.refs['descriptionDesirae'].style.width = widthToSet;
			// this.refs['descriptionMeagan'].style.width = widthToSet;
			// this.refs['descriptionShayna'].style.width = widthToSet;

			// this.refs['descriptionRach'].style.height = heightToSet;
			// this.refs['descriptionDesirae'].style.height = heightToSet;
			// this.refs['descriptionMeagan'].style.height = heightToSet;
			// this.refs['descriptionShayna'].style.height = heightToSet;

			portrait = true;
		}
		else if (windowWidth > 1050) {
			//landscape
			widthToSet = windowWidth / 2.994780793319415;
			heightToSet = widthToSet / 1.777365491651206;

			//set all the refs correctly
			this.refs['iframeRach'].style.width = widthToSet + 'px';
			this.refs['iframeDesirae'].style.width = widthToSet + 'px';
			this.refs['iframeMeagan'].style.width = widthToSet + 'px';
			this.refs['iframeShayna'].style.width = widthToSet + 'px';

			this.refs['iframeRach'].style.height = heightToSet + 'px';
			this.refs['iframeDesirae'].style.height = heightToSet + 'px';
			this.refs['iframeMeagan'].style.height = heightToSet + 'px';
			this.refs['iframeShayna'].style.height = heightToSet + 'px';

			// this.refs['descriptionRach'].style.width = widthToSet + 'px';
			// this.refs['descriptionDesirae'].style.width = widthToSet + 'px';
			// this.refs['descriptionMeagan'].style.width = widthToSet + 'px';
			// this.refs['descriptionShayna'].style.width = widthToSet + 'px';

			// this.refs['descriptionRach'].style.height = heightToSet + 'px';
			// this.refs['descriptionDesirae'].style.height = heightToSet + 'px';
			// this.refs['descriptionMeagan'].style.height = heightToSet + 'px';
			// this.refs['descriptionShayna'].style.height = heightToSet + 'px';

			/* -------------------------------------------------- */

			this.refs['me'].style.height = heightToSet + 'px'
			this.refs['me'].style.width = heightToSet + 'px'
			this.refs['josh'].style.height = heightToSet + 'px'
			this.refs['josh'].style.width = heightToSet + 'px'

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
				{this.state.portrait === false &&
					<video 
						style={{width: '100%', height: 'auto'}}
						src="../images/MeaganWeddingShorter.mp4" 
						type="video/mp4" 
						preload="true" 
						playsInline={true} 
						autoPlay={true} 
						loop={true}> 
					</video>
				}
					
				<div className="logoWrapper">
					<div className="JWFilms">
						JW Films
					</div>
					<div className="slogan">
						To live in those priceless moments, all over again. 
					</div>
				</div>

				<div className="breakers">
					Weddings :
				</div>

				<div className="weddingsParent">
					<div className="weddingsChild">
						<div className="videoWrapper">
							<iframe
								ref={(eref) => {this.refs['iframeRach'] = findDOMNode(eref)}}
								allowFullScreen="1" 
								allow="autoplay; encrypted-media"  
								frameBorder="0"
								src="https://www.youtube.com/embed/lQf5ixa_Jo0?&loop=1&mute=1">
							</iframe>
							<a  className="description" 
								ref={(eref) => {this.refs['descriptionRach'] = findDOMNode(eref)}}
								href="https://www.youtube.com/watch?v=lQf5ixa_Jo0&t=110s">
									Kyle and Rachael Kesler Wedding
							</a>
						</div>
						<div className="videoWrapper">
							<iframe
								ref={(eref) => {this.refs['iframeDesirae'] = findDOMNode(eref)}}
								allowFullScreen="1" 
								allow="autoplay; encrypted-media"  
								frameBorder="0"
								style={{width: "958px", height: "539px"}}
								src="https://www.youtube.com/embed/yefauMCc28g?&loop=1&mute=1">
							</iframe>
							<a  className="description"
								href="https://www.youtube.com/watch?v=yefauMCc28g&t=77s" 
								ref={(eref) => {this.refs['descriptionDesirae'] = findDOMNode(eref)}}>
									Trey and Desirae Richardson Wedding
							</a>
						</div>
					</div>

					<div className="weddingsChild">
						<div className="videoWrapper">
							<iframe
								ref={(eref) => {this.refs['iframeMeagan'] = findDOMNode(eref)}}
								allowFullScreen="1" 
								allow="autoplay; encrypted-media"  
								frameBorder="0"
								style={{width: "958px", height: "539px"}}
								src="https://www.youtube.com/embed/IIMdSrJvMVM?&loop=1&mute=1">
							</iframe>
							<a  className="description" 
								href="https://www.youtube.com/watch?v=IIMdSrJvMVM"
								ref={(eref) => {this.refs['descriptionMeagan'] = findDOMNode(eref)}}>
									David and Meagan Escobar Wedding
							</a>
						</div>
						<div className="videoWrapper">
							<iframe 
								ref={(eref) => {this.refs['iframeShayna'] = findDOMNode(eref)}}
								src="https://player.vimeo.com/video/219571913" 
								allowFullScreen="1" 
								style={{width: "958px", height: "539px"}}>
							</iframe>
							<a  className="description" 
								href="https://www.youtube.com/watch?v=lQf5ixa_Jo0"
								ref={(eref) => {this.refs['descriptionShayna'] = findDOMNode(eref)}}>
									Tevin and Shayna Talton Wedding
							</a>
						</div>
					</div>
				</div>

				<div className="breakers">
					Pricing :
				</div>

				<div className="weddingPrices">
					<div className="weddingPricesDiv">
						<div className="weddingHeader">
							<div>Package 1</div>
							<div className="price">$1600</div>
						</div>
						<div className="weddingPricesInner">
							<ul className="videographyUL">
								<li className="videographyLI"> Cinematic Wedding Video </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Set to your choice of music </li>
									<li className="videographyLI videographyLIChild"> Approx 10 minutes in length </li>
								</ul>
								<li className="videographyLI"> Full length video of ceremony with audio  </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Edited with 3 camera angles </li>
								</ul>
							
								<li className="videographyLI"> 3 Videographers on site </li>
								<li className="videographyLI"> Full day of shooting </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Prep </li>
									<li className="videographyLI videographyLIChild"> Ceremony </li>
									<li className="videographyLI videographyLIChild"> Reception </li>
								</ul>
								<li className="videographyLI"> 5 DVD’s </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Additional available for $15 each </li>
								</ul>
								<li className="videographyLI"> HD Web Upload on our site and social media </li>
							</ul>
						</div>
					</div>
					<div className="weddingPricesDiv weddingPricesFavorite">
						<div className="weddingHeader weddingHeaderFav">
							<div>Package 2 ☆</div>
							<div className="price">$1200</div>
						</div>
						<div className="weddingPricesInner weddingPricesInnerFavorite">
							<ul className="videographyUL">
								<li className="videographyLI"> Cinematic Wedding Video </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Set to your choice of music </li>
									<li className="videographyLI videographyLIChild"> Approx 10 minutes in length </li>
								</ul>
								<li className="videographyLI"> 2 Videographers on site </li>
								<li className="videographyLI"> Full day of shooting </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Prep </li>
									<li className="videographyLI videographyLIChild"> Ceremony </li>
									<li className="videographyLI videographyLIChild"> Reception </li>
								</ul>
								<li className="videographyLI"> 5 DVD’s </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Additional available for $15 each </li>
								</ul>
								<li className="videographyLI"> HD Web Upload on our site and social media </li>
							</ul>
						</div>
					</div>
					<div className="weddingPricesDiv">
						<div className="weddingHeader">
							<div>Package 3</div>
							<div className="price">$900</div>
						</div>
						<div className="weddingPricesInner">
							<ul className="videographyUL">
								<li className="videographyLI"> Cinematic Wedding Video </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Set to your choice of music </li>
									<li className="videographyLI videographyLIChild"> Approx 7 minutes in length </li>
								</ul>
								<li className="videographyLI"> 2 Videographers on site </li>
								<li className="videographyLI"> Shots of: </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Ceremony </li>
									<li className="videographyLI videographyLIChild"> Reception </li>
								</ul>
								<li className="videographyLI"> 5 DVD’s </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Additional available for $15 each </li>
								</ul>
								<li className="videographyLI"> HD Web Upload on our site and social media </li>
							</ul>
						</div>
					</div>
					<div className="weddingPricesDiv">
						<div className="weddingHeader">
							<div>Package 4</div>
							<div className="price">$600</div>
						</div>
						<div className="weddingPricesInner">
							<ul className="videographyUL">
								<li className="videographyLI"> Cinematic Wedding Video </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Set to your choice of music </li>
									<li className="videographyLI videographyLIChild"> Approx 5 minutes in length </li>
								</ul>
								<li className="videographyLI"> 1 Videographer on site (limited) </li>
								<li className="videographyLI"> Shots of: </li>
								<ul className="videographyUL videographyULChild">
									<li className="videographyLI videographyLIChild"> Ceremony </li>
									<li className="videographyLI videographyLIChild"> Reception </li>
								</ul>
								<li className="videographyLI"> 3 DVD’s </li>
								<li className="videographyLI"> HD Web Upload on our site and social media </li>
							</ul>
						</div>
					</div>
				</div>

				<div className="breakers">
					Who We Are : 
				</div>

				<div className="meAndJosh">
					<div className="meAndJoshWrap">
						<img ref={(eref) => {this.refs['me'] = findDOMNode(eref)}} src="../images/myself.jpg" alt=""/>
						<div className="meAndJoshParagraph"> 
							<div> Whitney Stotler </div>
							<div> Videographer and Editor for JW Films </div>
						</div>
					</div>
					<div className="meAndJoshWrap">	
						<img ref={(eref) => {this.refs['josh'] = findDOMNode(eref)}} src="../images/Josh.jpg" alt=""/>
						<div className="meAndJoshParagraph"> 
							<div> Josh Newman </div>
							<div> Videographer and Founder of JW Films </div>
						</div>
					</div>
				</div>


				<Footer />
			</div>
		)
	} 
}











