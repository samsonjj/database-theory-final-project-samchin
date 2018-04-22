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
			<Router>
			<div className="App">
				<PatientReportPage />
				
			</div>
			</Router>
		);
	}
}

export default App;