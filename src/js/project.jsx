import React from 'react';
import {render} from 'react-dom';
import projects_json from '../../public/data/projects-data.json';



class Card extends React.Component {

	render () {
		return (
			<div className="col-xs-1 col-sm-1 col-md-2 col-lg-3">
				<div className="card project-card">
				  <img className="card-img-top" src={"public/images/site-screenshots/" +  this.props.image } alt="Card image cap"/>
				  <div className="card-block">
				    <h6 className="card-title">{this.props.projectName}</h6>
				    <p className="card-text">{this.props.projectDesc}</p>
				  </div>
				  <div className="card-block">
				  	<p>
				  		{
				  			this.props.projectTools.map(tag => {
				    			return <span key={_.uniqueId()} className="tag">{tag}</span>
				    	 	})
		    	 		}
				  	</p>
				    <a href={this.props.github} className="card-link"><i class="fa fa-github fa-lg"><span className="fa-text">&nbsp;Source</span></i></a>
				  </div>
				</div>
			</div>
		);
	}
}

export default class Project extends React.Component {

	render () {
		return (
		<div className="container">
			<div className="row">
			 	{ 
		    		projects_json.map(dict => {
		    			return <Card key={_.uniqueId()} image={dict['image']} projectName={dict['name']} projectDesc={dict['desc']} projectTools={dict['tools']}  github={dict['github']}  />
		    	 	})
		    	}
			</div>
		</div>

		);
	}
}



