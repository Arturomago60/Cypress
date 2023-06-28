const { miPrueba } = require("./homePage.cy");
const { detailsTest } = require("./detailsProduct.cy");
const { loginTest } = require("./login.cy");

//All flow cart
describe("All flow cart", () => {
  //I do click in cart - I Enter in cart to view my product
  it("I do click in cart", () => {
    //Call to fixture and first user register in JSON
    cy.fixture("creditCards.json").then((cards) => {
      const card = cards[0];
      //I enter in option cart
      cy.get(".nav.navbar-nav > li:nth-child(3) > a > i").click();
      //I do click in proceed to checkout
      cy.get(".btn.btn-default.check_out").click();
      //I do click in btn place order
      cy.get(".btn.btn-default.check_out").click();
      //I fill Name card
      cy.get('[data-qa="name-on-card"]').click().type(card.nameCard);
      //I fill number card
      cy.get('[data-qa="card-number"]').click().type(card.numberCard);
      //I fill CVV
      cy.get('[data-qa="cvc"]').click().type(card.cvv);
      //I fill Month
      cy.get('[data-qa="expiry-month"]').click().type(card.expirationMonth);
      //I fill Years
      cy.get('[data-qa="expiry-year"]').click().type(card.expirationYears);
      //I click in BTN pay and confirm order
      cy.get('[data-qa="pay-button"]').click();
      //I click en BTN continuar - ORDER PLACED!
      cy.get('[data-qa="continue-button"]').click();
      //I click in logout in header
      cy.get(".nav.navbar-nav > li:nth-child(4) > a > i").click();
    });
  });
});

// Test Export
module.exports = {
  flowCheckoutTest: {
    archivo: "flowCheckout.cy.js",
    prueba: "My test of checkout",
  },
};
