import React, { Component } from 'react';
import Patient from '../../models/patient';

class PatientNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getContracts() {
  	fetch('http://localhost:3000/patients/search' + nameQuery)
    .then
  }

  render() {
    return (
    	<div>
    		<h3>Contracts<h3>
    		{ this.props.patient}
    	</div>
      <form className="PatientNameForm" onSubmit={this.handleSubmit}>
        <label>
          Patient Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {this.props.patient ? (
        
        <div>
          <h3>Name</h3>
          <p>{this.props.patient.first_name + ' ' 
              + this.props.patient.middle_name 
              + ' ' + this.props.patient.last_name }
          </p>
          <h3>Date of Birth</h3>
          <p>{this.props.patient.date_of_birth.substring(0, 10)}</p>
          <h3>Phone Number</h3>
          <p>{this.props.patient.phone_number}</p>
          <h3>Address</h3>
          <p>{this.props.patient.street_addr + ' '
                + this.props.patient.city_addr + ', '
                + this.props.patient.props_addr + ' '
                + this.props.patient.zip_addr}</p>
          <h3>Occupation</h3>
          <p>{this.props.patient.occupation}</p>
          <h3>Primary Physician</h3>
          <p>{this.props.patient.primary_physician}</p>
          <h3>Contract ID</h3>
          <p>{this.props.patient.contract}</p>
        </div> ) : ''}

      </form>
    );
  }
}

export default PatientNameForm;