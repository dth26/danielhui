import React from 'react';
import {render} from 'react-dom';

//import SearchBar from './search-bar.jsx'




var shrinkHeader = 80;
$(window).scroll(toggleHeader);


function toggleHeader() { 
	var scroll = getCurrentScroll() - $('.header').height();
 
    console.log('scroll ' + scroll);
     console.log('header-height  ' + $('.header').height());
    
    if ( scroll > shrinkHeader) {
        $('.header').addClass('shrink');
        $('.removable-sec').css('visibility', 'hidden');
    }
    else {
        $('.header').removeClass('shrink');
        $('.removable-sec').css('visibility', 'visible');
    }
}

function getCurrentScroll() {
	return window.pageYOffset || document.documentElement.scrollTop;
}


 
 


class Header extends React.Component {
	render () {
		return  (
			<div className="header row border center-content-h  fixed-top row-eq-height">
				<div className="col-md-5 col-sm-12">
					<div className="row">
						<div className="col-12 removable-sec">
							<p className="">
								<span id="title">DANIEL HUI</span> &nbsp; &nbsp; &nbsp;
								Proin a erat nec augue pharetra fringilla. In hac habitasse platea dictumst. Vivamus augue nisi,
										 accumsan non mollis a, interdum a velit.  Nulla tincidunt nisl nisi, porta consectetur nisi sodales
										  u. Donec eget odio vel elit pretium convallis. Nullam mi quam,
										 congue ullamcorper imperdiet eget, posuere nec velit. Nunc sed fermentum purus. Etiam sed ante nunc.In hac habitasse platea dictumst. Vivamus augue nisi.
							</p>
						</div>
						<div className="spacer">&nbsp;</div>

						<div className="col-12 bottom-bar">
							<i className="fa fa-location-arrow" aria-hidden="true"></i>
							<span className="icon-caption">Fairfax, VA</span>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-4 img-container">
					<img className="img-cir  removable-sec img-fluid center-content-v" src="images/dan.gif" alt="picture of Daniel Hui"/>
				</div>
				<div className="col-md-4 col-sm-8">
					<div className="row">
						<div className="col-12 removable-sec">
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
						<div className="spacer">&nbsp;</div>
						<div className="col-12 bottom-bar">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<span className="icon-caption">danielhui123@gmail.com</span>
							<i className="down fa fa-phone" aria-hidden="true"></i>
							<span className="icon-caption">267-234-8911</span>
						</div>
					</div>
				</div>

			</div>



			
    	);
	}
}


class App extends React.Component {
  render () {
    return (
    	<div>
    	<nav className="header navbar sticky-top navbar-light bg-faded">
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
						<div className="spacer">&nbsp;</div>

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
					<div className="row">
						<div className="col-12 removable-sec">
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
						<div className="spacer">&nbsp;</div>
						<div className="col-12 bottom-bar">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<span className="icon-caption">danielhui123@gmail.com</span>
							<i className="down fa fa-phone" aria-hidden="true"></i>
							<span className="icon-caption">267-234-8911</span>
						</div>
					</div>
				</div>

			</div>

		</nav>
		<div className="large border"></div>
		</div>
	    	
    );

  }
}

render(<App/>, document.getElementById('react-app'));