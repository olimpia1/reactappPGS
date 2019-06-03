describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('/')
      cy.get('input')
      .type('Rzeszów')
      cy.get('button').click()
      cy.get('span').should('contain', 'clear sky')
      cy.get('span').should('contain', 'Celsius')
      cy.get('button').should('contain', 'Get Weather')
      cy.get('span').should('contain', 'Humidity')
      cy.get('a').should('contain', 'Sylwia Bartman')
    })
  })