describe('Styleguide page', () => {
  it('displays welcome message', () => {
    cy.visit('/styleguide');

    cy.get('h1').contains('Welcome to Next.js!');
  });
});
