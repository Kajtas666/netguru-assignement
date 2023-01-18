class HomePage {
  get registrationButton() {
    return cy.get("a").contains("Załóż konto");
  }

  openRegistrationPage() {
	this.registrationButton.click();
  }
}

module.exports = new HomePage();
