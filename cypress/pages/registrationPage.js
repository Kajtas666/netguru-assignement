class RegistrationPage {
  get firstNameField() {
    return cy.get("#firstname");
  }

  get lastNameField() {
    return cy.get("#lastname");
  }

  get emailAddressField() {
    return cy.get("#email_address");
  }

  get telephoneField() {
    return cy.get("#telephone");
  }

  get passwordField() {
    return cy.get("#password");
  }

  get passwordConfirmationField() {
    return cy.get("#password_confirmation");
  }

  get rulesConfromation() {
	return cy.get("#regulamin");
  }

  get submitButton() {
    return cy.get(".zalozkonto");
  }

  getLabelByName(name) {
    return cy.get("label").contains(name);
  }

  checkLabels(labelList) {
    labelList.forEach((label) => {
      this.getLabelByName(label).should("be.visible");
    });
  }

  fillInRegistrationForm(
    firstName,
    lastName,
    emailAddress,
    telephoneNumber,
    password
  ) {
    this.firstNameField.type(firstName);
    this.lastNameField.type(lastName);
    this.emailAddressField.type(emailAddress);
    this.telephoneField.type(telephoneNumber);
    this.passwordField.type(password);
    this.passwordConfirmationField.type(password);
  }

  acceptRules() {
	this.rulesConfromation.click()
  }

  submitForm() {
    this.submitButton.click();
  }

  checkSuccessMessages(messagesList) {
    messagesList.forEach((message) => {
      cy.contains(message).should("be.visible");
    });
  }
}

module.exports = new RegistrationPage();
