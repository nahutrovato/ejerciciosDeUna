import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import PromocionesPage from "@pages/promocionesPage";
import CheckoutPage from "@pages/checkoutPage";
import CarritoPage from "@pages/carritoPage";

Given('un cliente con acceso a la plataforma www.vinoteca.com', () => {
  cy.visit("/promociones");
  cy.title().should('eq','Promociones');
});

When('seleccione los productos preferidos de la seccion "Promociones"', () => {
  PromocionesPage.clickCerrarModalCookies();
  PromocionesPage.agregarPrimerProducto();
  PromocionesPage.beVisibleImagenProducto();
  PromocionesPage.beVisibleModalItemAgregado();
  PromocionesPage.clickBtnCarritoCompras();
});

Then('podra realizar el pago de manera exitosa', () => {
  CarritoPage.clickBtnCheckOut();
  CheckoutPage.titleCheckOut('Vinoteca - Finalizar la compra');
  CheckoutPage.urlCheckOut('cart');
  CheckoutPage.clickBtnProcederAlPago();
  cy.scrollTo(0,600);
  CheckoutPage.completarInformacionUsuario("seccionSuperior");
  CheckoutPage.aceptarTerminosCondiciones();
  CheckoutPage.clickBtnContinuar();
  CheckoutPage.completarInformacionUsuario();
});
