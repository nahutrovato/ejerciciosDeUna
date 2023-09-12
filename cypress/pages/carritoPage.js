class Carrito {

    elements = {
        precioProducto: '#total-price > .vtex-checkout-summary-0-x-price',
        btnCheckOut: () => cy.get('#proceed-to-checkout > .vtex-button__label')
    }

    obtenerPrecioProducto = () => cy.obtenerPrecioProducto(this.elements.precioProducto).then(value => {return value});

    clickBtnCheckOut = () => this.elements.btnCheckOut().click();
};

module.exports = new Carrito()