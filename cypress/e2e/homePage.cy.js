const { scrollTop } = require("./refactoringOfVariables");
describe("Visit Home page", () => {
  beforeEach(() => {
    // Visit page for each
    cy.visit("/");
  });

  it("Simple visit", () => {
    //   cy.visit("/");
    //With command can do scroll bottom home page
    cy.scrollTo("bottom", { duration: 500 });
    //With this command come back to Top page.
    cy.get(scrollTop).click();
  });
  //Scroll to mid page
  it("Do scroll to mid page", () => {
    // Obtener la altura de la ventana del navegador
    cy.window().then((win) => {
      const windowHeight = win.innerHeight;

      // Desplazarse hasta la mitad de la pantalla
      cy.scrollTo("center");
      cy.wait(500); // Esperar un breve momento para que el scroll se complete

      // Desplazarse nuevamente hasta la mitad de la pantalla
      cy.scrollTo("center");
    });
  });
});

// Test Export
module.exports = {
  miPrueba: {
    archivo: "homePage.cy.js",
    prueba: "Mi prueba Home page",
  },
};
