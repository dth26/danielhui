import React from 'react';
import {render} from 'react-dom';
import projects_json from '../../public/data/projects-data.json';



class Card extends React.Component {

	loadModal(modalID) {
		console.log('clicked');
		$("#" + modalID).modal("show")
	}

	render () {
		return (
			
				<div className="col-xs-1 col-sm-1 col-md-2 col-lg-3">
					<button type="button" className="btn-project-modal" data-toggle="modal" data-target={"#" + this.props.modalID}> 
					
						<div className="card project-card">
						   <img className="card-img-top" src={"public/images/site-screenshots/" +  this.props.image } alt="Card image cap"/>
						  <div className="card-block">
						    <h6 className="card-title card-header">{this.props.projectName}</h6>
						  </div>
						  <div className="card-block card-block-text">
						    <p className="card-text">{this.props.projectDesc}</p>
						  	<p>
						  		{
						  			this.props.projectTools.map(tag => {
						    			return <span key={_.uniqueId()} className="tag">{tag}</span>
						    	 	})
				    	 		}
						  	</p>
						    <a target="_blank" href={this.props.github} className="card-link"><i className="fa fa-github fa-lg"><span className="fa-text">&nbsp;Source</span></i></a>
						  </div>
						</div>
					</button>

					<div className="modal fade" id={this.props.modalID} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  				<div className="modal-dialog  modal-lg" role="document">
		    				<div className="modal-content">
		    					
			    					<img className="modal-img" src={"public/images/site-screenshots/" +  this.props.image } alt="Card image cap"/>
			      					<div className="modal-footer">
			        					<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			      					</div>
			      				
		    				</div>
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
		    			return <Card key={_.uniqueId()} image={dict['image']} modalID={dict['modalID']} projectName={dict['name']} projectDesc={dict['desc']} projectTools={dict['tools']}  github={dict['github']}  />
		    	 	})
		    	}
			</div>
		</div>

		);
	}
}



