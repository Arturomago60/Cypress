const { miPrueba } = require("./homePage.cy");
const { detailsTest } = require("./detailsProduct.cy");
const { loginTest } = require("./login.cy");
const { payment } = require("./refactoringOfVariables");

//All flow cart
describe("All flow cart", () => {
  //I do click in cart - I Enter in cart to view my product
  it("I do click in cart", () => {
    cy.get(".nav.navbar-nav > li:nth-child(3) > a > i").click();
    //I do click in proceed to checout
    cy.get(".btn.btn-default.check_out").click();
    //I do click in btn place order
    cy.get(".btn.btn-default.check_out").click();
    //I verify Name Card object
    cy.wrap(payment).should("have.property", "nameCard", "Arturo Mago V");
    //I fill Name card
    cy.get('[data-qa="name-on-card"]').click().type(payment.nameCard);
    //I verify card number object
    cy.wrap(payment).should("have.property", "numberCard", 4051885600446623);
    //I fill number card
    cy.get('[data-qa="card-number"]').click().type(payment.numberCard);
    //I verify CVV object
    cy.wrap(payment).should("have.property", "cvv", 123);
    //I fill CVV
    cy.get('[data-qa="cvc"]').click().type(payment.cvv);
    //I verify ExpirationMonth object
    cy.wrap(payment).should("have.property", "expirationMonth", 12);
    //I fill Month
    cy.get('[data-qa="expiry-month"]').click().type(payment.expirationMonth);
    //I verify ExpirationYears object
    cy.wrap(payment).should("have.property", "expirationYears", 2025);
    //I fill Years
    cy.get('[data-qa="expiry-year"]').click().type(payment.expirationYears);
    //I click in BTN pay and confirm order
    cy.get('[data-qa="pay-button"]').click();
    //I click en BTN continuar - ORDER PLACED!
    cy.get('[data-qa="continue-button"]').click();
    //I click in logout in header
    cy.get(".nav.navbar-nav > li:nth-child(4) > a > i").click();
  });
});

// Test Export
module.exports = {
  flowCheckoutTest: {
    archivo: "flowCheckout.cy.js",
    prueba: "My test of checkout",
  },
};
