import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/PhotoshopProjects.css';
import Footer from './Footer.jsx';


export default class PhotoshopProjects extends Component {
	constructor(props) {
		super(props);

		this.boundIEResize = this.IEResize.bind(this)

		this.state = {
			usingIE: false
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.boundIEResize)
	}
	componentDidMount() { 
		//just to have these defined for later
		//these varibale are if the CSS Grid would NOT be compatible
		let chromeCSSGrid = false,
			edgeCSSGrid = false,
			firefoxCSSGrid = false;



		//      TO DO: SAFARI AND OPERA


  		// Opera 8.0+
		//let isOpera = (!!window.opr && !!opr.addons) || (!!window.opera) || (navigator.userAgent.indexOf(' OPR/') >= 0);
		// Firefox 1.0+
		let isFirefox = typeof InstallTrigger !== 'undefined';
		// Safari 3.0+ "[object HTMLElementConstructor]" 
		//let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
		// Internet Explorer 
		let isIE = (navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true );
		// Edge 20+
		let isEdge = !isIE && !!window.StyleMedia;
		// Chrome 1 - 71
		let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);


		if (isChrome) {
			let chromeInfo = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./),
	    		chromeVersion = parseInt(chromeInfo[2]),
	    		chromeCSSGrid = (chromeVersion < 57);
		}
		// if (isEdge) {
		// 	let edgeInfo = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString),
  // 				edgeVersion = parseInt(edgeInfo[2]),
  // 				edgeCSSGrid = (edgeVersion < 16);
		// }
		if (isFirefox) {
			let firefoxInfo = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),
				firefoxVersion = parseInt(firefoxInfo[1]),
				firefoxCSSGrid = (firefoxVersion < 52)
		}


		//if any of these variables are true, then their browser version cannot handle a CSS Grid
		if (isIE || edgeCSSGrid || chromeCSSGrid || firefoxCSSGrid) {
			window.addEventListener('resize', this.boundIEResize);
			this.setState({
				usingIE: true
			})
		}
	}
	componentDidUpdate() {
		if (this.state.usingIE === true) {
			var windowWidth = window.innerWidth,
			widthToSet = windowWidth / 3;

			this.refs['IEimgWorldRace'].style.width = widthToSet + 'px';
			this.refs['IEimgKimmmi'].style.width = widthToSet + 'px';
			this.refs['IEimgThunder'].style.width = widthToSet + 'px';
			this.refs['IEimgJade'].style.width = widthToSet + 'px';
			this.refs['IEimgWhit'].style.width = widthToSet + 'px';
			this.refs['IEimgFlowerFace'].style.width = widthToSet + 'px';
			this.refs['IEimgMAC'].style.width = widthToSet + 'px';
			this.refs['IEimgTwinPeaks'].style.width = widthToSet + 'px';
			this.refs['IEimgLaura'].style.width = widthToSet + 'px';
			this.refs['IEimgECU'].style.width = widthToSet + 'px';
			this.refs['IEimgJess'].style.width = widthToSet + 'px';
			this.refs['IEimgRoomieChristmas'].style.width = widthToSet + 'px';
			this.refs['IEimgTshirt1'].style.width = widthToSet + 'px';
			this.refs['IEimgSafari'].style.width = widthToSet + 'px';
			this.refs['IEimgWhyNotUs'].style.width = widthToSet + 'px';
			this.refs['IEimgWhyNotUsGirl'].style.width = widthToSet + 'px';
			this.refs['IEimgWhitInception'].style.width = widthToSet + 'px';
			this.refs['IEimgMyLogoFlower'].style.width = widthToSet + 'px';
			this.refs['IEimgNewChapter'].style.width = widthToSet + 'px';
			this.refs['IEimgWhitSlice'].style.width = widthToSet + 'px';
			this.refs['IEimgLauraBook'].style.width = widthToSet + 'px';

			this.refs['IEimgWorldRace'].style.height = widthToSet + 'px';
			this.refs['IEimgKimmmi'].style.height = widthToSet + 'px';
			this.refs['IEimgThunder'].style.height = widthToSet + 'px';
			this.refs['IEimgJade'].style.height = widthToSet + 'px';
			this.refs['IEimgWhit'].style.height = widthToSet + 'px';
			this.refs['IEimgFlowerFace'].style.height = widthToSet + 'px';
			this.refs['IEimgMAC'].style.height = widthToSet + 'px';
			this.refs['IEimgTwinPeaks'].style.height = widthToSet + 'px';
			this.refs['IEimgLaura'].style.height = widthToSet + 'px';
			this.refs['IEimgECU'].style.height = widthToSet + 'px';
			this.refs['IEimgJess'].style.height = widthToSet + 'px';
			this.refs['IEimgRoomieChristmas'].style.height = widthToSet + 'px';
			this.refs['IEimgTshirt1'].style.height = widthToSet + 'px';
			this.refs['IEimgSafari'].style.height = widthToSet + 'px';
			this.refs['IEimgWhyNotUs'].style.height = widthToSet + 'px';
			this.refs['IEimgWhyNotUsGirl'].style.height = widthToSet + 'px';
			this.refs['IEimgWhitInception'].style.height = widthToSet + 'px';
			this.refs['IEimgMyLogoFlower'].style.height = widthToSet + 'px';
			this.refs['IEimgNewChapter'].style.height = widthToSet + 'px';
			this.refs['IEimgWhitSlice'].style.height = widthToSet + 'px';
			this.refs['IEimgLauraBook'].style.height = widthToSet + 'px';
		}
	}
	IEResize() {
		var windowWidth = window.innerWidth,
			widthToSet = windowWidth / 3;

		this.refs['IEimgWorldRace'].style.width = widthToSet + 'px';
		this.refs['IEimgKimmmi'].style.width = widthToSet + 'px';
		this.refs['IEimgThunder'].style.width = widthToSet + 'px';
		this.refs['IEimgJade'].style.width = widthToSet + 'px';
		this.refs['IEimgWhit'].style.width = widthToSet + 'px';
		this.refs['IEimgFlowerFace'].style.width = widthToSet + 'px';
		this.refs['IEimgMAC'].style.width = widthToSet + 'px';
		this.refs['IEimgTwinPeaks'].style.width = widthToSet + 'px';
		this.refs['IEimgLaura'].style.width = widthToSet + 'px';
		this.refs['IEimgECU'].style.width = widthToSet + 'px';
		this.refs['IEimgJess'].style.width = widthToSet + 'px';
		this.refs['IEimgRoomieChristmas'].style.width = widthToSet + 'px';
		this.refs['IEimgTshirt1'].style.width = widthToSet + 'px';
		this.refs['IEimgSafari'].style.width = widthToSet + 'px';
		this.refs['IEimgWhyNotUs'].style.width = widthToSet + 'px';
		this.refs['IEimgWhyNotUsGirl'].style.width = widthToSet + 'px';
		this.refs['IEimgWhitInception'].style.width = widthToSet + 'px';
		this.refs['IEimgMyLogoFlower'].style.width = widthToSet + 'px';
		this.refs['IEimgNewChapter'].style.width = widthToSet + 'px';
		this.refs['IEimgWhitSlice'].style.width = widthToSet + 'px';
		this.refs['IEimgLauraBook'].style.width = widthToSet + 'px';

		this.refs['IEimgWorldRace'].style.height = widthToSet + 'px';
		this.refs['IEimgKimmmi'].style.height = widthToSet + 'px';
		this.refs['IEimgThunder'].style.height = widthToSet + 'px';
		this.refs['IEimgJade'].style.height = widthToSet + 'px';
		this.refs['IEimgWhit'].style.height = widthToSet + 'px';
		this.refs['IEimgFlowerFace'].style.height = widthToSet + 'px';
		this.refs['IEimgMAC'].style.height = widthToSet + 'px';
		this.refs['IEimgTwinPeaks'].style.height = widthToSet + 'px';
		this.refs['IEimgLaura'].style.height = widthToSet + 'px';
		this.refs['IEimgECU'].style.height = widthToSet + 'px';
		this.refs['IEimgJess'].style.height = widthToSet + 'px';
		this.refs['IEimgRoomieChristmas'].style.height = widthToSet + 'px';
		this.refs['IEimgTshirt1'].style.height = widthToSet + 'px';
		this.refs['IEimgSafari'].style.height = widthToSet + 'px';
		this.refs['IEimgWhyNotUs'].style.height = widthToSet + 'px';
		this.refs['IEimgWhyNotUsGirl'].style.height = widthToSet + 'px';
		this.refs['IEimgWhitInception'].style.height = widthToSet + 'px';
		this.refs['IEimgMyLogoFlower'].style.height = widthToSet + 'px';
		this.refs['IEimgNewChapter'].style.height = widthToSet + 'px';
		this.refs['IEimgWhitSlice'].style.height = widthToSet + 'px';
		this.refs['IEimgLauraBook'].style.height = widthToSet + 'px';
	}
	render() {

		return (
			<div>

				{this.state.usingIE === true && 
					<div className="IEwrapperMain">
						<div className="IEtriple">
							<img ref={(eref) => {this.refs['IEimgWorldRace'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'worldRace')} src="../images/worldRace.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgKimmmi'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'kimmiLion')} src="../images/KimmiLionBrown.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgThunder'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'thunderCoffee')} src="../images/thunderCoffeeSquare.jpg" alt=""/>
						</div>
						<div className="IEtriple">
							<img ref={(eref) => {this.refs['IEimgJade'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'jade')} src="../images/jadeExplosionFinishedSquare1.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgWhitInception'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitInception')} src="../images/whitleyInceptionSquare.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgFlowerFace'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'meFlowerFace')} src="../images/meFlowerFace.jpg" alt=""/>
						</div>
						<div className="IEtriple">
							<img ref={(eref) => {this.refs['IEimgNewChapter'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'newChapter')} src="../images/newChapterSquare.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgECU'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'MAC')} src="../images/ECUscheduleSquare.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgLaura'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'lauraUnderwater')} src="../images/LauraUnderwaterHouseSquare.jpg" alt=""/>	
						</div>
						<div className="IEtriple">
							<img ref={(eref) => {this.refs['IEimgMAC'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'MAC')} src="../images/MAC2.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgWhitSlice'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitSlice')} src="../images/whitleySlices.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgWhyNotUsGirl'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whynotusgirl')} src="../images/whynotusGirl.jpg" alt=""/>
						</div>
						<div className="IEtriple">
							<img ref={(eref) => {this.refs['IEimgJess'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'jessWed')} src="../images/JessWeddingSquare.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgRoomieChristmas'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'roomieChristmas')} src="../images/RoomieChristmas2018.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgMyLogoFlower'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'myLogoFlower')} src="../images/myLogoFlower.jpg" alt=""/>
						</div>
						<div className="IEtriple">
							<img ref={(eref) => {this.refs['IEimgSafari'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'safari')} src="../images/tcKidsSafariSquare.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgLauraBook'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'lauraBook')} src="../images/lauraBook.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgWhyNotUs'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whynotus')} src="../images/whynotus.jpg" alt=""/>
						</div>
						<div className="IEtriple">
							<img ref={(eref) => {this.refs['IEimgTwinPeaks'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'mountains')} src="../images/twinPeaks.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgWhit'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitsFlowerFarm')} src="../images/whitsFlowerFarmSquare.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgTshirt1'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'tshirt1')} src="../images/tshirtGray.png" alt=""/>
						</div>
					</div>	
				}

				{this.state.usingIE === false && 
					<div className="grid">
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'worldRace')} src="../images/worldRace.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'kimmiLion')} src="../images/KimmiLionBrown.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'thunderCoffee')} src="../images/thunderCoffeeSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'jade')} src="../images/jadeExplosionFinishedSquare1.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitInception')} src="../images/whitleyInceptionSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'meFlowerFace')} src="../images/meFlowerFace.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'newChapter')} src="../images/newChapterSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'ECUsched')} src="../images/ECUscheduleSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'lauraUnderwater')} src="../images/LauraUnderwaterHouseSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'MAC')} src="../images/MAC2.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitSlice')} src="../images/whitleySlices.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whynotusgirl')} src="../images/whynotusGirl.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'jessWed')} src="../images/JessWeddingSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'roomieChristmas')} src="../images/RoomieChristmas2018.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'myLogoFlower')} src="../images/myLogoFlower.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'safari')} src="../images/tcKidsSafariSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'lauraBook')} src="../images/lauraBookSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whynotus')} src="../images/whynotus.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'mountains')} src="../images/twinPeaks.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitsFlowerFarm')} src="../images/whitsFlowerFarmSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'tshirt1')} src="../images/tshirtGray.png" alt=""/>
					</div>
				}

				<Footer />
			</div>
		)
	} 
}