const { scrollTop } = require("./refactoringOfVariables");

class flowReport {
  elements = {
    //INCLUSION OF ELEMENTS.
    loginSuccessJson: () => cy.fixture("loginSuccess.json"),
    contactUsJson: () => cy.fixture("contactUs.json"),
    btnSignupLogin: () => cy.get(".nav.navbar-nav > li:nth-child(4) > a > i"),
    inputEmail: () => cy.get('[data-qa="login-email"]'),
    inputPassword: () => cy.get('[data-qa="login-password"]'),
    btnLogin: () => cy.get('[data-qa="login-button"]'),
    btnContactUsHeader: () =>
      cy.get(".nav.navbar-nav > li:nth-child(9) > a > i"),
    inputName: () => cy.get('[data-qa="name"]'),
    inputEmailReport: () => cy.get('[data-qa="email"]'),
    campSubject: () => cy.get('[data-qa="subject"]'),
    campMessage: () => cy.get('[data-qa="message"]'),
    btnSubmit: () => cy.get('[data-qa="submit-button"]'),
    btnScrolllUp: () => cy.get(scrollTop),
    btnHomePage: () => cy.get("div #form-section > a > span > i"),
    btnLogoutHeader: () => cy.get(".nav.navbar-nav > li:nth-child(4) > a > i"),
  };

  goToReport() {
    //Call to fixture and first user register in JSON
    this.elements.loginSuccessJson().then((userslogin) => {
      const userLogin = userslogin[0];
      //Call to fixture and first user register in JSON
      this.elements.contactUsJson().then((infoContacts) => {
        const infoContact = infoContacts[0];
        //Here i do click in signup or login of header
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
        //I click in contact us
        this.elements.btnContactUsHeader().click();
        //Also i click in name input
        this.elements.inputName().click().type(infoContact.nameReport);
        //I click in email and write my email.
        this.elements.inputEmailReport().click().type(infoContact.email);
        //I click in subject and write on subject
        this.elements.campSubject().click().type(infoContact.subject);
        //I click in Message
        this.elements.campMessage().click().type(infoContact.message);
        //I click in btn submit
        this.elements.btnSubmit().click();
        //With this command come back to Top page.
        this.elements.btnScrolllUp().click();
        //I click in btn HOME
        this.elements.btnHomePage().click();
        //Here i do click in logout
        this.elements.btnLogoutHeader().click();
      });
    });
  }
}

//Export document
module.exports = new flowReport(); //Con new instancio una class.
