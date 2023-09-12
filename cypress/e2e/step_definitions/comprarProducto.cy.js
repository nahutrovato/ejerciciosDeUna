import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import PromocionesPage from "@pages/promocionesPage";
import CarritoPage from "@pages/carritoPage";
import CheckoutPage from "@pages/checkoutPage";

Given('un cliente con acceso a la plataforma www.vinoteca.com', () => {
  cy.visit("/promociones");
});

When('seleccione los productos preferidos de la seccion "Promociones"', () => {
  cy.get('.vicomstudio-modal-layout-0-x-closeButton').click({force:true});
  PromocionesPage.agregarPrimerProducto();
  PromocionesPage.beVisibleImagenProducto();
  PromocionesPage.beVisibleModalItemAgregado();
  PromocionesPage.clickBtnCarritoCompras();
});

Then('podra realizar el pago de manera exitosa', () => {
  CarritoPage.clickBtnCheckOut();
  CheckoutPage.clickBtnProcederAlPago();
  cy.scrollTo(0,600);
  CheckoutPage.completarInformacionUsuario("seccionSuperior");
  CheckoutPage.aceptarTerminosCondiciones();
  CheckoutPage.clickBtnContinuar();
  CheckoutPage.completarInformacionUsuario();
});
