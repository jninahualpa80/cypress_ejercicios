describe('reto', () => {
  it('Ejercicio 1', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()

    cy.get('.shopping_cart_badge').should('contain', '2')
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('Juan')
    cy.get('#last-name').type('Ninahualpa')
    cy.get('#postal-code').type('01234')
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
    cy.get('#back-to-products').click()

  })
})