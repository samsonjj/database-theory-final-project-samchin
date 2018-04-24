import React, { Component } from 'react';

export default class Physician extends Component {
  constructor() {
    super();
    this.state = {
      physicians: ""
    };
  }

  componentDidMount() {
    console.log('http://localhost:3000/physicians');
    fetch('http://localhost:3000/physicians')
    .then(results => {
      return results.json();
    }).then(data => {
      let physicians = data.physicians.map((physician) => {
        return (
        <div key={physician.first_name}>
          {physician.first_name + " " + physician.last_name}
        </div>
        );
      });
      this.setState({ physicians: physicians });
    })
  }

  render() {
    return (
      <div>
        {this.state.physicians}
      </div>
    );
  }
}