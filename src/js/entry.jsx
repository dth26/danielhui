import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import Body from './body.jsx';






class App extends React.Component {
  render () {
    return (
    	<div className="container" id="bootstrap-override"> 
    		<Header/>
    		<Body/>
		</div>
	    	
    );

  }
}

render(<App/>, document.getElementById('react-app'));