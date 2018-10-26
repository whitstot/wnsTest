import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/PhotoOpened.css';
import Footer from './Footer.jsx';


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
			'mountains',
			'lauraUnderwater'
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

		window.setTimeout(()=>{
			this.setPhotoDimensions();
		}, 20);
	}
	componentDidUpdate() {
		//needed for when we arrow over to another photo, to set the dimensions again
		this.setPhotoDimensions();

		window.setTimeout(()=>{
			this.setPhotoDimensions();
		}, 20);
	}
	setPhotoDimensions() {
		let el = this.refs['img'],
			windowHeightToCompare = window.innerHeight + 400,			//might still need in the future so leaving it here
			windowWidth = window.innerWidth,
			windowHeight = window.innerHeight,
			portrait = this.state.portrait;

		//if ((mediaQueryList.matches === true) || (windowHeightToCompare > window.innerWidth)) {
		if (windowWidth <= 1050) {
			//setting width for portrait view
			let widthToSet = window.innerWidth / 2.3;
			el.setAttribute('width', widthToSet);
			el.removeAttribute('height');
			portrait = true;
		}
		//else if(mediaQueryList.matches === false) {
		else if (windowWidth > 1050) {
			//setting the height attribute for landscape view
			let	heightToSet = windowHeight / 1.27;
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
			<div>
				<div className="imgWrapper">
				
					{this.state.portrait === false &&
						<div onClick={this.leftArrowClicked.bind(this)} className="arrows">&#60;</div>
					}

					{this.state.portrait === true &&
						<div>
							<div onClick={this.leftArrowClicked.bind(this)} className="leftInvisibleArrow"></div>
							<div onClick={this.rightArrowClicked.bind(this)} className="rightInvisibleArrow"></div>
						</div>
					}

					{this.state.imageToRender === 'worldRace' &&
						<div className="imageAndTextWrapper">	
							<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/worldRace.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 4 </div>
								<br/>
								<div> Graphic </div>
								<br/>
								<div className="portraitText"> This one's pretty dear to me. I originally created it because I was contemplating going on the World Race. If you don't know what that is, it's an 11 month mission trip that takes you to 11 different countries. Pretty cool, but ended up deciding that wasn't the Lord's calling on my life. None the less, I learned a new photoshop technique. </div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'kimmiLion' &&
						<div className="imageAndTextWrapper">	
							<img style={{opacity: '0.95', filter: 'brightness(1.2)'}} ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/KimmiLionBrown.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 2 </div> 
								<br/>
								<div> Graphic </div>
								<br/>
								<div className="portraitText"> This is Kimmi. Everyone say "Hi Kimmi!" :D She competes in Brazilian Jiu Jitsu, and we get to wear these on shirts to her fights. She's kind of a beast. You should come. </div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'thunderCoffee' &&
						<div className="imageAndTextWrapper">	
							<a href="https://www.thundercoffeefargo.com/"><img className="imageWithLink" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/thunderCoffeeSquare.jpg" alt=""/></a>
							<div className="textWrapper"> 
								<div> Level: 1 </div>
								<br/>
								<div> Simple Logo </div>
								<br/>
								<div className="portraitText"> Thunder Coffee is Located in Fargo, North Dakota. The shop is owned by one of my old friends, Dexter Dutton (who I share a birthday with -- fun fact LOL). If you want to go to their website, just click the photo or the link below!</div>
								<br />
								<a href="https://www.thundercoffeefargo.com/"> Thunder Coffee </a>
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
								<br/>
								<div className="portraitText"> This is Jade. Everyone say "Hi Jade!" :D This picture was taken for one of her senior photos at ECU. The Explosion Effect is a Glitter Storm Photoshop Action, and it's probably my favorite. Works really well with action shots. </div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'whitsFlowerFarm' &&
						<div className="imageAndTextWrapper">	
							<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/whitsFlowerFarmSquare.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 1 </div>
								<br/>
								<div> Simple Logo </div>
								<br/>
								<div className="portraitText"> Whitley's Flower Farm is soon to be a flower shop in Ada, Oklahoma. Keep your eyes peeled!</div> 
							</div>
						</div>
					}
					{this.state.imageToRender === 'meFlowerFace' &&
						<div className="imageAndTextWrapper">
							<img ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/meFlowerFace.jpg" alt=""/>
							<div className="textWrapper"> 
								<div>Level: 4 </div>
								<br/>
								<div> Graphic </div>
								<br/>
								<div className="portraitText"> Funny story, I actually made this one right before my basketball game in a hotel room. I guess you could say I love photoshop. </div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'MAC' &&
						<div className="imageAndTextWrapper">
							<a href="https://www.youtube.com/channel/UCPMCYXxedxlYS5qrNQgtbaA"><img className="imageWithLink" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/MAC2myselfBlue.jpg" alt=""/></a>
							<div className="textWrapper"> 
								<div>Level: 4 </div>
								<br/>
								<div> Hard Logo </div>
								<br/>
								<div className="portraitText"> Mackenzie Reeves is a photographer/youtuber in OKC. Her stuff is pretty rad, and she's hilarious. Click the photo to be taken to her youtube channel! But if you want to go to her photography page, click her name below -> </div>
								<br/>
								<a href="https://maccoplin.wixsite.com/mreevesphoto">Mackenzie Reeves - Photography</a>
								<br/>
								<a href="https://www.youtube.com/channel/UCPMCYXxedxlYS5qrNQgtbaA">Mackenzie Reeves - Youtube Channel</a>
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
								<br/>
								<div className="portraitText"> Twin Peaks. That's all. </div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'lauraUnderwater' &&
						<div className="imageAndTextWrapper">
							<img style={{filter: 'brightness(1.2)'}} ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} src="../images/LauraUnderwaterHouse.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 3 </div>
								<br/>
								<div> Graphic </div>
								<br/>
								<div className="portraitText"> This is Laura. Everyone say "Did you wait 15 minutes before getting in the water?!" Haha, I'm totally kidding. Although, I'm not kidding when I say that this is my living room and that's my roommate. She's alive, I promise. </div>
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
				<Footer />
			</div>
		)
	} 
}