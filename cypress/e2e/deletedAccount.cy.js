describe("Delete account", () => {
  it("I do click in delete account in header", () => {
    //Call to fixture and first user register in JSON
    cy.fixture("loginSuccess.json").then((deletedAccount) => {
      const deleted = deletedAccount[0];

      cy.visit("https://automationexercise.com/");
      //Disable logs for request
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
      //Here i do click in signup or login of header
      cy.get(".nav.navbar-nav > li:nth-child(4) > a > i").click();
      //I enter in input email and write pw.
      cy.get('[data-qa="login-email"]')
        .should("be.visible")
        .click()
        .type(deleted.userEmail);
      //I fill password input
      cy.get('[data-qa="login-password"]')
        .should("be.visible")
        .click()
        .type(deleted.password);
      //I click in btn login
      cy.get('[data-qa="login-button"]').click();
      //Deleted account
      cy.get(".fa.fa-trash-o").click();
    });
  });
});
