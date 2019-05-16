it('show register form', function() {
    cy.visit('http://localhost:4200/register')
    cy.get('[data-cy=voornaam]');
    cy.get('[data-cy=naam]');
    cy.get('[data-cy=email]');
    cy.get('[data-cy=wachtwoord]');
    cy.get('[data-cy=herhaalWachtwoord]');
});
it("fill in registerform", function(){
    const randomGetal = Math.round(Math.random(2000) * 100000);
    cy.get('[data-cy = voornaam]').type("test");
    cy.get('[data-cy = naam]').type(`testAchternaam`);
    cy.get('[data-cy = email]').type(`test${randomGetal}@test.be`);
    cy.get('[data-cy = wachtwoord]').type("P@ssword1111");
    cy.get('[data-cy = herhaalWachtwoord]').type("P@ssword1111");
    cy.get('[data-cy = register-button]').click();
    cy.url().should("eq", "http://localhost:4200/evenement-list")
});