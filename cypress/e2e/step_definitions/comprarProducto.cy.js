import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import PromocionesPage from "@pages/promocionesPage";
import CheckoutPage from "@pages/checkoutPage";

Given('un cliente con acceso a la plataforma www.vinoteca.com', () => {
  cy.visit("/promociones");
  cy.title().should('eq','Promociones');
});

When('seleccione los productos preferidos de la seccion "Promociones"', () => {
  PromocionesPage.agregarProducto();
});

Then('podra realizar el pago de manera exitosa', () => {
  CheckoutPage.flujoPago();
});
