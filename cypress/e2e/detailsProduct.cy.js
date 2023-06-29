const { miPrueba } = require("./homePage.cy");
const { scrollTop } = require("./refactoringOfVariables");
import detailsProductPage from "./DetalleProducto";

describe("I enter to product", () => {
  it(" Click in View product and enter ", () => {
    detailsProductPage.goToCheckout();
  });

  //Add 30 product to car
  it("Add 30 product to car. I enter to input #quantity", () => {
    detailsProductPage.addProductToCart();
  });
});

// Test Export
module.exports = {
  detailsTest: {
    archivo: "detailsProduct.cy.js",
    prueba: "My test of details product",
  },
};
