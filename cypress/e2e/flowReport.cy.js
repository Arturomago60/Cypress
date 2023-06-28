const { miPrueba } = require("./homePage.cy");
const { detailsTest } = require("./detailsProduct.cy");
const { loginTest } = require("./login.cy");
const { flowCheckoutTest } = require("./flowCheckout.cy");
const { scrollTop } = require("./refactoringOfVariables");

//..................Flow report.....................
describe("flow report", () => {
  it("I do click in signup or login", () => {
    cy.fixture("loginSuccess.json").then((userslogin) => {
      const userLogin = userslogin[0];
      cy.fixture("contactUs.json").then((infoContacts) => {
        const infoContact = infoContacts[0];

        //Here i do click in signup or login of header
        cy.get(".nav.navbar-nav > li:nth-child(4) > a > i").click();
        //I enter in input email and write pw.
        cy.get('[data-qa="login-email"]')
          .should("be.visible")
          .click()
          .type(userLogin.userEmail);
        //I fill password input
        cy.get('[data-qa="login-password"]')
          .should("be.visible")
          .click()
          .type(userLogin.password);
        //I click in btn login
        cy.get('[data-qa="login-button"]').click();
        //I click in contact us
        cy.get(".nav.navbar-nav > li:nth-child(9) > a > i").click();
        //Also i click in name input
        cy.get('[data-qa="name"]').click().type(infoContact.nameReport);
        //I click in email and write my email.
        cy.get('[data-qa="email"]').click().type(infoContact.email);
        //I click in subject and write on subject
        cy.get('[data-qa="subject"]').click().type(infoContact.subject);
        //I click in Message
        cy.get('[data-qa="message"]').click().type(infoContact.message);
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
  });
});
