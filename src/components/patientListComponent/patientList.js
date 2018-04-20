import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class PatientList extends Component {
	constructor() {
		super();
		this.state = {
			patients: "" 
		};
	}


	componentDidMount() {
		fetch('http://localhost:3000/patients')
		.then(results => {
			return results.json();
		}).then(data => {
			let patientsthing = data.patients.map((patient) => {
				return (
					<div>
						{ patient.first_name }
					</div>
				);
			});
			this.setState({patients : patientsthing});
		})
	}

	render() {
		return (
			<div>
			<p>
				{ this.state.patients }
			</p>
			</div>
		);
	}
}

