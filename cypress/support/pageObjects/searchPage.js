/// <reference types="Cypress" />

import searchElements from '../elements/searchElements'
const searchelements = new searchElements
const url = Cypress.config("baseUrl")

class searchPage {

    acessAutomationPactice() {
        cy.visit(url)
    }

    clickTextArea() {
        cy.get(searchelement.searchQuery()).should('be.visible').click()
    }

    searchProduct() {
        cy.get(searchelement.searchQuery()).should('be.visible').type(searchelement.productName())
    }

    clickSearchButton() {
        cy.get(searchelements.submitSearch()).should('be.visible').click()
    }

    getResult() {
        cy.get(searchelements.productList()).find('li').contains(searchelement.productName())

    }
}

export default searchPage;

