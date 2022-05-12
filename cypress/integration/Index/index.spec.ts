describe('Index page', () => {
  it('displays welcome message', () => {
    cy.visit('/');

    cy.get('h1').contains('Welcome to Next.js!!!!!');
  });
});
