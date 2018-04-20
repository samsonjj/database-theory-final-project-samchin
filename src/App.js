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

// includes (css and stuff?)

class App extends Component {
	render() {
		return (
				<Router>
				<div className="App">

					<Header />
					<PatientList />
					<Footer />

				</div>
				</Router>
		);
	}
}

export default App;