import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';






function getCurrentScroll() {
	return window.pageYOffset || document.documentElement.scrollTop;
}


 $(document).ready(function () {
 	var headerHeightPadding = 0;
 	$('.body-container').css('top', $('#navbar-fixed-top-override').height() + headerHeightPadding );

 	var shrinkHeader = 50;
	

 	var delay = 200;
	var timeout = null;


	// start of scrolling
	$(window).scroll(function() {

		var scroll = getCurrentScroll() - $('#header').height();
	   
	    if ( scroll > shrinkHeader) {
	    	// shrink header
	        $('#header').addClass('shrink');
	        $('.removable-sec').css('visibility', 'hidden');

	        // fade header on scroll
	        $('#navbar-fixed-top-override').fadeOut(400);
	    }
	    else {
	    	// grow header
	        $('#header').removeClass('shrink');
	        $('.removable-sec').css('visibility', 'visible');
	    }

	    $('.body-container').css('top', $('#navbar-fixed-top-override').height() + headerHeightPadding );
		  
	});



 	// wait for scrolling to stop and show header
	$(window).scroll(function() {
		clearTimeout(timeout);
	    timeout = setTimeout(function(){
	         $('#navbar-fixed-top-override').fadeIn(400);
	    },delay);
	});


 });
 








export default class Header extends React.Component {
	render () {
		return  (	
			<div className="container fixed-top " id="navbar-fixed-top-override">		
			    <nav className="navbar navbar-light bg-faded" id="header">
			    	<div className="container padding-zero">
					  	<div className="row row-eq-height">
							<div className="col-md-6 col-sm-12">
								<div className="row">
									<div className="col-12">
										<p className="">
											<span id="title">DANIEL HUI</span> <br/><br/>
											<span className="removable-sec">
											Proin a erat nec augue pharetra fringilla. In hac habitasse platea dictumst. Vivamus augue nisi,
													 accumsan non mollis a, interdum a velit.  Nulla tincidunt nisl nisi, porta consectetur nisi sodales
													  u. Donec eget odio vel elit pretium convallis. Nullam mi quam,
													 congue ullamcorper imperdiet eget, posuere nec velit. Nunc sed fermentum purus. Etiam sed ante nunc.In hac habitasse platea dictumst. Vivamus augue nisi.
											</span>
										</p>
									</div>
									

									<div className="col-12 bottom-bar removable-sec">
										<i className="fa fa-location-arrow" aria-hidden="true"></i>
										<span className="icon-caption">Fairfax, VA</span>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-8">
								<div className="row removable-sec">
									<div className="col-12">
										<p>
											<span className="heading-med">Location</span><br/>
											<span className="desc-text">Fairfax, VA</span>
										</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<p>
											<span className="heading-med">Age</span><br/>
											<span className="desc-text">24</span>
										</p><br/>
										<p>
											<span className="heading-med">Employer</span><br/>
											<span className="desc-text">Booz Allen Hamilton, Software Engineer</span>
										</p>
									</div>	
									<div className="col-12 bottom-bar">
										<i className="fa fa-envelope" aria-hidden="true"></i>
										<span className="icon-caption">danielhui123@gmail.com</span>
										<i className="down fa fa-phone" aria-hidden="true"></i>
										<span className="icon-caption">267-234-8911</span>
									</div>
								</div>
							</div>
							<div className="col-md-2 col-sm-4 img-container">
								<img className="img-cir center-content-v removable-sec" src="images/dan-square.png" alt="picture of Daniel Hui"/>
							</div>

						</div>

					</div>	
				</nav>  

				<nav className="navbar navbar-toggleable-md navbar-light bg-faded" id="body-navbar">
				  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#body-navbar-ul" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
			
			
				  <div className="collapse navbar-collapse" >
				    <ul className="navbar-nav" id="body-navbar-ul">
				      <li className="nav-item">
				       		<Link to='/projects' className="nav-link">Projects</Link>
				      </li>
				      <li className="nav-item">
				        	<Link to='/skills' className="nav-link">Skills</Link>
				      </li>
				      <li className="nav-item">
				        <Link to='/resume' className="nav-link">Resume</Link>
				      </li>
				      <li className="nav-item">
				        <Link to='/about' className="nav-link">About</Link>
				      </li>
				    </ul>
				  </div>

				
				</nav>
				
			</div>
    	);
	}
}