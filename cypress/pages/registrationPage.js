class RegistrationPage {

	get firstName(){
		return cy.get('#firstname');
	}

	get lastName(){
		return cy.get('#lastname');
	}

	get emailAddress(){
		return cy.get('#email_address');
	}

	get telephone(){
		return cy.get('#telephone');
	}

	get password(){
		return cy.get('#password');
	}

	get passwordConfirmation() {
		return cy.get('#password_confirmation');
	}
    
	get submitButton() {
		return cy.get('.zalozkonto');
	}

	getLabelByName(name) {
		return cy.get('label').contains(name);
	}
}

module.exports = new RegistrationPage();