describe('Main Spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'sampleData'
    }).as('sampleData')
  })
  it('Page load tests', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@sampleData')
    cy.get('.app-title').should('contain', 'Turing Cafe Reservations')
    cy.get('.resy-form').should('exist')
    .get('[placeholder="Name"]').should('exist')
    .get('[type="date"]').should('exist')
    .get('[type="time"]').should('exist')
    .get('[placeholder="Number of Guests"]').should('exist')
    .get('form > button').should('exist')
    cy.get('.resy-container').should('exist')
    .children().should('contain', 4)
  })

  it('Form tests', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@sampleData')
  })

  it('Add new reservation user flow', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@sampleData')
  })

})