const { miPrueba } = require("./homePage.cy");

describe("Join to product", () => {
  it(" Click in View product and join ", () => {
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
  it("Add 30 product to car. Join to input #quantity", () => {
    //Clear input
    cy.get("#quantity").clear();
    //I enter the input and write 30 to add product
    cy.get("#quantity")
      .click()
      .type("30");
    //With this command come back to Top page.
    cy.get("#scrollUp").click();
    //Click in Btn to add car
    cy.get(".btn.btn-default.cart").click();
    //Click en href for contains
    cy.contains("View Cart").click();
  });
});
