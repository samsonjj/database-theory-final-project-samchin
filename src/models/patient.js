export default function Patient(patient) {
	
		this.ssn = patient.ssn;
		this.first_name = patient.first_name;
		this.middle_name = patient.middle_name;
		this.last_name = patient.last_name;
		this.date_of_birth = patient.date_of_birth;
		this.phone_number = patient.phone_number;
		this.street_addr = patient.street_addr;
		this.zip_addr = patient.zip_addr;
		this.city_addr = patient.city_addr;
		this.state_addr = patient.state_addr;
		this.occupation = patient.occupation;
		this.primary_physician = patient.primary_physician;
		this.contract = patient.contract;
	

	this.infoString = () => {
		return this.ssn + ': ' + this.first_name + ' ' + this.middle_name + ' ' + this.last_name;
	}
}