import React, { Component } from 'react';

export default class Medication extends Component {
  constructor() {
    super();
    this.state = {
      medications: ""
    };
  }

  componentDidMount() {
    console.log('http://localhost:3000/medications');
    fetch('http://localhost:3000/medications')
    .then(results => {
      return results.json();
    }).then(data => {
      let medications = data.medications.map((medication) => {
        return (
        <div key={medication.brand_name}>
          {medication.brand_name}
        </div>
        );
      });
      this.setState({ medications: medications });
    })
  }

  render() {
    return (
      <div>
        {this.state.medications}
      </div>
    );
  }
}