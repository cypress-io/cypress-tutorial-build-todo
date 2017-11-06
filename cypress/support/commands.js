Cypress.Commands.add('seedAndVisit', (seedData = 'fixture:todos') => {
  cy.server()
  cy.route('GET', '/api/todos', seedData)
  cy.visit('/')
})
