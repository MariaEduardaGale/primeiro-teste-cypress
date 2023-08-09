describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br/')

    cy.get('.mburger').click()

    cy.get('#txtLoginNaoLogadoMob').click()
    
    cy.get('#login-email').type('johndoe@example.com')
    cy.get('#login-password').type('examplesenha')
    cy.get('#btnLoginHeader').click()
  })
})