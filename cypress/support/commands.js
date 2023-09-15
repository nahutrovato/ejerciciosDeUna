import PromocionesPage  from "@pages/promocionesPage";
import CarritoPage from "@pages/carritoPage";
import CheckoutPage from "@pages/checkoutPage";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
Cypress.Commands.add('obtenerPrecioProducto', (locator) => {
    let precioProducto = ""
    cy.get(locator).first().invoke("text").then((text) => {
            precioProducto = text;
            return cy.wrap(precioProducto);
      });
   
});

Cypress.Commands.add('seleccionarProducto', () => {
      PromocionesPage.clickCerrarModalCookies();
      PromocionesPage.agregarPrimerProducto();
      PromocionesPage.beVisibleImagenProducto();
      PromocionesPage.beVisibleModalItemAgregado();
      PromocionesPage.clickBtnCarritoCompras();
});

Cypress.Commands.add('finalizarCompra', () => {
      CarritoPage.clickBtnCheckOut();
      CheckoutPage.titleCheckOut('Vinoteca - Finalizar la compra');
      CheckoutPage.urlCheckOut('cart');
      CheckoutPage.clickBtnProcederAlPago();
      cy.scrollTo(0,600);
      CheckoutPage.completarInformacionUsuario("seccionSuperior");
      CheckoutPage.aceptarTerminosCondiciones();
      CheckoutPage.clickBtnContinuar();
      CheckoutPage.completarInformacionUsuario();
})
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })