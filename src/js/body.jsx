import React from 'react';
import {render} from 'react-dom';
import Project from './project.jsx';
import Skill from './skill.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';




 $(document).ready(function () {
 	var headerWidth = $('.header').width();
 	console.log(headerWidth); 
 	$('.body-container').css('width', headerWidth);
 	//$('.navbar-body').css('width', headerWidth);
 });
 

        

export default class Body extends React.Component {

	render () {
		return (

			<div className="container-fluid body-container center-content-h ">
				<Project/>
				<Skill/>
			</div>

		

		);
	}
}



