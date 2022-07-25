describe('Home page', () => {
  it('displays welcome message', () => {
    cy.visit('/');

    cy.get('h1').contains("Yay! You're on ReactJS!");
  });
});
