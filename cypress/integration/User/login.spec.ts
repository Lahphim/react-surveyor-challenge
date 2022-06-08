describe('Login page', () => {
  it('displays login form', () => {
    cy.visit('/user/login');

    cy.findByLabelText('Email').should('exist');
    cy.findByLabelText('Password').should('exist');
    cy.findByRole('button', { name: /Sign in/ }).should('exist');
  });
});
