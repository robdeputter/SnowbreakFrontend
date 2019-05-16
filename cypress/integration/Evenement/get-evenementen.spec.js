it('mock evenementen get', function() {
    cy.server({ delay: 1000 });
    cy.route({
      method: 'GET',
      url: 'http://localhost:4200/api/Evenement',
      status: 200,
      response: 'fixture:evenementen.json'
    });
    cy.visit('http://localhost:4200/');
    cy.get('[data-cy=evenementCard]').should('have.length', 5);
});