import React, { Component } from 'react';
import Patient from '../../models/patient';

class PatientNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      output: 'patient information will show here'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let names = this.state.value.split(' ');
    let nameQuery = '?' + (names.length > 0 ? 'firstname=' + names[0] : '')
      + (names.length > 1 ? '&lastname=' + names[1] : '');
    console.log(nameQuery);
    fetch('http://localhost:3000/patients/search' + nameQuery)
    .then(results => {
      return results.json();
    }).then(data => {
      let patients = data.patients;
      if(patients.length > 0) {
        let patient = new Patient(patients[0]);
        this.setState((prevState) => {
          return {
            value: prevState.value,
            output: patient.infoString()
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            value: prevState.value,
            output: 'no one by that name exists'
          };
        })
      }
    })
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Patient Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <div>
          { this.state.output }
        </div>
      </form>
    );
  }
}

export default PatientNameForm;