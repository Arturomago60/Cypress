import flowDeletedAccount from "./flowDeletedAccount";
describe("Delete account", () => {
  beforeEach(() => {
    // Visit page for each
    cy.visit("/");
    //Disable logs for request
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("I do click in delete account in header", () => {
    flowDeletedAccount.deletedAccount();
  });
});
