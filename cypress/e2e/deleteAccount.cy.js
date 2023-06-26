const { userEmail } = require("./loginSuccess");
const { password } = require("./loginSuccess");

describe("Delete account", () => {
  it("I do click in delete account in header", () => {
    cy.visit("https://automationexercise.com/");
    //Here i do click in signup or login of header
    cy.get(".nav.navbar-nav > li:nth-child(4) > a > i").click();
    //I enter in input email and write pw.
    cy.get('[data-qa="login-email"]')
      .should("be.visible")
      .click()
      .type(userEmail);
    //I fill password input
    cy.get('[data-qa="login-password"]')
      .should("be.visible")
      .click()
      .type(password);
    //I click in btn login
    cy.get('[data-qa="login-button"]').click();
    //Delete account
    cy.get(".fa.fa-trash-o").click();
  });
});
