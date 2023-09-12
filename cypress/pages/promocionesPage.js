class Promociones {

    elements = {
        btnAgregarProducto: () =>  cy.get('.vtex-flex-layout-0-x-flexRow--AddToCartButtonContainer'),
        
        imgProducto: () => cy.get('.vtex-product-summary-2-x-imageNormal'),
        tituloProducto: () => cy.get('.vtex-product-summary-2-x-productBrand'),
        precioProducto: '.vtex-product-price-1-x-sellingPrice',
        modalItemAgregado: () => cy.get('.flex-ns > .flex > .pr5'),
        btnCarritoCompras: () => cy.get('.pa4 > .vtex-button'),
        btnCloseModalItemAgregado: () => cy.get('.vtex-alert__close-icon')
    }

    modalText = "Ítem agregado al carrito";
    
    agregarPrimerProducto = () => this.elements.btnAgregarProducto().first().click();

    beVisibleImagenProducto = () => this.elements.imgProducto().should('be.visible');

    beVisibleModalItemAgregado = () => this.elements.modalItemAgregado().contains(this.modalText);

    clickBtnCarritoCompras = () => this.elements.btnCarritoCompras().click();

    obtenerPrecioProducto = () => cy.obtenerPrecioProducto(this.elements.precioProducto).then(value => {return value});

    clickCloseModalItemAgregado = () => this.elements.btnCloseModalItemAgregado().click();
}

module.exports = new Promociones()