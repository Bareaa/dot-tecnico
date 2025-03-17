Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.get('input[placeholder="Username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
})

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.contains('.inventory_item_name', productName)
      .parents('.inventory_item')
      .find('.btn_primary')
      .click()
})

Cypress.Commands.add('removeProductFromCart', (productName) => {
    cy.contains('.cart_item', productName)
      .find('.cart_button')
      .click()
})

Cypress.Commands.add('validateCartItemCount', (count) => {
    cy.get('.shopping_cart_badge').should('have.text', count.toString())
})
