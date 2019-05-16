it('mock gebieden get', function() {
    cy.server({ delay: 1000 });
    cy.route({
      method: 'GET',
      url: 'http://localhost:4200/api/Gebied',
      status: 200,
      response: 'fixture:gebieden.json'
    });
  
    cy.visit('http://localhost:4200/gebied-list');
    cy.get('[data-cy=gebiedCard]').should('have.length', 14);
  });