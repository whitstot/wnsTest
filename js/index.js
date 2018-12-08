import React from 'react';
import ReactDOM from 'react-dom';
import Element from '../components/Opener.jsx';

window.setTimeout(() => {			//just to display my loading icon and give it a second to preload everything
	ReactDOM.render(
		<Element/>,
	  	document.getElementById('ReactId')
	);
}, 5000)