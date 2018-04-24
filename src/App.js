import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import PatientList from './components/patientListComponent/patientList';
import PatientReportPage from './components/pages/patientReportPage';
import PhysicianPage from './components/pages/physicianPage';
import MedicationPage from './components/pages/medicationPage';

// includes (css and stuff?)

class App extends Component {
	render() {
		return (
			<Router className="App">
			<div>
			<div className="vertical-menu col-md-1">
				
          			<Link to="/">Home</Link>
          			<Link to="/patients">All Patients</Link>
          			<Link to="/search">Search for a Patient</Link>
          			<Link to="/physicians">Physicians</Link>
          			<Link to="/medications">Medications</Link>
        		
			</div>
			<div className="col-md-5">
      		<Route path="/patients" component={PatientList} />
      		<Route path="/search" component={PatientReportPage} />
      		<Route path="/physicians" component={PhysicianPage} />
      		<Route path="/medications" component={MedicationPage} />

      		</div>
      		
			</div>
			</Router>
		);
	}
}

export default App;