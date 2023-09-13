class Carrito {

    elements = {
        btnCheckOut: () => cy.get('#proceed-to-checkout > .vtex-button__label')
    }

    precioProducto = '#total-price > .vtex-checkout-summary-0-x-price';
    
    obtenerPrecioProducto = () => cy.obtenerPrecioProducto(this.precioProducto).then(value => {return value});

    clickBtnCheckOut = () => this.elements.btnCheckOut().click();
};

module.exports = new Carrito()