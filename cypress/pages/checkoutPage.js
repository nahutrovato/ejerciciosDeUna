class Checkout {

    elements = {
        btnProcederAlPago: () => cy.get('#cart-to-orderform'),
        inputEmail: () => cy.get('#client-email'),
        inputFirstName: () => cy.get('#client-first-name'),
        inputLastName: () => cy.get('#client-last-name'),
        inputCellphone: () => cy.get('#client-phone'),
        inputPostalCode: () => cy.get('#ship-postalCode'),
        checkAceptarTerminosCondiciones: () => cy.get('.form-terms'),
        btnContinuar: () => cy.get('#go-to-shipping')
    }

    clickBtnProcederAlPago = () => this.elements.btnProcederAlPago().click();

    completarInformacionUsuario = (seccion) => {
        cy.fixture('data').then(({firstName,lastName,email,cellphone,postalCode}) => {
            if(seccion=="seccionSuperior"){
                this.elements.inputEmail().type(email)
                this.elements.inputFirstName().type(firstName);
                this.elements.inputLastName().type(lastName);
                this.elements.inputCellphone().type(cellphone);
            }else{
                this.elements.inputPostalCode().type(postalCode)
            }
            
        })
    };

    aceptarTerminosCondiciones = () => this.elements.checkAceptarTerminosCondiciones().check();

    clickBtnContinuar = () => this.elements.btnContinuar().click();

    
}

module.exports = new Checkout()