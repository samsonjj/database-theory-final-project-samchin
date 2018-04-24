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
			<ul className="menu">
        		<li>
          			<Link to="/">Home</Link>
        		</li>
        		<li>
          			<Link to="/patients">All Patients</Link>
        		</li>
        		<li>
          			<Link to="/search">Search for a Patient</Link>
        		</li>
      		</ul>
      		<Route path="/patients" component={PatientList} />
      		<Route path="/search" component={PatientReportPage} />
			</div>
			</Router>
		);
	}
}

export default App;