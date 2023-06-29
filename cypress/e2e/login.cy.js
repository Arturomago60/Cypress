const { miPrueba } = require("./homePage.cy");
const { detailsTest } = require("./detailsProduct.cy");
import flowLoginPage from "./flowLogin";
//const { datos } = require("./dataRegister");

describe("Register user", () => {
  it("Click in input[data-qa='signup-name'] | input[data-qa='signup-email'] write name and password", () => {
    flowLoginPage.goToPageRegister();
  });

  //fill  in all form to created account
  it("I enter in all input to fill each one", () => {
    flowLoginPage.firstPartFormRegister();
  });

  /*----------ADDRESS INFORMATION----------*/

  it("I fill address information", () => {
    flowLoginPage.secondPartFormRegister();
  });
});

// Test Export
module.exports = {
  loginTest: {
    archivo: "login.cy.js",
    prueba: "My test of register user",
  },
};
