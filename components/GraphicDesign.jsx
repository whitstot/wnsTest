import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/graphicDesign.css';


export default class Element extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		
	}
	render() {
		return (
			<div className="grid">
				<img className="graphicDesignImg" src="../images/worldRace.jpg" alt=""/>
				<img className="graphicDesignImg" src="../images/jadeExplosionFinishedSquare1.jpg" alt=""/>
				<img className="graphicDesignImg" src="../images/DexCloudM7Square.jpg" alt=""/>
				<img className="graphicDesignImg" src="../images/KimmiLionBrown.jpg" alt=""/>
				<img className="graphicDesignImg" src="../images/meFlowerFace.jpg" alt=""/>
				<img className="graphicDesignImg" src="../images/MAC2myselfBlue.jpg" alt=""/>
				<img className="graphicDesignImg" src="../images/twinPeaks.jpg" alt=""/>
			</div>
		)
	} 
}