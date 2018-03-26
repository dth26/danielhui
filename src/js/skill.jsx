import React from 'react';
import {render} from 'react-dom';
import skills_json from '../../public/data/skills-data.json';

export default class Skill extends React.Component {

	render () {
		return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					{ 
			    		skills_json.map(dict => {
			    			return <div className="row"  key={_.uniqueId()}>
			    						<div className="col-4">
			    							<h6>{dict['skillset']}</h6>
			    						</div>
			    						<div className="col-6">
			    							{
			    								dict['values'].map(vals => {
			    									return <span key={_.uniqueId()}>{vals}</span>
			    								})


			    							}
			    						</div>

			    					</div>

			    	 	})
			    	}
				</div>
			</div>
		</div>

		);
	}
}