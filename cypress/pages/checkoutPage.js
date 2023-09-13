class Checkout {

    elements = {
        titleCheckOut: () => cy.title(),
        btnProcederAlPago: () => cy.get('#cart-to-orderform'),
        inputEmail: () => cy.get('#client-email'),
        inputFirstName: () => cy.get('#client-first-name'),
        inputLastName: () => cy.get('#client-last-name'),
        inputCellphone: () => cy.get('#client-phone'),
        inputPostalCode: () => cy.get('#ship-postalCode'),
        checkAceptarTerminosCondiciones: () => cy.get('.form-terms'),
        btnContinuar: () => cy.get('#go-to-shipping'),
        urlCheckOut: (text) => cy.url().should('include', "checkout/#/" +text)
    }

    clickBtnProcederAlPago = () => this.elements.btnProcederAlPago().click();

    completarInformacionUsuario = (seccion) => {
        cy.fixture('data').then(({firstName,lastName,email,cellphone,postalCode}) => {
            if(seccion=="seccionSuperior"){
                this.elements.inputEmail().type(email);
                this.elements.urlCheckOut('email');
                this.elements.inputFirstName().type(firstName);
                this.elements.urlCheckOut('profile');
                this.elements.inputLastName().type(lastName);
                this.elements.inputCellphone().type(cellphone);
            }else{
                this.elements.inputPostalCode().type(postalCode)
                this.elements.urlCheckOut('shipping');
            };  
        });
    };

    aceptarTerminosCondiciones = () => this.elements.checkAceptarTerminosCondiciones().check();

    clickBtnContinuar = () => this.elements.btnContinuar().click();

    titleCheckOut = () => this.elements.titleCheckOut().should('eq','Vinoteca - Finalizar la compra');

    urlCheckOut = () => this.elements.urlCheckOut('cart');
}

module.exports = new Checkout()