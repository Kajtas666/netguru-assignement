class HomePage {

	get registrationButton() {
		return cy.get('a').contains('Załóż konto');
	}
}

module.exports = new HomePage();