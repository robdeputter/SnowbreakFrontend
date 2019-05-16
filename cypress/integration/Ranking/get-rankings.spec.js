it('register form works', function() {
    cy.server({ delay: 1000 });
    cy.route({
      method: 'GET',
      url: 'http://localhost:4200/api/Ranking',
      status: 200,
      response: 'fixture:rankings.json'
    });
  
    cy.visit('http://localhost:4200/ranking-list');
    cy.get('[data-cy = rankingCard]').should('have.length', 1);
    cy.get('[data-cy = gebiedCard]').should('have.length', 10);
});