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
			'lauraUnderwater',
			'ECUsched',
			'jessWed',
			'roomieChristmas',
			'tshirt1'
		];	

		this.rightArrow = false;
		this.leftArrow = false;
		this.bringIn = false;
		this.boundSetPhotoDimensions = this.setPhotoDimensions.bind(this);

		this.state = {
			imageToRender: this.props.photo,
			portrait: window.matchMedia("(orientation: portrait)").matches,
			className: "start imageAndTextWrapper"			//for the transitions to work
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
			this.setPhotoDimensions();

			this.setState({
				className: 'imageAndTextWrapper moveMeIn'
			})
		}, 20);
	}
	componentDidUpdate() {
		//needed for when we arrow over to another photo, to set the dimensions again
		this.setPhotoDimensions();

		window.setTimeout(()=>{
			this.setPhotoDimensions();	//needed for when we arrow over to another photo, to set the dimensions again
		}, 20);

		if (this.bringIn === true) {
			this.bringIn = false;
			window.setTimeout(() => {
				this.setPhotoDimensions();
				this.setState({
					className: 'imageAndTextWrapper moveMeIn'
				})
			}, 20)
		}
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

			//setting arrow height based on pic height
			this.refs['leftArrow'].style.height = getComputedStyle(el).height;
			this.refs['rightArrow'].style.height = getComputedStyle(el).height;
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
	transitionEnd(e) {
		if (this.rightArrow === true) {
			let imageIndex = this.photoArray.indexOf(this.state.imageToRender);
			this.rightArrow = false;
			this.bringIn = true;

			if ((this.photoArray.length - 1) !== imageIndex) {
				let num = imageIndex + 1;
				this.setState({
					imageToRender: this.photoArray[num],
					className: 'imageAndTextWrapper moveMeOutToRight'
				})
			}
			else {
				this.setState({
					imageToRender: this.photoArray[0],
					className: 'imageAndTextWrapper moveMeOutToRight'
				})
			}
		}
		if (this.leftArrow === true) {
			let imageIndex = this.photoArray.indexOf(this.state.imageToRender);
			this.leftArrow = false;
			this.bringIn = true;

			if (imageIndex !== 0) {
				let num = imageIndex - 1;
				this.setState({
					imageToRender: this.photoArray[num],
					className: 'imageAndTextWrapper moveMeOutToLeft'
				})
			}
			else {
				let num = this.photoArray.length - 1;
				this.setState({
					imageToRender: this.photoArray[num],
					className: 'imageAndTextWrapper moveMeOutToLeft'
				})
			}
		}
	}
	rightArrowClicked() {
		this.rightArrow = true;

		this.setState({
			className: 'imageAndTextWrapper moveMeOutToLeft'
		})
	}
	leftArrowClicked() {
		this.leftArrow = true;

		this.setState({
			className: 'imageAndTextWrapper moveMeOutToRight'
		})
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
							<div 
								ref={(eref) => {this.refs['leftArrow'] = findDOMNode(eref)}}
								onClick={this.leftArrowClicked.bind(this)} 
								className="leftInvisibleArrow"> 
									&#60; 
							</div>
							<div 
								ref={(eref) => {this.refs['rightArrow'] = findDOMNode(eref)}}
								onClick={this.rightArrowClicked.bind(this)} 
								className="rightInvisibleArrow"> 
									&#62; 
							</div>
						</div>
					}

					{this.state.imageToRender === 'worldRace' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>	
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/worldRace.jpg" alt=""/>
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
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>	
							<img className="photoOpenedImg" style={{opacity: '0.95', filter: 'brightness(1.2)'}} ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/KimmiLionBrown.jpg" alt=""/>
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
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>	
							<a href="https://www.thundercoffeefargo.com/"><img className="imageWithLink photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/thunderCoffeeSquare.jpg" alt=""/></a>
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
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>	
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/jadeExplosionFinishedSquare1.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 2 </div>
								<br/>
								<div> Explosion Effect </div>
								<br/>
								<div className="portraitText"> This is Jade. Everyone say "Hi Jade!" :D This picture was taken for one of her senior photos at ECU. The Explosion Effect is a Glitter Storm Photoshop Action and it's probably my favorite. This effect works really well with action shots. </div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'whitsFlowerFarm' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>	
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/whitsFlowerFarmSquare.jpg" alt=""/>
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
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/meFlowerFace.jpg" alt=""/>
							<div className="textWrapper"> 
								<div>Level: 4 </div>
								<br/>
								<div> Graphic </div>
								<br/>
								<div className="portraitText"> "Bloom where you are planted."</div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'MAC' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>
							<a href="https://www.youtube.com/channel/UCPMCYXxedxlYS5qrNQgtbaA"><img className="imageWithLink photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/MAC2myselfBlue.jpg" alt=""/></a>
							<div className="textWrapper"> 
								<div>Level: 4 </div>
								<br/>
								<div> Hard Logo </div>
								<br/>
								<div className="portraitText"> Mackenzie Reeves is a photographer/youtuber in OKC. Her stuff is pretty rad and she's hilarious. Click the photo to be taken to her youtube channel! But if you want to go to her photography page, click the link below! </div>
								<br/>
								<a href="https://maccoplin.wixsite.com/mreevesphoto">Mackenzie Reeves - Photography</a>
								<br/>
								<a href="https://www.youtube.com/channel/UCPMCYXxedxlYS5qrNQgtbaA">Mackenzie Reeves - Youtube Channel</a>
							</div>
						</div>
					}
					{this.state.imageToRender === 'mountains' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/twinPeaks.jpg" alt=""/>
							<div className="textWrapper"> 
								<div>Level: 2 </div>
								<br/>
								<div> Graphic </div>
								<br/>
								<div className="portraitText"> "How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who bring good tidings, who proclaim salvation, who say to Zion, "Your God reigns!" - Isaiah 52:7 </div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'lauraUnderwater' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>
							<img className="photoOpenedImg" style={{filter: 'brightness(1.2)'}} ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/LauraUnderwaterHouse.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 3 </div>
								<br/>
								<div> Graphic </div>
								<br/>
								<div className="portraitText"> This is Laura. Everyone say "Did you wait 15 minutes before getting in the water?!" Haha, I'm totally kidding. Although, I'm not kidding when I say that this is my living room and that's my roommate. She's alive, I promise. </div>
							</div>
						</div>
					}	
					{this.state.imageToRender === 'ECUsched' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/ECUschedule.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 3 </div>
								<br/>
								<div> Sports Photos </div>
								<br/>
								<div className="portraitText"> ECU Womens Basketball Schedule for 2018-2019 </div>
							</div>
						</div>
					}	
					{this.state.imageToRender === 'jessWed' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/JessWedding.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 3 </div>
								<br/>
								<div> Wedding Newspaper </div>
								<br/>
								<div className="portraitText"> This just in! The Cash's are officially married! </div>
							</div>
						</div>
					}
					{this.state.imageToRender === 'roomieChristmas' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/RoomieChristmas2018.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 2 </div>
								<br/>
								<div> Christmas Cards </div>
								<br/>
								<div className="portraitText"> Merry Christmas from the Tracy, Johnson, Stotler household! </div>
							</div>
						</div>
					}	
					{this.state.imageToRender === 'tshirt1' &&
						<div onTransitionEnd={this.transitionEnd.bind(this)} className={this.state.className}>
							<img className="photoOpenedImg" ref={(eref) => {this.refs['img'] = findDOMNode(eref)}} onLoad={this.boundSetPhotoDimensions} src="../images/tshirtGrayCloseup.jpg" alt=""/>
							<div className="textWrapper"> 
								<div> Level: 1 </div>
								<br/>
								<div> Shirt Designs </div>
								<br/>
								<div className="portraitText"> "Every painted sky, a canvas of your grace" </div>
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