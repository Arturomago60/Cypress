const { miPrueba } = require("./homePage.cy");
const { detailsTest } = require("./detailsProduct.cy");
const { loginTest } = require("./login.cy");
const { flowCheckoutTest } = require("./flowCheckout.cy");
import flowReport from "./flowReport";

//..................Flow report.....................
describe("flow report", () => {
  it("I do click in signup or login", () => {
    flowReport.goToReport();
  });
});
