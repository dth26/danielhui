import React from 'react';
import {render} from 'react-dom';



 $(document).ready(function () {
 	var headerWidth = $('.header').width();
 	console.log(headerWidth); 
 	$('.body-container').css('width', headerWidth);
 	//$('.navbar-body').css('width', headerWidth);
 });
 


export default class Body extends React.Component {

	render () {
		return (
			<div className="container body-container  border">

			{/*
				<ul className="list-inline">
					<li className="list-inline-item menu-item">Projects</li>
					<li className="list-inline-item menu-item">Resume</li>
					<li className="list-inline-item menu-item">Contact</li>
				</ul>
			*/}


				<nav className="container navbar navbar-body  navbar-toggleable-md navbar-light bg-faded">
					 <div className="container padding-none">
						  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						  </button>
						  <div className="collapse navbar-collapse" id="navbarNav">
						    <ul className="navbar-nav">
						      <li className="nav-item active">
						        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						      </li>
						      <li className="nav-item">
						        <a className="nav-link" href="#">Features</a>
						      </li>
						      <li className="nav-item">
						        <a className="nav-link" href="#">Pricing</a>
						      </li>
						      <li className="nav-item">
						        <a className="nav-link disabled" href="#">Disabled</a>
						      </li>
						    </ul>
						  </div>
					</div>
				</nav>
				<br/>
			
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna tellus, sodales quis lectus ut, tincidunt rutrum ligula. Duis non ipsum tortor. Curabitur rhoncus lobortis metus. Integer eu magna non nisl varius tincidunt eu quis arcu. Suspendisse bibendum dictum tortor, at commodo urna dignissim a. Nullam egestas, nisl et dignissim luctus, sapien tortor pellentesque augue, et congue nunc magna aliquet est. Sed euismod blandit tempor. In non nibh neque. Aliquam fermentum non felis quis elementum. Proin vitae pretium orci. Etiam congue efficitur augue, non efficitur ipsum molestie nec. Vestibulum eu turpis nisi. Vestibulum in augue eros. Mauris aliquet faucibus purus, vel malesuada risus mollis ut. Ut iaculis ipsum in tristique maximus. Fusce nec nisi urna.

Proin eget arcu posuere, maximus diam sed, facilisis orci. Ut id ex feugiat, tempus magna eget, consequat libero. Nunc pulvinar ligula quis volutpat bibendum. Pellentesque nec ligula venenatis, ultricies elit in, porttitor metus. Vestibulum ligula enim, eleifend eget lacus in, vehicula congue felis. Duis cursus risus nisi, eget aliquet tortor laoreet at. Fusce at facilisis augue. Vestibulum massa mi, lobortis sed nisi sit amet, pretium suscipit mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis efficitur accumsan arcu quis eleifend. Mauris sodales tellus vitae orci euismod vestibulum. Sed tristique nisl gravida diam vestibulum, et cursus diam viverra. Donec finibus, erat eu auctor porttitor, ligula lectus rutrum arcu, nec accumsan purus turpis et orci.

Donec elementum mollis nulla eu pulvinar. Maecenas rutrum, tortor vitae placerat faucibus, lorem nunc commodo nibh, nec varius nisl felis id velit. Proin vel commodo purus. Fusce volutpat quis eros in tristique. Maecenas ut eros risus. Donec viverra viverra lacus. Nulla viverra iaculis metus quis posuere. Nunc viverra venenatis lacus vel molestie. Phasellus vitae turpis mollis, vulputate augue ac, sagittis magna. Proin justo est, pretium in ex a, molestie suscipit massa.

Sed nec magna sed lectus ullamcorper ullamcorper finibus in turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Vivamus erat dolor, vestibulum quis urna non, iaculis varius sem. Fusce tristique turpis sapien. Mauris imperdiet nisi sed faucibus aliquam. Cras luctus porttitor mi, sit amet molestie arcu faucibus vulputate. Phasellus scelerisque vel ante vel congue. In malesuada pretium sodales. Phasellus ut blandit neque. Aliquam erat volutpat. Nulla rutrum sit amet mi a fermentum.

Vivamus lobortis, ligula id lacinia tempor, neque ante fringilla tellus, eu convallis libero lorem id odio. Pellentesque aliquam, diam id dapibus consectetur, lorem lacus porttitor purus, sed efficitur massa augue id mi. Sed eget ante nisl. Donec non lorem cursus, suscipit lorem eget, eleifend libero. Integer fermentum lacus at quam blandit, a eleifend purus hendrerit. Vestibulum vel vehicula lorem, eu mollis quam. Vivamus egestas orci vel tellus porttitor scelerisque. Nulla quis consectetur ex. Nullam tincidunt suscipit rhoncus. Vestibulum nec eros laoreet, maximus massa vitae, cursus nulla. Morbi blandit lectus viverra, euismod nunc quis, finibus est.
</p>

			

			</div>
		);
	}
}



