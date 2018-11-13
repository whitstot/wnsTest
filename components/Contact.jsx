import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../css/Contact.css';


export default class Element extends Component {
	constructor(props) {
		super(props);

		this.state = {
			class: 'contactWrapper'
		}
	}
	componentWillMount() {
		this.refs = [];
	}
	componentDidMount() {
		window.setTimeout(()=>{
			this.setState({
				class: 'contactWrapper bringMeIn'
			})
		}, 20);
	}
	render() {
		return (
			<div className="contactBackground">
				<div className={this.state.class}>
					<div className="addressStamp">
						<div> 
							Billy Bob <br/>
							1234 CR 5678 <br/>
							Small Town USA <br/>
							
						</div>
						<img className="contactImg" src="../images/flagStamp.jpg"/>
					</div>
					<div className="emailMe">
						If you want to get ahold of me, <br/> just shoot me an email!
						<a className="emailMeHref" href="mailto:whitneynstotler@gmail.com?Subject=Let's%20Chat&Body=I'd%20like%20to%20talk%20about%20:"> Email Me</a>
					</div>
				</div>
			</div>
		)
	} 
}