class flowCheckout {
  elements = {
    //INCLUSION OF ELEMENTS.
    creditCardJson: () => cy.fixture("creditCards.json"),
    headerOptionCart: () => cy.get(".nav.navbar-nav > li:nth-child(3) > a > i"),
    btnProceedCheckout: () => cy.get(".btn.btn-default.check_out"),
    btnPlaceOrder: () => cy.get(".btn.btn-default.check_out"),
    inputNameCard: () => cy.get('[data-qa="name-on-card"]'),
    inputNumberCard: () => cy.get('[data-qa="card-number"]'),
    inputCvv: () => cy.get('[data-qa="cvc"]'),
    inputMonthExp: () => cy.get('[data-qa="expiry-month"]'),
    inputYearExp: () => cy.get('[data-qa="expiry-year"]'),
    btnPayConfirm: () => cy.get('[data-qa="pay-button"]'),
    btnContinuarOrderPlaced: () => cy.get('[data-qa="continue-button"]'),
    logoutHeader: () => cy.get(".nav.navbar-nav > li:nth-child(4) > a > i"),
  };

  //I create function and pass action
  goToCheckoutPay() {
    //Call to fixture and first user register in JSON
    this.elements.creditCardJson().then((cards) => {
      const card = cards[0];
      //I enter in option cart
      this.elements.headerOptionCart().click();
      //I do click in proceed to checkout
      this.elements.btnProceedCheckout().click();
      //I do click in btn place order
      this.elements.btnPlaceOrder().click();
      //I fill Name card
      this.elements.inputNameCard().click().type(card.nameCard);
      //I fill number card
      this.elements.inputNumberCard().click().type(card.numberCard);
      //I fill CVV
      this.elements.inputCvv().click().type(card.cvv);
      //I fill Month
      this.elements.inputMonthExp().click().type(card.expirationMonth);
      //I fill Years
      this.elements.inputYearExp().click().type(card.expirationYears);
      //I click in BTN pay and confirm order
      this.elements.btnPayConfirm().click();
      //I click en BTN continuar - ORDER PLACED!
      this.elements.btnContinuarOrderPlaced().click();
      //I click in logout in header
      this.elements.logoutHeader().click();
    });
  }
}

//Export document
module.exports = new flowCheckout(); //Con new instancio una class.
