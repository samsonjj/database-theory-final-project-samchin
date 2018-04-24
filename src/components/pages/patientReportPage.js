import React, {Component} from 'react';
import PatientNameForm from '../patientNameForm/patientNameForm';
import PatientPrescriptions from '../patientComponents/patientPrescriptions';

export default class PatientReportPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
      patient: null
    };
    this.updatePatient = function(patient) {
    	console.log(this.state.patient);
			this.setState({
					patient: patient
			});
			console.log(this.state.patient);
		};

		this.updatePatient = this.updatePatient.bind(this);
  }


	render() {
		console.log(this.state.patient);
		return (
		<div>
		<div className="col-md-6">
			<p/>
			<PatientNameForm updatePatient={this.updatePatient} patient={this.state.patient}/>
		</div>
		<div className="col-md-6">
			<p/>
			<PatientPrescriptions patient={this.state.patient}/>
		</div>
		</div>
		)
	}
}
