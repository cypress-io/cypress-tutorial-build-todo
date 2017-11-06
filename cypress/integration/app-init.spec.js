describe('App initialization', () => {
  it.only('Loads todos on page load', () => {
    cy.server()
    cy.route('GET', '/api/todos', 'fixture:todos')
    cy.visit('/')

    cy.get('.todo-list li')
      .should('have.length', 4)
  })
})
