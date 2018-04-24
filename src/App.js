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

// includes (css and stuff?)

class App extends Component {
	render() {
		return (
			<Router className="App">
			<div>
			<div class="vertical-menu col-md-1">
				
          			<Link to="/">Home</Link>
        	
          			<Link to="/patients">All Patients</Link>
        	
          			<Link to="/search">Search for a Patient</Link>
        		
          			<Link to="/search">Physicians</Link>
        		
			</div>
			<div class="col-md-5">
      		<Route path="/patients" component={PatientList} />
      		<Route path="/search" component={PatientReportPage} />
      		</div>
      		
			</div>
			</Router>
		);
	}
}

export default App;