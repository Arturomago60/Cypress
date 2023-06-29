const { miPrueba } = require("./homePage.cy");
const { detailsTest } = require("./detailsProduct.cy");
const { loginTest } = require("./login.cy");
import flowCheckout from "./flowCheckout";

//All flow cart
describe("All flow cart", () => {
  //I do click in cart - I Enter in cart to view my product
  it("I do click in cart", () => {
    flowCheckout.goToCheckoutPay();
  });
});

// Test Export
module.exports = {
  flowCheckoutTest: {
    archivo: "flowCheckout.cy.js",
    prueba: "My test of checkout",
  },
};
