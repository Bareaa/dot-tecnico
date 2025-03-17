describe('História do Usuário 0.2: Como usuário Quero visualizar e filtrar produtos Para encontrar itens de meu interesse', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
        cy.contains('Products').should('exist')
    })

    it('CT0.2.1 - Ordenação A-Z', () => {
        cy.get('select').select('az')
        cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack')
        cy.get('.inventory_item_name').last().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    })

    it('CT0.2.2 - Ordenação Preço Crescente', () => {
        cy.get('select').select('lohi')
        cy.get('.inventory_item_price').first().should('have.text', '$7.99')
        cy.get('.inventory_item_price').last().should('have.text', '$49.99')
    })

    it('CT0.2.3 - Ordenação Z-A', () => {
        cy.get('select').select('za')
        cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
        cy.get('.inventory_item_name').last().should('have.text', 'Sauce Labs Backpack')
    })

    it('CT0.2.4 - Ordenação Preço Decrescente', () => {
        cy.get('select').select('hilo')
        cy.get('.inventory_item_price').first().should('have.text', '$49.99')
        cy.get('.inventory_item_price').last().should('have.text', '$7.99')
    })

    it('CT0.2.5 - Validação Detalhes do Produto', () => {
        cy.get('.inventory_item_name').first().click()
        cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack')
        cy.get('.inventory_details_desc').should('exist')
        cy.get('.inventory_details_price').should('have.text', '$29.99')
        cy.get('.inventory_details_img').should('exist')
        cy.get('.inventory_details_back_button').click()
    })
})