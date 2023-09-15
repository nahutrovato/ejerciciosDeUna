import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";

Given('un cliente con acceso a la plataforma www.vinoteca.com', () => {
  cy.visit("/promociones");
  cy.title().should('eq','Promociones');
});

When('seleccione los productos preferidos de la seccion "Promociones"', () => {
  cy.seleccionarProducto();
});

Then('podra realizar el pago de manera exitosa', () => {
  cy.finalizarCompra();
});
