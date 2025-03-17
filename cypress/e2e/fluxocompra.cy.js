describe('História do Usuário 0.4: Como usuário Quero finalizar minha compra Para concluir o processo de compra', () => {
    
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
        cy.contains('Products').should('exist')
    })
    
    afterEach(() => {
        cy.logout()
    })

    it('CT0.4.1 - Checkout Completo', () => {
        // Selecionar três itens aleatórios
        const items = [
            '[data-test="add-to-cart-sauce-labs-backpack"]',
            '[data-test="add-to-cart-sauce-labs-bike-light"]',
            '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
            '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
            '[data-test="add-to-cart-sauce-labs-onesie"]'
        ];
        const selectedItems = Cypress._.sampleSize(items, 3);
        selectedItems.forEach(item => {
            cy.get(item).click();
        });

        // Validar se tem 3 itens inseridos
        cy.validateCartItemCount(3)
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Fulano')
        cy.get('[data-test="lastName"]').type('de Tal')
        cy.get('[data-test="postalCode"]').type('12345-678')
        cy.get('[data-test="continue"]').click()
        
        // Valida preço total
        cy.get('.summary_subtotal_label').invoke('text').then((itemTotalText) => {
            const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
            cy.get('.summary_tax_label').invoke('text').then((taxText) => {
                const tax = parseFloat(taxText.replace('Tax: $', ''));
                const expectedTotal = (itemTotal + tax).toFixed(2);
                cy.get('.summary_total_label').invoke('text').then((totalText) => {
                    const actualTotal = parseFloat(totalText.replace('Total: $', ''));
                    expect(actualTotal).to.eq(parseFloat(expectedTotal));
                });
            });
        });
        
        cy.get('[data-test="finish"]').click()
        cy.contains('Thank you for your order!').should('exist')
    })

    it('CT0.4.2 - Confirmação de Compra', () => {
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Fulano')
        cy.get('[data-test="lastName"]').type('de Tal')
        cy.get('[data-test="postalCode"]').type('12345-678')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.contains('Thank you for your order!').should('exist')
    })

    it('CT0.4.3 - Validação Campos Obrigatórios', () => {
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="continue"]').click()
        cy.contains('Error: First Name is required').should('exist')
        cy.get('[data-test="firstName"]').type('Fulano')
        cy.get('[data-test="continue"]').click()
        cy.contains('Error: Last Name is required').should('exist')
        cy.get('[data-test="lastName"]').type('de Tal')
        cy.get('[data-test="continue"]').click()
        cy.contains('Error: Postal Code is required').should('exist')
        cy.get('[data-test="postalCode"]').type('12345-678')
        cy.get('[data-test="continue"]').click()
    })
})
