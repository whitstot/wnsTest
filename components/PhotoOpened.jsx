import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/PhotoOpened.css';


export default class PhotoOpened extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imageToRender: this.props.photo
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		
	}
	componentWillReceiveProps() {
		this.setState({
			imageToRender: this.props.photo
		})
	}
	render() {
		return (
			<div>
				{this.state.imageToRender === 'worldRace' &&
					<div>
						<div className="wordsOnPage"></div>
						<div style={{display: 'flex'}}>
							<div style={{color: 'white', height: '50px', width: '50px'}}> &#60; </div>
							<img style={{width: '80%', height: '80%'}} src="../images/worldRace.jpg" alt=""/>
							<div style={{color: 'white', height: '50px', width: '50px'}}> &#62; </div>
						</div>
						<div className="buttonsWrapper">
							<div className="button">Back</div>
							<div className="button">Business</div>
						</div>
					</div>
				}
				{this.state.imageToRender === 'kimmiLion' &&
					<img style={{width: '100%'}} src="../images/KimmiLionBrown.jpg" alt=""/>
				}
				{this.state.imageToRender === 'thunderCoffee' &&
					<a href="https://www.thundercoffeefargo.com/"><img style={{width: '100%'}} src="../images/thunderCoffee.jpg" alt=""/></a>
				}
				{this.state.imageToRender === 'jade' &&
					<img style={{width: '100%'}} src="../images/jadeExplosionFinishedSquare1.jpg" alt=""/>
				}
				{this.state.imageToRender === 'whitsFlowerFarm' &&
					<img style={{width: '100%'}} src="../images/whitsFlowerFarm.jpg" alt=""/>
				}
				{this.state.imageToRender === 'meFlowerFace' &&
					<img style={{width: '100%'}} src="../images/meFlowerFace.jpg" alt=""/>
				}
				{this.state.imageToRender === 'MAC' &&
					<a href="https://www.youtube.com/user/macluvsyou2"><img style={{width: '100%'}} src="../images/MAC2myselfBlue.jpg" alt=""/></a>
				}
				{this.state.imageToRender === 'mountains' &&
					<img style={{width: '100%'}} src="../images/twinPeaks.jpg" alt=""/>
				}	
			</div>
		)
	} 
}