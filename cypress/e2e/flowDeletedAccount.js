class flowDeleted {
  elements = {
    //INCLUSION OF ELEMENTS.
    loginSuccessJson: () => cy.fixture("loginSuccess.json"),
    btnSignupLogin: () => cy.get(".nav.navbar-nav > li:nth-child(4) > a > i"),
    inputEmail: () => cy.get('[data-qa="login-email"]'),
    inputPassword: () => cy.get('[data-qa="login-password"]'),
    btnLogin: () => cy.get('[data-qa="login-button"]'),
    btnDeletedUser: () => cy.get(".fa.fa-trash-o"),
  };

  deletedAccount() {
    this.elements.loginSuccessJson().then((userslogin) => {
      const userLogin = userslogin[0];
      this.elements.btnSignupLogin().click();
      //I enter in input email and write pw.
      this.elements
        .inputEmail()
        .should("be.visible")
        .click()
        .type(userLogin.userEmail);
      //I fill password input
      this.elements
        .inputPassword()
        .should("be.visible")
        .click()
        .type(userLogin.password);
      //I click in btn login
      this.elements.btnLogin().click();
      //I click in deleted account
      this.elements.btnDeletedUser().click();
    });
  }
}

//Export document
module.exports = new flowDeleted(); //Con new instancio una class.
