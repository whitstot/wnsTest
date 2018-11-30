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
		if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
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

			this.refs['IEimgWorldRace'].style.height = widthToSet + 'px';
			this.refs['IEimgKimmmi'].style.height = widthToSet + 'px';
			this.refs['IEimgThunder'].style.height = widthToSet + 'px';
			this.refs['IEimgJade'].style.height = widthToSet + 'px';
			this.refs['IEimgWhit'].style.height = widthToSet + 'px';
			this.refs['IEimgFlowerFace'].style.height = widthToSet + 'px';
			this.refs['IEimgMAC'].style.height = widthToSet + 'px';
			this.refs['IEimgTwinPeaks'].style.height = widthToSet + 'px';
			this.refs['IEimgLaura'].style.height = widthToSet + 'px';
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

		this.refs['IEimgWorldRace'].style.height = widthToSet + 'px';
		this.refs['IEimgKimmmi'].style.height = widthToSet + 'px';
		this.refs['IEimgThunder'].style.height = widthToSet + 'px';
		this.refs['IEimgJade'].style.height = widthToSet + 'px';
		this.refs['IEimgWhit'].style.height = widthToSet + 'px';
		this.refs['IEimgFlowerFace'].style.height = widthToSet + 'px';
		this.refs['IEimgMAC'].style.height = widthToSet + 'px';
		this.refs['IEimgTwinPeaks'].style.height = widthToSet + 'px';
		this.refs['IEimgLaura'].style.height = widthToSet + 'px';
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
							<img ref={(eref) => {this.refs['IEimgWhit'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitsFlowerFarm')} src="../images/whitsFlowerFarmSquare.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgFlowerFace'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'meFlowerFace')} src="../images/meFlowerFace.jpg" alt=""/>
						</div>
						<div className="IEtriple">
							<img ref={(eref) => {this.refs['IEimgMAC'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'MAC')} src="../images/MAC2myselfBlue.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgTwinPeaks'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'mountains')} src="../images/twinPeaks.jpg" alt=""/>
							<img ref={(eref) => {this.refs['IEimgLaura'] = findDOMNode(eref)}} className="IEgraphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'lauraUnderwater')} src="../images/LauraUnderwaterHouseSquare.jpg" alt=""/>	
						</div>
					</div>
				}

				{this.state.usingIE === false && 
					<div className="grid">
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'worldRace')} src="../images/worldRace.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'kimmiLion')} src="../images/KimmiLionBrown.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'thunderCoffee')} src="../images/thunderCoffeeSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'jade')} src="../images/jadeExplosionFinishedSquare1.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'whitsFlowerFarm')} src="../images/whitsFlowerFarmSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'meFlowerFace')} src="../images/meFlowerFace.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'MAC')} src="../images/MAC2myselfBlue.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'mountains')} src="../images/twinPeaks.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'lauraUnderwater')} src="../images/LauraUnderwaterHouseSquare.jpg" alt=""/>
						<img className="graphicDesignImg" onClick={this.props.renderNewComponent.bind(this, 'ECUsched')} src="../images/ECUscheduleSquare.jpg" alt=""/>
					</div>
				}

				<Footer />
			</div>
		)
	} 
}