const { miPrueba } = require("./homePage.cy");
const { detailsTest } = require("./detailsProduct.cy");
const { loginTest } = require("./login.cy");
const { flowCheckoutTest } = require("./flowCheckout.cy");
const { scrollTop } = require("./refactoringOfVariables");
const { userEmail } = require("./loginSuccess");
const { password } = require("./loginSuccess");
const { contactUs } = require("./refactoringOfVariables");

//..................Flow report.....................
describe("flow report", () => {
  it("I do click in signup or login", () => {
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
    //I click in contact us
    cy.get(".nav.navbar-nav > li:nth-child(9) > a > i").click();
    //Verify name input object
    cy.wrap(contactUs).should("have.property", "nameReport", "Arturo");
    //Also i click in name input
    cy.get('[data-qa="name"]').click().type(contactUs.nameReport);
    //Verify email input object
    cy.wrap(contactUs).should(
      "have.property",
      "email",
      "arturo.mago@applydigital.com"
    );
    //I click in email and write my email.
    cy.get('[data-qa="email"]').click().type(contactUs.email);
    //Verify subject input object
    cy.wrap(contactUs).should("have.property", "subject", "Automation test");
    //I click in subject and write on subject
    cy.get('[data-qa="subject"]').click().type(contactUs.subject);
    //Verify message input object
    cy.wrap(contactUs).should(
      "have.property",
      "message",
      "I am automating this flow"
    );
    //I click in Message
    cy.get('[data-qa="message"]').click().type(contactUs.message);
    //I click in btn submit
    cy.get('[data-qa="submit-button"]').click();
    //With this command come back to Top page.
    cy.get(scrollTop).click();
    //I click in btn HOME
    cy.get("div #form-section > a > span > i").click();
    //Here i do click in logout
    cy.get(".nav.navbar-nav > li:nth-child(4) > a > i").click();
  });
});
