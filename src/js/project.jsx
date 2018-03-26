import React from 'react';
import {render} from 'react-dom';
import projects_json from '../../public/data/projects-data.json';



class Card extends React.Component {

	loadModal(modalID) {
		console.log('clicked');
		$("#" + modalID).modal("show")
	}

	render () {

	//	const liveSiteExists = this.props.url != "";
//		console.log(this.props.url);
//		const siteHTML = (liveSiteExists ?  <a href={this.props.url}>Live Site</a> : <span></span>);
		return (
			
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 project-col">
					<button type="button" className="btn-project-modal" data-toggle="modal" data-target={"#" + this.props.modalID}> 
					
						<div className="card project-card">
						   <img className="card-img-top" src={"images/site-screenshots/" +  this.props.image } alt="Card image cap"/>
						  <div className="card-block">
						    <h6 className="card-title card-header">{this.props.projectName}</h6>
						  </div>
						  <div className="card-block card-block-text">
						    <p className="card-text">{this.props.projectDesc}</p>

						  	<p className="card-tags">
						  		{
						  			this.props.projectTools.map(tag => {
						    			return <span key={_.uniqueId()} className="tag float-left">{tag}</span>
						    	 	})
				    	 		}
						  	</p>
						  </div>
						  <div className="card-body card-footer">
						  	<a target="_blank" href={this.props.github} className="card-link"><i className="fa fa-github fa-lg float-left"><span className="fa-text">&nbsp;Source</span></i></a>
						  
						     {this.props.url != "" ? (
						        <a href={this.props.url} target="_blank" className="card-link float-right"><i className="fa fa-eye fa-lg float-left"><span className="fa-text">&nbsp;Live Site</span></i></a>
						      ) : (
						        <span></span>
						      )}

							</div>
						</div>
					</button>

					<div className="modal fade" id={this.props.modalID} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  				<div className="modal-dialog  modal-lg" role="document">
		    				<div className="modal-content">
		    					
			    					<img className="modal-img" src={"images/site-screenshots/" +  this.props.image } alt="Card image cap"/>
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
		    			return <Card key={_.uniqueId()} url={dict['url']} image={dict['image']} modalID={dict['modalID']} projectName={dict['name']} projectDesc={dict['desc']} projectTools={dict['tools']}  github={dict['github']}  />
		    	 	})
		    	}
			</div>
		</div>

		);
	}
}



