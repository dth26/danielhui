import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';





var shrinkHeader = 30;
$(window).scroll(toggleHeader);


function toggleHeader() { 
	var scroll = getCurrentScroll() - $('.header').height();
   
    if ( scroll > shrinkHeader) {
        $('.header').addClass('shrink');
        $('.removable-sec').css('visibility', 'hidden');
    }
    else {
        $('.header').removeClass('shrink');
        $('.removable-sec').css('visibility', 'visible');
    }

    $('.body-container').css('top', $('.header').height());
}

function getCurrentScroll() {
	return window.pageYOffset || document.documentElement.scrollTop;
}


 $(document).ready(function () {
 	var headerHeight = $('#navbar-fixed-top-override').height(); 
 	$('.body-container ').css('top': headerHeight);

 	$('#navbar-fixed-top-override').width($('#bootstrap-override').width());
 });
 


export default class Header extends React.Component {
	render () {
		return  (	
			<div className="container fixed-top " id="navbar-fixed-top-override">		
			    <nav className="navbar header navbar-light bg-faded">
			    	<div className="container padding-zero">
					  	<div className="row row-eq-height">
							<div className="col-md-5 col-sm-12">
								<div className="row">
									<div className="col-12">
										<p className="">
											<span id="title">DANIEL HUI</span> &nbsp; &nbsp; &nbsp;<span className="removable-sec">
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
							<div className="col-md-3 col-sm-4 img-container">
								<img className="img-cir  img-fluid center-content-v removable-sec" src="images/dan.gif" alt="picture of Daniel Hui"/>
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

						</div>

					</div>	
				</nav>  

				<nav className="navbar navbar-toggleable-md navbar-light bg-faded" id="body-navbar">
				  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
			
				  <div className="collapse navbar-collapse" >
				    <ul className="navbar-nav" id="body-navbar-ul">
				      <li className="nav-item">
				       		<Link to='/' className="nav-link">Projects</Link>
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