import React, { Component } from 'react';
import Patient from '../../models/patient';

class PatientNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prescriptions: null
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  // You don't have to do this check first, but it can help prevent an unneeded render
    console.log('in cwrp');
    console.log('prev: ' + prevProps.patient);
    console.log('current: ' + this.props.patient);
    if (prevProps.patient !== this.props.patient && this.props.patient) {
      this.setPrescriptions();
    }
  }

  setPrescriptions() {
    console.log('setting prescriptions');
  	fetch('http://localhost:3000/patients/prescriptions?'
          + 'firstname=' + this.props.patient.first_name
          + '&lastname=' + this.props.patient.last_name
    ).then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      console.log(data.prescriptions);
      let prescriptionsArray = data.prescriptions.map((prescription) => {
        return (
        <div key={prescription.prescription_id}>
          <br></br>
          ID: { prescription.prescription_id }
          <br></br>
          medication: { prescription.prescribed_for }
        </div>);
      });
      this.setState( {
        prescriptions: prescriptionsArray
      });
    });
  }

  render() {
    console.log('render: ' + this.state.prescriptions + " | " + (this.prescriptions ? this.state.prescriptions.length : ' '));
    return (

    	<div>
    		<h3>Prescriptions</h3>
    		{ this.state.prescriptions }
    	</div>

    );
  }
}

export default PatientNameForm;
