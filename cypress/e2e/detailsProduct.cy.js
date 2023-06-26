const { miPrueba } = require("./homePage.cy");
const { scrollTop } = require("./refactoringOfVariables");

describe("I enter to product", () => {
  it(" Click in View product and enter ", () => {
    cy.get('a[href="/product_details/24"]')
      .click()
      .then(() => {
        // Verify landing page has loaded
        cy.url().should(
          "eq",
          "https://automationexercise.com/product_details/24"
        );
      });
  });

  //Add 30 product to car
  it("Add 30 product to car. I enter to input #quantity", () => {
    //Clear input
    cy.get("#quantity").clear();
    //I enter the input and write 30 to add product
    cy.get("#quantity").click().type("30");
    //With this command come back to Top page.
    cy.get(scrollTop).click();
    //Click in Btn to add car
    cy.get(".btn.btn-default.cart").click();
    //Click in href for contains
    cy.contains("View Cart").click();
    //Verify btn of checkout
    cy.get(".btn.btn-default.check_out").should("be.visible");
    //I enter in checkout
    cy.get(".btn.btn-default.check_out").click();
    // Click en LOGIN
    cy.get(".modal-body > :nth-child(2) > a > u").click();
  });
});

// Test Export
module.exports = {
  detailsTest: {
    archivo: "detailsProduct.cy.js",
    prueba: "My test of details product",
  },
};
