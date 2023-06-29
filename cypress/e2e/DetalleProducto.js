const { scrollTop } = require("./refactoringOfVariables");

class detailsProductPage {
  elements = {
    viewProduct: () => cy.get('a[href="/product_details/24"]'),
    verifyUrl: () => cy.url(),
    quantityInput: () => cy.get("#quantity"),
    btnScrolllUp: () => cy.get(scrollTop),
    btnAddCart: () => cy.get(".btn.btn-default.cart"),
    viewCartLink: () => cy.contains("View Cart"),
    btnCheckout: () => cy.get(".btn.btn-default.check_out"),
    btnLogin: () => cy.get(".modal-body > :nth-child(2) > a > u"),
  };

  goToCheckout() {
    //I enter in view product and verify url
    this.elements
      .viewProduct()
      .click()
      .then(() => {
        this.elements
          .verifyUrl()
          .should("eq", "https://automationexercise.com/product_details/24");
      });
  }
  //Add 30 product to car
  addProductToCart() {
    //Clear input
    this.elements.quantityInput().clear();
    //I enter the input and write 30 to add product
    this.elements.quantityInput().click().type("30");
    //With this command come back to Top page.
    this.elements.btnScrolllUp().click();
    //Click in Btn to add car
    this.elements.btnAddCart().click();
    //Click in href for contains
    this.elements.viewCartLink().click();
    //Verify btn of checkout
    this.elements.btnCheckout().should("be.visible");
    //I enter in checkout
    this.elements.btnCheckout().click();
    // Click en LOGIN
    this.elements.btnLogin().click();
  }
}

//Export document
module.exports = new detailsProductPage(); //Con new instancio una class.
