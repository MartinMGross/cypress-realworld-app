/// <reference types="cypress" />


describe('Criar usuário Real Wold App e fazer login e transferência - teste', () => {
    const selector = {
        firstname: "[name='firstName']",
        lastname: "[name='lastName']",
        username: "[name='username']",
        password: "[name='password']",
        confirmPassword: "[name='confirmPassword']",
        submitButton: "[data-test='signup-submit']",
    }


    it.skip('Criar usuário com dados corretos', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[href='/signup']").click()
        cy.get(selector.firstname).type('TestAqui')
        cy.get(selector.lastname).type('TestUsuario')
        cy.get(selector.username).type('UsuarioTest')
        cy.get(selector.password).type('senha123')
        cy.get(selector.confirmPassword).type('senha123')
        cy.get(selector.submitButton).click()
        cy.url().should('include', '/signin');
        
    })

    it.skip('Criar usuário com dados incorretos', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[href='/signup']").click()
        cy.get(selector.firstname).type('nadacomnada')
        cy.get(selector.lastname).type('nadacomnada')
        cy.get(selector.username).type('eusouumteste')
        cy.get(selector.password).type('3')
        cy.get(selector.confirmPassword).type('3')
        cy.contains('Password must contain at least 4 characters').should('be.visible');
        //cy.get(selector.submitButton).click()
        //cy.get("[role='alert']").should('be.visible');
       
    })

    it.skip('Fazer login e informar conta bancária', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('UsuarioTest')
        cy.get("[name='password']").type('senha123')
        cy.get("[data-test='signin-submit']").click()
        // isso abaixo somente no primeiro login após criar o usuário:
        //cy.get("[data-test='user-onboarding-next']").click()
        //cy.get("[placeholder='Bank Name']").type('Banco Teste')
        //cy.get("[placeholder='Routing Number']").type('123456789')
        //cy.get("[placeholder='Account Number']").type('987654321')
        //cy.get("[data-test='bankaccount-submit']").click()
        //cy.get("[data-test='user-onboarding-next']").click() - //não aparece o botão, somente na primeira vez
        cy.contains('Logout').should('be.visible');
    })

    it.skip('trasnferência de valores com ou sem saldo', () => {

        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('UsuarioTest')
        cy.get("[name='password']").type('senha123')
        cy.get("[data-test='signin-submit']").click()

        cy.get(".NavBar-newTransactionButton").click()
        cy.get("[src='https://avatars.dicebear.com/api/human/M1ty1gR8B3.svg']").click()
        cy.get("[name='amount']").type('1500')
        cy.get("[placeholder='Add a note']").type('Teste transferência')
        cy.get("[data-test='transaction-create-submit-payment']").click()
        cy.contains('Transaction Submitted!').should('be.visible');
    })

    it('ver histórico de transações', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('UsuarioTest')
        cy.get("[name='password']").type('senha123')
        cy.get("[data-test='signin-submit']").click()
        cy.get("[href='/personal']").click()
        
    })

    it('ver histórico de transações com usuario sem transação', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('UsuarioTeste2')
        cy.get("[name='password']").type('senha1234')
        cy.get("[data-test='signin-submit']").click()
        cy.get("[href='/personal']").click()
        cy.contains('No Transactions').should('be.visible');
        
    })



    it.skip('Fazer login informações erradas', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get("[name='username']").type('Usuariodeerro123')
        cy.get("[name='password']").type('senhaparaerro1234567')
        cy.get("[data-test='signin-submit']").click()
        cy.get("[role='alert']").should('be.visible');
    })

    

})



