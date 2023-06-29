const { scrollTop } = require("./refactoringOfVariables");

class flowLogin {
  elements = {
    //INCLUSION OF ELEMENTS.
    loginSuccesJson: () => cy.fixture("loginSuccess.json"),
    inputName: () => cy.get('[data-qa="signup-name"]'),
    InputEmail: () => cy.get('[data-qa="signup-email"]'),
    btnScrollUp: () => cy.get(scrollTop),
    btnSignup: () => cy.get('[data-qa="signup-button"]'),

    //fill  in all form to created account
    checkBoxMr: () => cy.get("#id_gender1"),
    inputPassword: () => cy.get('[data-qa="password"]'),
    selectDay: () => cy.get("#days"),
    selectMonth: () => cy.get("#months"),
    selectYear: () => cy.get("#years"),
    checkBoxNewslettter: () => cy.get("#newsletter"),

    /*----------ADDRESS INFORMATION----------*/
    registerUserJson: () => cy.fixture("registerUser.json"),
    inputFirstName: () => cy.get('[data-qa="first_name"]'),
    inputLastName: () => cy.get('[data-qa="last_name"]'),
    inputCompany: () => cy.get('[data-qa="company"]'),
    inputFirstAddress: () => cy.get('[data-qa="address"]'),
    inputSecondAddress: () => cy.get('[data-qa="address2"]'),
    inputContry: () => cy.get("#country"),
    inputState: () => cy.get('[data-qa="state"]'),
    inputCity: () => cy.get('[data-qa="city"]'),
    inputZipcode: () => cy.get('[data-qa="zipcode"]'),
    inputMobileNumber: () => cy.get('[data-qa="mobile_number"]'),
    btnCreatedAccount: () => cy.get('[data-qa="create-account"]'),
    btnContinueRegister: () => cy.get('[data-qa="continue-button"]'),
  };

  goToPageRegister() {
    //Call to fixture and first user register in JSON
    this.elements.loginSuccesJson().then((typeEmails) => {
      const typeEmail = typeEmails[0];
      //I click in input name and write my name
      this.elements.inputName().click().type("Arturo Mago");
      //I enter in input email.
      this.elements.InputEmail().click().type(typeEmail.userEmail);
      //With this command come back to Top page.
      this.elements.btnScrollUp().click();
      //Click in btn signup
      this.elements.btnSignup().click();
    });
  }
  //fill  in all form to created account
  firstPartFormRegister() {
    //Call to fixture and first user register in JSON
    this.elements.loginSuccesJson().then((typePasswords) => {
      const typePassword = typePasswords[0];
      //I title checkbox Mr.
      this.elements.checkBoxMr().should("be.visible").click();
      //I fill password input
      this.elements
        .inputPassword()
        .should("be.visible")
        .click()
        .type(typePassword.password);
      //Select in day (Date of birth)
      this.elements.selectDay().select("17");
      //Select in month (Date of birth)
      this.elements.selectMonth().select("1");
      //Select in Year (Date of birth)
      this.elements.selectYear().select("1994");
      //click in checkbox
      this.elements.checkBoxNewslettter().click();
    });
  }

  secondPartFormRegister() {
    //Call to fixture and first user register in JSON
    this.elements.registerUserJson().then((users) => {
      const user = users[0];
      //I fill  first name
      this.elements.inputFirstName().click().type(user.nombre);
      //I fill last name
      this.elements.inputLastName().click().type(user.apellido);
      //I fill company
      this.elements.inputCompany().click().type(user.company);
      //I fill first address
      this.elements.inputFirstAddress().click().type(user.address);
      //I fill two address
      this.elements.inputSecondAddress().click().type(user.address2);
      //I select country
      this.elements.inputContry().select("Canada");
      //I fill state
      this.elements.inputState().click().type(user.state);
      //I fill city
      this.elements.inputCity().click().type(user.city);
      //I fill zipcode
      this.elements.inputZipcode().click().type(user.zipcode);
      //I fill mobileNumber
      this.elements.inputMobileNumber().click().type(user.mobileNumber);
      //Click in account created
      this.elements.btnCreatedAccount().click();
      this.elements.btnContinueRegister().click();
    });
  }
}

//Export document
module.exports = new flowLogin(); //Con new instancio una class.
