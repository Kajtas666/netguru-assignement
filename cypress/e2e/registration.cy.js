const homePage = require("/cypress/pages/homePage.js");
const registrationPage = require("/cypress/pages/registrationPage.js");
const randomEmail = require("random-email");

describe("Register an account", () => {
  const firstName = "John";
  const lastName = "Doe";
  const emailAddress = randomEmail();
  const telephoneNumber = "333444555";
  const password = "verystrongpassword";

  beforeEach("Open registration page", () => {
    cy.visit("");
    homePage.openRegistrationPage();
  });

  it("should display, fill in and send registration form", () => {
    const labels = [
      "Imię",
      "Nazwisko",
      "Email",
      "Telefon",
      "Hasło",
      "Powtórz hasło",
    ];

    registrationPage.checkLabels(labels);

    registrationPage.fillInRegistrationForm(
      firstName,
      lastName,
      emailAddress,
      telephoneNumber,
      password
    );

    registrationPage.acceptRules();

    registrationPage.submitForm();

    const successMessages = [
      "Twoje konto zostało założone",
      "Rejestracja powiodła się. Twoje konto zostało założone i jest już aktywne!",
      "Na podany przez Ciebie adres email wysłaliśmy potwierdzenie rejestracji.",
      "Dziękujemy i życzymy udanych zakupów!",
    ];

    registrationPage.checkSuccessMessages(successMessages);
  });

  it("should not be possible to submit an empty form", () => {
    registrationPage.submitForm();
    cy.contains("Wypełnij poprawnie wskazane pola formularza").should("be.visible");
  });
});
