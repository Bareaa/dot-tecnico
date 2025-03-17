describe('História do Usuário 0.1: Como usuário da plataforma Quero poder realizar o fluxo login e obter sucesso para acessar a plataforma', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Swag Labs').should('exist')
    })

    it('CT0.1.1 - Logar com usuário válido', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.contains('Products').should('exist')
        cy.logout()
    })

    it('CT0.1.2 - Login com usuário bloqueado', () => {
        cy.login('locked_out_user', 'secret_sauce')
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('exist')
    })

    it('CT0.1.3 - Login com credenciais inválidas', () => {
        cy.login('standard_user', 'senhaerrada')
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('exist')
    })

    it('CT0.1.4.1 - Validar campos obrigatórios(senha)', () => {
        cy.get('input[placeholder="Username"]').clear()
        cy.get('input[placeholder="Password"]').clear()
        cy.get('input[placeholder="Username"]').type('standard_user')

        cy.get('input[type="submit"]').click()
        cy.contains('Epic sadface: Password is required').should('exist')

    })
    it('CT0.1.4.2 - Validar campos obrigatórios(usuário)', () => {
        cy.get('input[placeholder="Username"]').clear()
        cy.get('input[placeholder="Password"]').clear()
        cy.get('input[placeholder="Password"]').type('standard_user')

        cy.get('input[type="submit"]').click()
        cy.contains('Epic sadface: Username is required').should('exist')

    })
})
