describe('Input form', () => {
  it('focuses input on load', () => {
    cy.visit('http://localhost:3030')

    cy.focused()
      .should('have.class', 'new-todo')
  })
})
