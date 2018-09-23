import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/PhotoOpened.css';
import ReactCSSTransitionGroup from 'react-transition-group';


export default class PhotoOpened extends Component {
	constructor(props) {
		super(props);

		this.photoArray = [
			'worldRace', 
			'kimmiLion', 
			'thunderCoffee', 
			'jade', 
			'whitsFlowerFarm', 
			'meFlowerFace', 
			'MAC', 
			'mountains'
		];	

		this.state = {
			imageToRender: this.props.photo,
			portrait: window.matchMedia("(orientation: portrait)").matches
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		this.setPhotoDimensions();
		window.addEventListener('resize', this.setPhotoDimensions.bind(this))
		window.addEventListener("orientationchange", this.setPhotoDimensions.bind(this));
	}
	componentDidUpdate() {
		//needed for when we arrow over to another photo, to set the dimensions again
		this.setPhotoDimensions();
	}
	setPhotoDimensions() {
		let mediaQueryList = window.matchMedia("(orientation: portrait)"),
			el = this.refs['img'];

		if (mediaQueryList.matches) {
			//setting width for portrait view
			let widthToSet = window.innerWidth / 2.3;
			el.setAttribute('width', widthToSet);
			el.removeAttribute('height');
		}
		else {
			//setting the height attribute for landscape view
			let	heightToSet = window.innerHeight / 1.27;
			el.setAttribute('height', heightToSet);
			el.removeAttribute('width');
		}
		//if the orientation changes this will update the state
		if (mediaQueryList.matches !== this.state.portrait) {
			this.setState({
				portrait: mediaQueryList.matches
			})
		}
	}
	rightArrowClicked() {
		let imageIndex = this.photoArray.indexOf(this.state.imageToRender);

		if ((this.photoArray.length - 1) !== imageIndex) {
			let num = imageIndex + 1;
			this.setState({
				imageToRender: this.photoArray[num]
			})
		}
		else {
			this.setState({
				imageToRender: this.photoArray[0]
			})
		}
	}
	leftArrowClicked() {
		let imageIndex = this.photoArray.indexOf(this.state.imageToRender);

		if (imageIndex !== 0) {
			let num = imageIndex - 1;
			this.setState({
				imageToRender: this.photoArray[num]
			})
		}
		else {
			let num = this.photoArray.length - 1;
			this.setState({
				imageToRender: this.photoArray[num]
			})
		}
	}
	render() {
		return (
			<div className="imgWrapper">

				{this.state.portrait === false &&
					<div onClick={this.leftArrowClicked.bind(this)} className="arrows">&#60;</div>
				}

				{this.state.imageToRender === 'worldRace' &&
					<div className="imageAndTextWrapper">	
						<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/worldRace.jpg" alt=""/>
						<div className="textWrapper"> 
							<div> Level: 4 </div>
							<br/>
							<div> Graphic </div>
						</div>
					</div>
				}
				{this.state.imageToRender === 'kimmiLion' &&
					<div className="imageAndTextWrapper">	
						<img style={{opacity: '0.87'}} ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/KimmiLionBrown.jpg" alt=""/>
						<div className="textWrapper"> 
							<div> Level: 2 </div> 
							<br/>
							<div> Graphic </div>
						</div>
					</div>
				}
				{this.state.imageToRender === 'thunderCoffee' &&
					<div className="imageAndTextWrapper">	
						<a href="https://www.thundercoffeefargo.com/"><img className="imageWithLink" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/thunderCoffee.jpg" alt=""/></a>
						<div className="textWrapper"> 
							<div> Level: 1 </div>
							<br/>
							<div> Simple Logo </div>
							<br/>
							<center> Thunder Coffee - Located in Fargo, North Dakota </center>
						</div>
					</div>
				}
				{this.state.imageToRender === 'jade' &&
					<div className="imageAndTextWrapper">	
						<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/jadeExplosionFinishedSquare1.jpg" alt=""/>
						<div className="textWrapper"> 
							<div> Level: 2 </div>
							<br/>
							<div> Explosion Effect </div>
						</div>
					</div>
				}
				{this.state.imageToRender === 'whitsFlowerFarm' &&
					<div className="imageAndTextWrapper">	
						<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/whitsFlowerFarm.jpg" alt=""/>
						<div className="textWrapper"> 
							<div> Level: 1 </div>
							<br/>
							<div> Simple Logo </div>
							<br/>
							<div> Whitley's Flower Farm </div> 
						</div>
					</div>
				}
				{this.state.imageToRender === 'meFlowerFace' &&
					<div className="imageAndTextWrapper">
						<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/meFlowerFace.jpg" alt=""/>
						<div className="textWrapper"> 
							<div>Level: 3 </div>
							<br/>
							<div> Graphic </div>
						</div>
					</div>
				}
				{this.state.imageToRender === 'MAC' &&
					<div className="imageAndTextWrapper">
						<a href="https://www.youtube.com/channel/UCPMCYXxedxlYS5qrNQgtbaA"><img className="imageWithLink" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/MAC2myselfBlue.jpg" alt=""/></a>
						<div className="textWrapper"> 
							<div>Level: 4 </div>
							<br/>
							<center> Hard Logo </center>
						</div>
					</div>
				}
				{this.state.imageToRender === 'mountains' &&
					<div className="imageAndTextWrapper">
						<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/twinPeaks.jpg" alt=""/>
						<div className="textWrapper"> 
							<div>Level: 2 </div>
							<br/>
							<div> Graphic </div>
						</div>
					</div>
				}	

				{this.state.portrait === false &&
					<div onClick={this.rightArrowClicked.bind(this)} className="arrows">&#62;</div>
				}
				{this.state.portrait === true &&
					<div className="mobileArrowsWrapper">
						<div onClick={this.leftArrowClicked.bind(this)} className="arrows">&#60;</div>
						<div onClick={this.rightArrowClicked.bind(this)} className="arrows">&#62;</div>
					</div>
				}
				
			</div>
		)
	} 
}