import React from 'react';
import {render} from 'react-dom';


export default class Project extends React.Component {

	render () {
		return (
		 	<div className="card project-card">
			  <img className="card-img-top" src="..." alt="Card image cap"/>
			  <div className="card-block">
			    <h4 className="card-title">Card title</h4>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <a href="#" className="btn btn-primary">Go somewhere</a>
			  </div>
			</div>
		);
	}
}


