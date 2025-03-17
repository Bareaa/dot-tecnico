describe('História do Usuário 0.3: Como usuário Quero gerenciar meu carrinho de compras Para preparar minha compra', () => {
    
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
        cy.contains('Products').should('exist')
    })
    
    afterEach(() => {
        cy.logout()
    })

    it('CT0.3.1 - Adicionar Produto ao Carrinho', () => {
        cy.addProductToCart('Sauce Labs Backpack')
        cy.addProductToCart('Test.allTheThings() T-Shirt (Red)')
        cy.validateCartItemCount(2)
        cy.get('.shopping_cart_link').click()
        
        // Validar se os produtos estão no carrinho
        cy.get('.cart_item').first().within(() => {
            cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
            cy.get('.inventory_item_price').should('have.text', '$29.99')
        })
        cy.get('.cart_item').last().within(() => {
            cy.get('.inventory_item_name').should('have.text', 'Test.allTheThings() T-Shirt (Red)')
            cy.get('.inventory_item_price').should('have.text', '$15.99')
        })
    })

    it('CT0.3.2 - Remover Produto do Carrinho', () => {
        // Adicionar todos os produtos ao carrinho
        cy.get('.btn_primary').each(($btn) => {
            cy.wrap($btn).click()
        })
        cy.validateCartItemCount(6)
        cy.get('.shopping_cart_link').click()
        
        // Remover dois produtos do carrinho
        cy.get('.cart_item').eq(0).within(() => {
            cy.get('.cart_button').click()
        })
        cy.get('.cart_item').eq(1).within(() => {
            cy.get('.cart_button').click()
        })
        
        // Verificar se o carrinho contém 4 produtos
        cy.validateCartItemCount(4)
        cy.get('.cart_item').should('have.length', 4)
    })
})
