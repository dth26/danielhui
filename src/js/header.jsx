import React from 'react';
import {render} from 'react-dom';

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
 	var headerHeight = $('.header').height(); 
 	$('.body-container ').css('top': headerHeight);
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

				<nav class="navbar navbar-toggleable-md navbar-light bg-faded" id="body-navbar">
				  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>
			
				  <div class="collapse navbar-collapse" id="navbarNav">
				    <ul class="navbar-nav">
				      <li class="nav-item active">
				        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link" href="#">Features</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link" href="#">Pricing</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link disabled" href="#">Disabled</a>
				      </li>
				    </ul>
				  </div>
				</nav>
				
			</div>
    	);
	}
}