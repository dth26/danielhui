import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import Body from './body.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';





class App extends React.Component {
  render () {
    return (
        <Router>
        	<div className="container" id="bootstrap-override"> 
            	<Header/>
                <Body/>
    		</div>
        </Router>
	    	
    );

  }
}

render(<App/>, document.getElementById('react-app'));