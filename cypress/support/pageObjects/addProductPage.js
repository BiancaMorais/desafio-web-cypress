/// <reference types="Cypress" />

import addProductElements from '../elements/addProductElements'
const addproductElements = new addProductElements
const url = Cypress.config("baseUrl")

class addProductPage {
    acessAutomationPactice() {
        cy.visit(url)
    }

    clickTextArea() {
        cy.get(addproductElements.searchQuery()).should('be.visible').click()
    }

    searchProduct() {
        cy.get(addproductElements.searchQuery()).should('be.visible').type(addproductElements.productName())
    }

    clickSearchButton() {
        cy.get(addproductElements.submitSearch()).should('be.visible').click()
    }

    getResult() {
        cy.get(addproductElements.productList()).find('li').contains(addproductElements.productName())
    }

    addProduct() {
        if (cy.get(addproductElements.productList()).find('li').first().contains(addproductElements.productName())) {
            cy.contains('Add to cart').click({ force: true })
        } else {
            cy.log('Oops, it looks like your product was not found. Try again.')
        }
    }

    checkResultCart() {
        cy.get(addproductElements.layerCartProduct()).should('contain', addproductElements.sucessfullMessage())
    }

    checkResultProductCart() {
        cy.get(addproductElements.layerCartProduct()).should('contain', addproductElements.productName())
        cy.get(addproductElements.closeWindow()).click()
    }

    checkOrder() {
        cy.get(addproductElements.shoppingCart()).click()
        cy.get(addproductElements.cartDescription()).should('contain', addproductElements.productName())
        cy.get(addproductElements.cartAvail()).should('contain', addproductElements.inStock())
    }

}

export default addProductPage;

