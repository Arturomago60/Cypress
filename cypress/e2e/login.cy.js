const { miPrueba } = require("./homePage.cy");
const { detailsTest } = require("./detailsProduct.cy");
const { scrollTop } = require("./refactoringOfVariables");
//const { datos } = require("./dataRegister");

describe("Register user", () => {
  it("Click in input[data-qa='signup-name'] | input[data-qa='signup-email'] write name and password", () => {
    //Call to fixture and first user register in JSON
    cy.fixture("loginSuccess.json").then((typeEmails) => {
      const typeEmail = typeEmails[0];
      //I click in input name and write my name
      cy.get('[data-qa="signup-name"]').click().type("Arturo Mago");
      //I enter in input email and write pw.
      cy.get('[data-qa="signup-email"]').click().type(typeEmail.userEmail);
      //With this command come back to Top page.
      cy.get(scrollTop).click();
      //Click in btn signup
      cy.get('[data-qa="signup-button"]').click();
    });
  });

  //fill  in all form to created account
  it("I enter in all input to fill each one", () => {
    //Call to fixture and first user register in JSON
    cy.fixture("loginSuccess.json").then((typePasswords) => {
      const typePassword = typePasswords[0];
      //I title checkbox Mr.
      cy.get("#id_gender1").should("be.visible").click();
      //I fill password input
      cy.get('[data-qa="password"]')
        .should("be.visible")
        .click()
        .type(typePassword.password);
      //Select in day (Date of birth)
      cy.get("#days").select("17");
      cy.get("#days option").eq(17);
      //Select in month (Date of birth)
      cy.get("#months").select("1");
      cy.get("#months option").eq(1);
      //Select in Year (Date of birth)
      cy.get("#years").select("1994");
      cy.get("#years option").eq(28);
      //click in checkbox
      cy.get("#newsletter").click();
    });
  });

  /*----------ADDRESS INFORMATION----------*/

  it("I fill address information", () => {
    //Call to fixture and first user register in JSON
    cy.fixture("registerUser.json").then((users) => {
      const user = users[0];
      //verify object first name
      //cy.wrap(datos).should("have.property", "nombre", "Arturo");
      //I fill  first name
      cy.get('[data-qa="first_name"]').click().type(user.nombre);
      // verify object last name
      //cy.wrap(datos).should("have.property", "apellido", "Mago");
      //I fill last name
      cy.get('[data-qa="last_name"]').click().type(user.apellido);
      //Verify object company
      //cy.wrap(datos).should("have.property", "company", "ApplyDigital");
      //I fill company
      cy.get('[data-qa="company"]').click().type(user.company);
      //Verify object first address
      //cy.wrap(datos).should("have.property", "address", "Santa Victoria 492");
      //I fill first address
      cy.get('[data-qa="address"]').click().type(user.address);
      //Verify object two address
      //cy.wrap(datos).should("have.property", "address2", "Santiago");
      //I fill two address
      cy.get('[data-qa="address2"]').click().type(user.address2);
      //I select country
      cy.get("#country").select("Canada");
      cy.get("#country option").eq(3);
      //Verify object state
      //cy.wrap(datos).should("have.property", "state", "Región Metropolitana");
      //I fill state
      cy.get('[data-qa="state"]').click().type(user.state);
      //Verify object city
      //cy.wrap(datos).should("have.property", "city", "Santiago");
      //I fill city
      cy.get('[data-qa="city"]').click().type(user.city);
      //Verify object zipcode
      //cy.wrap(datos).should("have.property", "zipcode", "8320000");
      //I fill zipcode
      cy.get('[data-qa="zipcode"]').click().type(user.zipcode);
      //Verify object mobileNumber
      //cy.wrap(datos).should("have.property", "mobileNumber", "+56949014078");
      //I fill mobileNumber
      cy.get('[data-qa="mobile_number"]').click().type(user.mobileNumber);
      //Click in account created
      cy.get('[data-qa="create-account"]').click();
      cy.get('[data-qa="continue-button"]').click();
    });
  });
});

// Test Export
module.exports = {
  loginTest: {
    archivo: "login.cy.js",
    prueba: "My test of register user",
  },
};
