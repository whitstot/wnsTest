import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Videography.css';
import Footer from './Footer.jsx';


export default class Videography extends Component {
	constructor(props) {
		super(props);

		this.state = {
			portrait: window.matchMedia("(orientation: portrait)").matches
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		this.setVideoDimensions();
		window.addEventListener('resize', this.setVideoDimensions.bind(this))
	}
	setVideoDimensions() {
		let el = this.refs['img'],
			windowWidth = window.innerWidth,
			portrait = this.state.portrait,
			widthToSet = 'unset',
			heightToSet = 'unset';

		if (windowWidth <= 1050) {
			//portrait

			//set all the refs correctly
			this.refs['iframeRach'].style.width = widthToSet;
			this.refs['iframeDesirae'].style.width = widthToSet;
			this.refs['iframeMeagan'].style.width = widthToSet;
			this.refs['iframeShayna'].style.width = widthToSet;

			this.refs['iframeRach'].style.height = heightToSet;
			this.refs['iframeDesirae'].style.height = heightToSet;
			this.refs['iframeMeagan'].style.height = heightToSet;
			this.refs['iframeShayna'].style.height = heightToSet;

			this.refs['descriptionRach'].style.width = widthToSet;
			this.refs['descriptionDesirae'].style.width = widthToSet;
			this.refs['descriptionMeagan'].style.width = widthToSet;
			this.refs['descriptionShayna'].style.width = widthToSet;

			this.refs['descriptionRach'].style.height = heightToSet;
			this.refs['descriptionDesirae'].style.height = heightToSet;
			this.refs['descriptionMeagan'].style.height = heightToSet;
			this.refs['descriptionShayna'].style.height = heightToSet;

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

			this.refs['descriptionRach'].style.width = widthToSet + 'px';
			this.refs['descriptionDesirae'].style.width = widthToSet + 'px';
			this.refs['descriptionMeagan'].style.width = widthToSet + 'px';
			this.refs['descriptionShayna'].style.width = widthToSet + 'px';

			this.refs['descriptionRach'].style.height = heightToSet + 'px';
			this.refs['descriptionDesirae'].style.height = heightToSet + 'px';
			this.refs['descriptionMeagan'].style.height = heightToSet + 'px';
			this.refs['descriptionShayna'].style.height = heightToSet + 'px';

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
				<div className="JWFilms">
					JW Films
				</div>
				<div className="slogan">
					To live in those priceless moments, all over again. 
				</div>
				<div className="videoWrapper">
					<iframe
						ref={(eref) => {this.refs['iframeRach'] = findDOMNode(eref)}}
						allowFullScreen="1" 
						allow="autoplay; encrypted-media"  
						frameBorder="0"
						src="https://www.youtube.com/embed/lQf5ixa_Jo0?autoplay=1&loop=1&mute=1">
					</iframe>
					<div className="line"></div>
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
						src="https://www.youtube.com/embed/yefauMCc28g?autoplay=1&loop=1&mute=1">
					</iframe>
					<div className="line"></div>
					<a  className="description"
						href="https://www.youtube.com/watch?v=yefauMCc28g&t=77s" 
						ref={(eref) => {this.refs['descriptionDesirae'] = findDOMNode(eref)}}>
							Trey and Desirae Richardson Wedding
					</a>
				</div>
				<div className="videoWrapper">
					<iframe
						ref={(eref) => {this.refs['iframeMeagan'] = findDOMNode(eref)}}
						allowFullScreen="1" 
						allow="autoplay; encrypted-media"  
						frameBorder="0"
						style={{width: "958px", height: "539px"}}
						src="https://www.youtube.com/embed/IIMdSrJvMVM?autoplay=1&loop=1&mute=1">
					</iframe>
					<div className="line"></div>
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
					<div className="line"></div>
					<a  className="description" 
						href="https://www.youtube.com/watch?v=lQf5ixa_Jo0"
						ref={(eref) => {this.refs['descriptionShayna'] = findDOMNode(eref)}}>
							Tevin and Shayna Wedding
					</a>
				</div>
				<Footer />
			</div>
		)
	} 
}











